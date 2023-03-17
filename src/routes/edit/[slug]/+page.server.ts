import { supabase } from '$lib/utils/supabaseClient';
import { error as fourOhFour, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoadEvent, Actions } from './$types';
import type { BlogPost } from '$lib/types/blogTypes.types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { marked } from 'marked';
import { getTodayString, highlightSettings } from '$lib/utils/utils';

export const load = ( async (event: PageServerLoadEvent ) => {
    return loadFromDB(event);
})

const loadFromDB = async (event: PageServerLoadEvent) => {
    
    // bail out early if user isn't logged in
    const session = await getServerSession(event);
    if(!session?.user?.aud) {
        throw fourOhFour(404, {
            message: 'Page not found'
        })
    }

    const slug = event.params.slug;

    if(slug === "new") {
        // new blog post
        return {
            is_published: "",
            title: "",
            description: "",
            date: "",
            urlStub: "",
            content: "",
            mdContent: "",
            thumbnail: "",
            thumbnail_alt_text: ""
        }
    }

    const { data, error } = await supabase
    .from('blog_posts')
    .select(`
        is_published,
        published_at,
        urlStub,
        title,
        description,
        content,
        thumbnail,
        thumbnail_alt_text
    `)
    .eq('urlStub', slug);

    if(!error && data !== null && data?.length !== 0) {

        const dbContent = data[0].content;
        // console.log('content', dbContent);

        const content = compileWithMarked(dbContent);
        const mdContent = data[0].content;
        const date = data[0].published_at;
        const { title, description, urlStub, is_published, thumbnail, thumbnail_alt_text } = data[0];

        return {
            is_published,
            title,
            description,
            date,
            urlStub,
            content,
            mdContent,
            thumbnail,
            thumbnail_alt_text
        }
    } else {
        throw fourOhFour(404, {
            message: 'Blog post not found'
        })
    }
}

const compileWithMarked = async(data: string) => {
    marked.setOptions({
        highlight: (code) => {
            return highlightSettings(code);
        },
        langPrefix: 'hljs language-'
    })

    return marked(data);
}

/** @type {import('./$types').Actions} */
export const actions = {
    updatePost: async ({ request }) => {
        const formData = await request.formData();
        // console.log('form data', formData);
        
        const urlStub = formData.get("urlStub")?.toString();
        const startingUrlStub = formData.get("startingUrlStub")?.toString();
        
        const updateObject: BlogPost = {
            is_published: formData.get("isPublished") === 'on' ? true : false,
            title: formData.get("postTitle")?.toString(),
            description: formData.get("postDescription")?.toString(),
            content: formData.get("markdown")?.toString(),
            urlStub: urlStub
        };
        
        if(formData.get("isPublished") === 'on') {
            const today = getTodayString();
            updateObject["published_at"] = today;
        }
            
        const { data, error } = await supabase
        .from('blog_posts')
        .update(updateObject)
        .eq('urlStub', startingUrlStub);

        if(!error) {
            console.log('error?', error)
            if(urlStub) {
                throw redirect(303, `/blog/${urlStub}`);
            } else {
                throw redirect(303, '/blog');
            }
        } else {
            console.log("update post error: ", error);
            throw fail(500, {
                error: 'Something went wrong while updating your blog post.',
                values: {
                    error
                }
            });
        }
    },
    createPost: async ({ request }) => {
        const formData = await request.formData();
        console.log('new post form data', formData);

        const urlStub = formData.get("urlStub")?.toString();

        const createObject: BlogPost = {
            is_published: formData.get("isPublished") === 'on' ? true : false,
            title: formData.get("postTitle")?.toString(),
            description: formData.get("postDescription")?.toString(),
            content: formData.get("markdown")?.toString(),
            urlStub: urlStub
        };

        const { data, error } = await supabase
        .from('blog_posts')
        .insert(createObject)
        .eq('urlStub', urlStub);

        if(!error) {
            if(urlStub) {
                throw redirect(303, `/blog/${urlStub}`);
            } else {
                throw redirect(303, '/blog');
            }
        } else {
            console.log("update post error: ", error);
            throw fail(500, {
                error: 'Something went wrong while updating your blog post.',
                values: {
                    error
                }
            });
        }
    }
} satisfies Actions;