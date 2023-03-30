import { supabase } from '$lib/utils/supabaseClient';
import { error as fourOhFour } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { marked } from 'marked';
import {  highlightSettings } from '$lib/utils/utils';

export const load = ( async (event: PageServerLoadEvent) => {
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

        const mdContent = data[0].content;
        const content = compileWithMarked(mdContent);
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
        highlight: (code, lang) => {
            return highlightSettings(code, lang);
        },
        langPrefix: 'hljs language-'
    })

    return marked(data);
}