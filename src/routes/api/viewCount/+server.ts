import type { RequestHandler } from '@sveltejs/kit'
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/utils/supabaseClient';

export const POST = ( async ({ request }) => {
    // console.log('req', request);
    const { viewed, post } = await request.json();

    try {
        if(viewed) {
            const viewCount = await getViewCount(post);
            if(viewCount !== -1) {
    
                const success = await updateViewCount(post, viewCount);
    
                if(success) {
                    return json({status: 200});
                } else {
                    throw new Error('error updating view count');
                }
            }
        }
    } catch (error) {
        return json({status: 400, error: error});
    }
    return json({status: 400, error: 'a problem occured updating the view count'});
}) satisfies RequestHandler;

const getViewCount = async (urlStub: string): Promise<number> => {
    const { data, error } = await supabase
        .from('blog_posts')
        .select(`
            views
        `)
        .eq('urlStub', urlStub);
    
    if(!error) {
        return data[0].views;
    } else {
        return -1;
    }
}

const updateViewCount = async (urlStub: string, viewCount: number): Promise<boolean> => {
    const updateObject = {
        views: viewCount + 1
    }

    const { data, error } = await supabase
        .from('blog_posts')
        .update(updateObject)
        .eq('urlStub', urlStub);

    if(!error) {
        return true;
    } else {
        console.log('error updating view count', error);
        return false;
    }
}