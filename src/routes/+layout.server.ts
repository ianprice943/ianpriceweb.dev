import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load = ( async (event: any) => {

    const session = await getServerSession(event);

    return {
        session: session,
        // posts: loadBlogAllPosts()
    }
});