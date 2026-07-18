import { createSupabaseClient } from '$lib/utils/supabaseClient';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const load = ( async (event: ServerLoadEvent) => {
    event.depends('supabase:auth')
    const supabaseClient = createSupabaseClient(event)
    const { data: { session } } = await supabaseClient.auth.getSession();

    return {
        session: session,
    }
});