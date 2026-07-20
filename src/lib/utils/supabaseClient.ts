import { createServerClient } from '@supabase/auth-helpers-sveltekit';
import { env } from '$env/dynamic/public'

export const createSupabaseClient = (event: any) => {
  return createServerClient(
    env.PUBLIC_SUPABASE_URL,
    env.PUBLIC_SUPABASE_KEY,
    {
      cookies: {
        get(name) {
          return event.cookies.get(name);
        }
      }
    }
  );
}