<script lang="ts">
    import { browser } from "$app/environment";
	import { onMount } from 'svelte';
    import { convertDateString, setTabIndexOnCodeBlocks } from "$lib/utils/utils";
    import ViewCountObserver from "$lib/components/ViewCountObserver/ViewCountObserver.svelte";
    import "$lib/styles/github.css";
    import "$lib/styles/github-dark.css";
    import { page } from "$app/state";
	import type { BlogPost } from "./+page.server";

    const dynaURL = `//www.ianpriceweb.dev/blog/${page.params.slug}`;
    // @ts-ignore typescript and svelte aren't playing nice right now
    let { data }: any = $props()
    // console.log(data)
    
    const post = data.post as BlogPost
    let content = post.content as string;
    let description = post.description as string;
    let title = post.title as string;
    let date = convertDateString(post.date as string);
    let thumbnailUrl = post.thumbnail as string;
    let thumbnailAltText = post.thumbnail_alt_text as string;
    let urlStub = post.urlStub

    const openGraphURL = thumbnailUrl.replace('webp', 'jpg');

    onMount(() => {
        setTabIndexOnCodeBlocks(browser);
    });
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="author" content="Ian Price" />
    <meta property="article:published_time" content={date} />
    <link rel="icon" href="//www.ianpriceweb.dev/images/favicon.ico" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={dynaURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="image" property="og:image" content={openGraphURL} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={dynaURL} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={thumbnailUrl} />
</svelte:head>

{#if page.data.session}
    <a 
        class="px-2 py-1 sticky top-16 rounded-md border-2 text-white bg-red-800 border-red-800"
        href="/edit/{page.params.slug}"
    >
        Edit
    </a>
{/if}

<article class="prose dark:prose-invert mx-auto">
    <ViewCountObserver slug={urlStub}>
        <h1>{ title }</h1>
        <p>Published: { date }</p>
    </ViewCountObserver>
    {#if thumbnailUrl && thumbnailAltText}
        <img 
            src={thumbnailUrl}
            alt={thumbnailAltText}
            class="bg-gray-700 sm:min-h-[200px]"
        />
    {/if}
    <div>{@html content}</div>
</article>

<style>
    @media (min-width: 768px) {
        article {
            max-width: 75ch;
        }
    }
</style>