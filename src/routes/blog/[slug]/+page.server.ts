import { createSupabaseClient } from '$lib/utils/supabaseClient';
import { error as fourOhFour } from '@sveltejs/kit';
import type { PageServerLoad, PageServerLoadEvent } from './$types';
import { marked } from 'marked';
import {  highlightSettings } from '$lib/utils/utils';

export interface BlogPost {
    is_published: boolean;
    date: string;
    urlStub: string;
    title: string;
    description: string;
    content: string;
    mdContent: string;
    thumbnail: string;
    thumbnail_alt_text: string;
}

// @ts-ignore typescript and svelte aren't playing nice right now
export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
    const supabaseClient = createSupabaseClient(event);
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    const slug = event.params.slug;
    const { data, error } = await supabaseClient
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
    // .eq('urlStub', slug);
    .eq('urlStub', slug);
    
    if(!error && data !== null && data?.length !== 0) {
    
        // if the blog is unpublished or there's no content, and the user is not authenticated
        if((data[0].is_published === false || !data[0].content) && !session?.user?.aud) {
            throw fourOhFour(404, {
                message: 'Blog post not found'
            })
        }
    
        const mdContent = data[0].content;
        const content = await compileWithMarked(mdContent);
        const date = data[0].published_at;
        const { title, description, urlStub, is_published, thumbnail, thumbnail_alt_text } = data[0];
    
        return {
            post: {
                is_published,
                title,
                description,
                date,
                urlStub,
                content,
                mdContent,
                thumbnail,
                thumbnail_alt_text
            } as BlogPost
        }
    } else {
        throw fourOhFour(404, {
            message: 'Blog post not found'
        })
    }
}


const compileWithMarked = async(data: string) => {
    marked.setOptions({
        highlight: (code, lang) => {
            return highlightSettings(code, lang);
        },
        langPrefix: 'hljs language-'
    })

    return marked(data);
}