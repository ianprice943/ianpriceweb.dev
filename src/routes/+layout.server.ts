import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const load = ( async (event: ServerLoadEvent) => {

    const session = await getServerSession(event);

    return {
        session: session,
    }
});