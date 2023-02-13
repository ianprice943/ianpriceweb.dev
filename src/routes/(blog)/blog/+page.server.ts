import { supabase } from "$lib/utils/supabaseClient";

export const load = ( async () => {
    const { data, error } = await supabase
    .from('blog_posts')
    .select(`

    `);

    if(!error) {
        return data;
    } else {
        console.log('error:', error);
    }
});