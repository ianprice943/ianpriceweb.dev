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
    `);

    if(!error) {
        const session = await getServerSession(event);
        
        // Filter out unpublished posts if not authenticated
        if(!session?.user?.aud) {
            console.log('data', data);
            const filtered = data?.filter(post => {
                post.is_published;
            });
            return {filtered}
        }

        return {data};
    } else {
        console.log('error:', error);
        return {error: error}
    }
});