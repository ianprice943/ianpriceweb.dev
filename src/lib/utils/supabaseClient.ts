import { createServerClient } from '@supabase/ssr';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$app/env/public';

export const createSupabaseClient = (event: any) => {
	return createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY, {
		cookies: {
			get(name) {
				return event.cookies.get(name);
			}
		}
	});
};
