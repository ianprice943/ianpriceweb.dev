import { defineEnvVars } from '@sveltejs/kit/env';

// @migration-task Review usage of dynamic environment variables. They fall back to the empty string if not present, which may not be what you want.
export const variables = defineEnvVars({
	PUBLIC_SUPABASE_URL: { public: true, schema: (input) => input ?? '' },
	PUBLIC_SUPABASE_KEY: { public: true, schema: (input) => input ?? '' }
});
