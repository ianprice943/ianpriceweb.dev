import type { Actions } from './$types';
import { supabase } from '$lib/utils/supabaseClient';
import { isLoggedIn } from '$lib/stores/stores';

export const actions = {
    login: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email')?.toString() || "";
        const pw = formData.get('password')?.toString() || "";

        const { data, error } = supabase.auth.signInWithPassword({
            email: email,
            password: pw
        });

        if(!error) {
            console.log('login data', data);
        }
    }
} satisfies Actions;