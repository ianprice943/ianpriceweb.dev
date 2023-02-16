// TODO Look into form actions and maybe move this logic over to [slug]/+page.server.ts

import { json } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import { supabase } from '$lib/utils/supabaseClient';

export const PUT = (async ({ request }) => {
    const { 
        is_published,
        published_at,
        urlStub,
        title,
        description,
        content 
    } = await request.json();
    
    const { data, error } = await supabase
    .from('blog_posts')
    .update({
        'is_published': is_published,
        'published_at': published_at,
        'title': title,
        'description': description,
        'content': content
    })
    .eq('urlStub', urlStub);

    if(!error) {
        console.log("PUT data", data);
        return json("ok");
    } else {
        return json("update failed");
    }

}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
    const { 
        is_published,
        published_at,
        urlStub,
        title,
        description,
        content 
    } = await request.json();

    const { data, error } = await supabase
    .from('blog_posts')
    .insert([
        {'is_published': is_published},
        {'published_at': published_at},
        {'urlStub': urlStub},
        {'title': title},
        {'description': description},
        {'content': content}
    ]);

    if(!error) {
        console.log("POST data", data);
        return json("ok");
    } else {
        return json("insert failed");
    }

}) satisfies RequestHandler;