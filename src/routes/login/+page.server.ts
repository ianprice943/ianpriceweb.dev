import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';
import { createSupabaseClient } from '$lib/utils/supabaseClient';

export const actions = {
    login: async (event) => {
        const { request, cookies, url } = event;
        const supabaseClient = createSupabaseClient(event)
        const { data: { session } } = await supabaseClient.auth.getSession();
        const formData = await request.formData();
        const email = formData.get('email')?.toString() || "";
        const pw = formData.get('password')?.toString() || "";

        const { error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: pw
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
            console.log('error', error);
            return fail(500, {
                error: 'Server error. Try again later.',
                values: {
                    email,
                },
            })
        }

        redirect(303, '/');
    },
    logout: async (event: any) => {
        const supabaseClient = createSupabaseClient(event)
        await supabaseClient.auth.signOut();
        redirect(303, '/');
    }
} satisfies Actions;