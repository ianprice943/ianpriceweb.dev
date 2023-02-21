<script lang="ts">
    import BlogCard from "$lib/components/BlogCard.svelte";
    import { page } from '$app/stores';
    console.log('page', page);
    export let data: any;
    let posts = data?.data;
    console.log(posts);
</script>

<svelte:head>
    <title>Ian Price - Blog</title>
    <meta name="description" content="The blog page of Ian Price's Portfolio" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="//ianprice943.dev/images/favicon.ico" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="//www.ianprice943.dev/blog" />
    <meta property="og:title" content="Ian Price - Blog" />
    <meta property="og:description" content="The blog page of Ian Price's Portfolio" />
    <meta property="og:image" content="//www.ianprice943.dev/images/LinkedIn.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="//www.ianprice943.dev/blog" />
    <meta property="twitter:title" content="Ian Price - Blog" />
    <meta property="twitter:description" content="The blog page of Ian Price's Portfolio" />
    <meta property="twitter:image" content="//www.ianprice943.dev/images/LinkedIn.png" />
</svelte:head>

{#if $page.data.session}
    <p>Logged In As: {$page.data.session.user.email}</p>
{/if}

<h1 class="text-center md:text-left text-3xl mb-2">Blog</h1>
{#if posts?.length > 0}
    <p class="my-2">Here's a list of my most recent blog posts.</p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {#each posts as post (post.id)}
            <BlogCard 
                urlStub={post.urlStub}
                title={post.title}
                description={post.description}
            />
        {/each}
    </ul>
{:else}
    <h2 class="text-1xl">Sorry, there was a problem loading my blog posts. Please come back later.</h2>
{/if}