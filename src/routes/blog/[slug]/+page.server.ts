import { supabase } from '$lib/utils/supabaseClient';
import { error as fourOhFour, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoadEvent, Actions } from './$types';
import type { BlogPost } from '$lib/types/blogTypes.types';
// import { createRequire } from "module";
// import { compile as mdsvexCompile } from 'mdsvex';
// import { compile as svelteCompile } from 'svelte/compiler';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { marked } from 'marked';
import { getTodayString, highlightSettings } from '$lib/utils/utils';

export const load = ( async (event: PageServerLoadEvent) => {
    // console.log('event', event);
    return loadFromDB(event);

});

const loadFromDB = async (event: PageServerLoadEvent) => {
    const slug = event.params.slug;
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

        const session = await getServerSession(event);

        // if the blog is unpublished or there's no content, and the user is not authenticated
        if((data[0].is_published === false || !data[0].content) && !session?.user?.aud) {
            throw fourOhFour(404, {
                message: 'Blog post not found'
            })
        }

        const dbContent = data[0].content;
        // console.log('content', dbContent);

        // const content = compileMD(dbContent, 'database');
        const content = compileWithMarked(dbContent);
        const mdContent = data[0].content;
        const date = data[0].published_at;
        const { title, description, urlStub, is_published, thumbnail, thumbnail_alt_text } = data[0];

        console.log('published?', is_published)

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
    }
} satisfies Actions;