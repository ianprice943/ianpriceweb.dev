<script lang="ts">
    import BlogCard from "$lib/components/BlogCard.svelte";
    export let data: any;
    data = data.data;
    console.log(data);
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

<h1 class="text-center md:text-left text-3xl mb-2">Blog</h1>
<p>A list of my blog posts.</p>
{#if data.length > 0}
    <ul>
        {#each data as post (post.id)}
            <BlogCard 
                urlStub={post.urlStub}
                title={post.title}
                description={post.description}
            />
        {/each}
    </ul>
{/if}