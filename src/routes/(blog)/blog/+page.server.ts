import { supabase } from "$lib/utils/supabaseClient";
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load = ( async (event: any) => {

    const session = await getServerSession(event);
    console.log('sess', await session);

    return {
        session: session,
        // posts: loadBlogAllPosts()
    }
});

const loadBlogAllPosts = async () => {
    const { data, error } = await supabase
    .from('blog_posts')
    .select(`
        id,
        published_at,
        is_published,
        urlStub,
        title,
        description
    `);

    if(!error) {
        return {data};
    } else {
        console.log('error:', error);
        return {error: error}
    }
}