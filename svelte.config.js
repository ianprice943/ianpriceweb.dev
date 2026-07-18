import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/postcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
	},
	extensions: [
		'.svelte',
	],
	preprocess: [
		tailwindcss(),
		vitePreprocess(),
	],
};

export default config;
