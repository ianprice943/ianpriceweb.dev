import { supabase } from "$lib/utils/supabaseClient";
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import type { PageServerLoadEvent } from "./$types";

export const load = ( async (event: PageServerLoadEvent) => {
    const { data, error } = await supabase
    .from('blog_posts')
    .select(`
        id,
        published_at,
        is_published,
        urlStub,
        title,
        description,
        thumbnail,
        thumbnail_alt_text
    `).order('published_at', { ascending: false });
    /*  
        Order by most recent publishes. When I get enough articles I may 
        add a sorting function on the front end, but the initial page load
        will remain with this sorting.
    */

    if(!error) {
        const session = await getServerSession(event);
        
        // Filter out unpublished posts if not authenticated
        if(!session?.user?.aud) {
            const filtered = data?.filter(post => {
                return post.is_published;
            });
            return {filtered}
        }

        return {data};
    } else {
        console.log('error:', error);
        return {error: error}
    }
});