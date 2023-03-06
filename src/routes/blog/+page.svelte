<script lang="ts">
    import BlogCard from "$lib/components/BlogCard.svelte";
    import { page } from '$app/stores';
    import { marked } from "marked";
    import { highlightSettings } from "$lib/utils/utils";
    import "./github.css";
    import "./github-dark.css";
    export let data: any;
    let newBlogMode = false;
    let posts = data?.data ?? data?.filtered;
    console.log(posts);
    let markdown = "";
    let title = "";
    let description = "";
    let thumbnailUrl = "";
    let thumbnailAltText = "";

    marked.setOptions({
        highlight: (code) => {
            return highlightSettings(code);
        },
        langPrefix: 'hljs language-'
    })
    $: html = marked(markdown);

    const handleNewBlogMode = () => {
        newBlogMode = !newBlogMode;
    }
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
<!-- TODO: Add button to create a new post. Might need to make the form in the slug page a component -->
{#if !newBlogMode}
    {#if $page.data.session}
    <button class="px-2 py-1 mb-2 rounded-md border-2 bg-red-800 border-red-800" on:click={handleNewBlogMode}>
        Create New Blog
    </button>
    {/if}
    {#if posts?.length > 0}
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
{:else}
    <div class="flex flex-col md:flex-row w-full h-auto">
        <form method="POST" action="?/createPost" class="w-full md:w-1/2 max-w-none pl-2 flex flex-col">
            <div class="flex flex-col mb-2">
                <div class="flex gap-2">
                    <div class="flex flex-col w-3/4">
                        <label for="postTitle">Title:</label>
                        <input 
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            bind:value={title}
                            class="pl-1 focus:outline-0 border-0 text-black"
                        >
                    </div>
                    <div class="flex flex-col w-1/4">
                        <label for="urlStub">URL Stub</label>
                        <input 
                            type="text"
                            id="urlStub"
                            name="urlStub"
                            class="pl-1 focus:outline-0 border-0 text-black"
                        >
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="postDescription">Description:</label>
                    <input
                        type="text"
                        id="postDescription"
                        name="postDescription"
                        bind:value={description}
                        class="pl-1 focus:outline-0 border-0 text-black"
                    >
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-col">
                        <label for="thumbnailUrl">Thumbnail Url</label>
                        <input
                            type="text"
                            id="thumbnailUrl"
                            name="thumbnailUrl"
                            bind:value={thumbnailUrl}
                            class="pl-1 focus:outline-0 border-0 text-black"
                        >
                    </div>
                    <div class="flex flex-col">
                        <label for="thumbnailAltText">Thumbnail Alt Text</label>
                        <input
                            type="text"
                            id="thumbnailAltText"
                            name="thumbnailAltText"
                            bind:value={thumbnailAltText}
                            class="pl-1 focus:outline-0 border-0 text-black"
                        >
                    </div>
                </div>
            </div>
            <textarea
                name="markdown"
                class="pl-2 overflow-x-auto h-full min-h-[150px] md:min-h-[600px] focus:outline-0 border-0 bg-gray-900 text-green-600"
                bind:value={markdown}></textarea>
            <button 
                type="submit"
                on:submit
                class="w-24 px-2 py-1 mt-2 rounded-md border-2 text-white bg-green-800 border-green-800"
            >
                Save
            </button>
        </form>
        <article class="w-full md:w-1/2 max-w-none pl-2 mt-6 overflow-y-auto prose dark:prose-invert">
            <h1>{ title }</h1>
            <p>{ description }</p>
            <img 
                src={thumbnailUrl}
                alt={thumbnailAltText}
            />
            <div>{ @html html }</div>
        </article>
    </div>
{/if}

{#if $page.status === 500}
    <p class="text-red-600">{$page.form.error}</p>
{/if}