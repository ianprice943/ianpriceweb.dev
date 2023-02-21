import { supabase } from '$lib/utils/supabaseClient';
import { error as fourOhFour } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import type { BlogPost } from '$lib/types/blogTypes.types';
import { createRequire } from "module";
import { compile as mdsvexCompile } from 'mdsvex';
import { compile as svelteCompile } from 'svelte/compiler';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load = ( async (event) => {
    // console.log('event', event);
    return loadFromDB(event);

}) satisfies PageServerLoad;

const loadFromDB = async (event: any) => {
    const slug = event.params.slug;
    const { data, error } = await supabase
    .from('blog_posts')
    .select(`
        is_published,
        published_at,
        urlStub,
        title,
        description,
        content
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

        const content = compileMD(dbContent, 'database');
        const mdContent = data[0].content;
        const date = data[0].published_at;
        const { title, description, urlStub, is_published } = data[0];

        console.log('published?', is_published)

        return {
            is_published,
            title,
            description,
            date,
            urlStub,
            content,
            mdContent
        }
    } else {
        throw fourOhFour(404, {
            message: 'Blog post not found'
        })
    }
}

const loadFromStorage = async (slug: string) => {
    const { data, error } = await supabase
    .storage
    .from('blog-posts')
    .download(`${slug}/${slug}.md`);

    console.log('attempting to download', `${slug}/${slug}.md`)

    if(!error) {
        console.log(data);
        const bufferedData = await data.arrayBuffer().then((arrayBuffer) => Buffer.from(arrayBuffer, 'binary').toString());
        console.log('buff', bufferedData);

        return compileMD(bufferedData, 'bucket');
    }
}

const compileMD = async (data: string, source: string) => {
    // following code adapted from https://gist.github.com/babichjacob/c6907dd261fb3776044f618372d59470
    // unfortunately I lose the use of svelte components in markdown when using things this way

    const mdsvexConfig = {
      extensions: [".svelte.md"],
    }
    
    const preprocessed = await mdsvexCompile(data, mdsvexConfig);
    // console.log('preprocessed', preprocessed);
    
    if(preprocessed) {
        const compiled = svelteCompile(
        preprocessed.code,
            {
              generate: 'ssr',
              format: "cjs",
              hydratable: false,
            }
        );
        // console.log('compiled', compiled);
        
        const require = createRequire(import.meta.url);
        // getting TS to pipe down
        const module = { 
            exports: { 
                default: {
                    render: function(){} 
                },
                metadata: {
                    title: "",
                    description: "",
                    date: "",
                    urlStub: ""
                }
            } 
        };
        const exports = module.exports;
        
        eval(compiled.js.code);
        
        const rendered = module.exports.default.render();
        // still works even though TS is complaining
        const renderedHTML = rendered.html;

        if(source === "bucket") {
            const meta = module.exports.metadata;
            
            const { title, description, date, urlStub } = meta;
            // console.log('title', title, 'desc', description, 'date', date, 'stub', urlStub)
            const content = renderedHTML;
            const mdContent = data;
            
            return {
              title,
              description,
              date,
              urlStub,
              content,
              mdContent
            }
        } else if(source === "database") {
            return renderedHTML;
        }
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    updatePost: async ({ request }) => {
        const formData = await request.formData();
        console.log('form data', formData);

        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1;
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        const today = `${year}/${month}/${day}`;

        const urlStub = formData.get("urlStub")?.toString();

        const updateObject: BlogPost = {
            is_published: formData.get("isPublished") === 'on' ? true : false,
            published_at: today,
            title: formData.get("postTitle")?.toString(),
            description: formData.get("postDescription")?.toString(),
            content: formData.get("markdown")?.toString(),
            urlStub: urlStub
        };
            
        const { data, error } = await supabase
        .from('blog_posts')
        .update(updateObject)
        .eq('urlStub', urlStub);

        if(!error) {
            console.log("update post data", data);
            // return json("ok");
        } else {
            console.log("update post error: ", error);
            // return json("update failed");
        }
    }
} satisfies Actions;