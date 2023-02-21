import { createClient } from '@supabase/auth-helpers-sveltekit';
import type { Database } from '$lib/types/database.types'
import { env } from '$env/dynamic/public'

// export const supabase = createClient<Database>(`${env.SUPABASE_URL}`, `${env.SUPABASE_KEY}`)
export const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_KEY);