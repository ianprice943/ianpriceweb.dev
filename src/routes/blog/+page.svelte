<script lang="ts">
    import BlogCard from "$lib/components/BlogCard.svelte";
    import { page } from '$app/stores';
    import type { PageData } from "./$types";
    import "$lib/styles/github.css";
    import "$lib/styles/github-dark.css";
    export let data: PageData;
    let posts = data?.data ?? data?.filtered;
    console.log(posts);
</script>

<svelte:head>
    <title>Ian Price - Blog</title>
    <meta name="description" content="The blog page of Ian Price's Portfolio" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href={`//www.ianpriceweb.dev/images/favicon.ico`} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="//www.ianpriceweb.dev/blog" />
    <meta property="og:title" content="Ian Price - Blog" />
    <meta property="og:description" content="The blog page of Ian Price's Portfolio" />
    <meta property="og:image" content="//www.ianpriceweb.dev/images/LinkedIn.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="//www.ianpriceweb.dev/blog" />
    <meta property="twitter:title" content="Ian Price - Blog" />
    <meta property="twitter:description" content="The blog page of Ian Price's Portfolio" />
    <meta property="twitter:image" content="//www.ianpriceweb.dev/images/LinkedIn.png" />
</svelte:head>

<h1 class="text-center md:text-left text-3xl mb-2">Blog</h1>
{#if $page.data.session}
    <a
        class="px-2 py-1 mb-2 rounded-md border-2 bg-red-800 border-red-800"
        href="/edit/new"
    >
        Create New Blog Post
    </a>
{/if}
{#if posts?.length && posts?.length > 0}
    <p class="my-2">Here's a list of my most recent blog posts.</p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {#each posts as post (post.id)}
            <BlogCard 
                urlStub={post.urlStub}
                title={post.title}
                description={post.description}
                thumbnailUrl={post.thumbnail}
                thumbnailAltText={post.thumbnail_alt_text}
            />
        {/each}
    </ul>
{:else}
    <h2 class="text-1xl">Sorry, there was a problem loading my blog posts. Please come back later.</h2>
{/if}

{#if $page.status === 500}
    <p class="text-red-600">{$page.form.error}</p>
{/if}