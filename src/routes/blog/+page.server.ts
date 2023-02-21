import { supabase } from "$lib/utils/supabaseClient";

export const load = ( async () => {
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
});