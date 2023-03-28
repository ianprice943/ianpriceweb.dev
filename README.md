# The Home of the ianpriceweb.dev Source Code
This repository contains the full source code for the ianpriceweb.dev website. The only thing it's missing is the Supabase environment variables. I am leaving in most of the original SvelteKit README content as the instructions are quite useful.

# DB Type Generation
A handy script to analyze your Supabase Postgres tables and generate a type file. You must link your Supabase project and log in first. More info on that [here](https://supabase.com/docs/reference/cli/supabase-link):
```
npx supabase gen types typescript --linked > src/lib/types/database.types.ts
```

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
