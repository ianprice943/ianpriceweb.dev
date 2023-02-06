import { createClient } from '@supabase/supabase-js'
import type { Database } from '$lib/types/database.types'
import { env } from '$env/dynamic/private'

export const supabase = createClient<Database>(`${env.SUPABASE_URL}`, `${env.SUPABASE_KEY}`)