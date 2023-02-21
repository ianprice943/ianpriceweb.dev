import type { Actions } from './$types';
import { supabase } from '$lib/utils/supabaseClient';
import { fail, redirect } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { AuthApiError } from '@supabase/supabase-js';

export const actions = {
    login: async (event) => {
        const { request, cookies, url } = event;
        const { session, supabaseClient } = await getSupabase();
        const formData = await request.formData();
        const email = formData.get('email')?.toString() || "";
        const pw = formData.get('password')?.toString() || "";

        // const { data, error } = supabase.auth.signInWithPassword({
        //     email: email,
        //     password: pw
        // });

        const { error } = supabase.auth.signInWithOtp({
            email: email
        });

        if(error) {
            if (error instanceof AuthApiError && error.status === 400) {
                return fail(400, {
                error: 'Invalid credentials.',
                values: {
                    email,
                },
                })
            }
            return fail(500, {
                error: 'Server error. Try again later.',
                values: {
                email,
                },
            })
        }
    },
    logout: async (event: any) => {
        const { supabaseClient } = await getSupabase(event);
        await supabaseClient.auth.signOut();
        throw redirect(303, '/');
    }
} satisfies Actions;