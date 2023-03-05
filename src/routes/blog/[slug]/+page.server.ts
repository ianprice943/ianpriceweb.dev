import { supabase } from '$lib/utils/supabaseClient';
import { error as fourOhFour, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import type { BlogPost } from '$lib/types/blogTypes.types';
// import { createRequire } from "module";
// import { compile as mdsvexCompile } from 'mdsvex';
// import { compile as svelteCompile } from 'svelte/compiler';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { marked } from 'marked';
import { getTodayString, highlightSettings } from '$lib/utils/utils';

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
        content,
        thumbnailUrl,
        thumbnailAltText
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
        const { title, description, urlStub, is_published, thumbnailUrl, thumbnailAltText } = data[0];

        console.log('published?', is_published)

        return {
            is_published,
            title,
            description,
            date,
            urlStub,
            content,
            mdContent,
            thumbnailUrl,
            thumbnailAltText
        }
    } else {
        throw fourOhFour(404, {
            message: 'Blog post not found'
        })
    }
}

// const loadFromStorage = async (slug: string) => {
//     const { data, error } = await supabase
//     .storage
//     .from('blog-posts')
//     .download(`${slug}/${slug}.md`);

//     console.log('attempting to download', `${slug}/${slug}.md`)

//     if(!error) {
//         console.log(data);
//         const bufferedData = await data.arrayBuffer().then((arrayBuffer) => Buffer.from(arrayBuffer, 'binary').toString());
//         console.log('buff', bufferedData);

//         return compileMD(bufferedData, 'bucket');
//     }
// }

// const compileMD = async (data: string, source: string) => {
//     // following code adapted from https://gist.github.com/babichjacob/c6907dd261fb3776044f618372d59470
//     // unfortunately I lose the use of svelte components in markdown when using things this way

//     const mdsvexConfig = {
//         extensions: [".svelte.md"],
//     }
    
//     const preprocessed = await mdsvexCompile(data, mdsvexConfig);
//     // console.log('preprocessed', preprocessed);
    
//     if(preprocessed) {
//         const compiled = svelteCompile(
//         preprocessed.code,
//             {
//               generate: 'ssr',
//               format: "cjs",
//               hydratable: false,
//             }
//         );
//         // console.log('compiled', compiled);
        
//         const require = createRequire(import.meta.url);
//         // getting TS to pipe down
//         const module = { 
//             exports: { 
//                 default: {
//                     render: function(){} 
//                 },
//                 metadata: {
//                     title: "",
//                     description: "",
//                     date: "",
//                     urlStub: ""
//                 }
//             } 
//         };
//         const exports = module.exports;
        
//         eval(compiled.js.code);
        
//         const rendered = module.exports.default.render();
//         // still works even though TS is complaining
//         const renderedHTML = rendered.html;

//         if(source === "bucket") {
//             const meta = module.exports.metadata;
            
//             const { title, description, date, urlStub } = meta;
//             // console.log('title', title, 'desc', description, 'date', date, 'stub', urlStub)
//             const content = renderedHTML;
//             const mdContent = data;
            
//             return {
//                 title,
//                 description,
//                 date,
//                 urlStub,
//                 content,
//                 mdContent
//             }
//         } else if(source === "database") {
//             return renderedHTML;
//         }
//     }
// }

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
        console.log('form data', formData);
        
        const urlStub = formData.get("urlStub")?.toString();
        
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