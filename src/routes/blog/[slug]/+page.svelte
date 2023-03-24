<script lang="ts">
    import { browser } from "$app/environment";
	import { onMount } from 'svelte';
    import { convertDateString, setTabIndexOnCodeBlocks } from "$lib/utils/utils";
    import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
    import "$lib/styles/github.css";
    import "$lib/styles/github-dark.css";
    import type { PageData } from './$types';
    export let data: PageData;
    import { page } from "$app/stores";
    const dynaURL = `//www.ianpriceweb.dev/blog/${$page.params.slug}`;
    // console.log(data);
    let content = data?.content as string;
    let description = data?.description as string;
    let title = data?.title as string;
    let date = convertDateString(data.date as string);
    let thumbnailUrl = data.thumbnail as string;
    let thumbnailAltText = data.thumbnail_alt_text as string;

    onMount(() => {
        setTabIndexOnCodeBlocks(browser);
    });
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="//www.ianpriceweb.dev/images/favicon.ico" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={dynaURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={thumbnailUrl} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={dynaURL} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={thumbnailUrl} />
</svelte:head>

{#if $page.data.session}
    <a 
        class="px-2 py-1 mb-2 rounded-md border-2 text-white bg-red-800 border-red-800"
        href="/edit/{$page.params.slug}"
    >
        Edit
    </a>
{/if}

<article class="prose dark:prose-invert mx-auto">
    <IntersectionObserver slug={data.urlStub}>
        <h1>{ title }</h1>
        <p>Published: { date }</p>
    </IntersectionObserver>
    {#if thumbnailUrl && thumbnailAltText}
        <img 
            src={thumbnailUrl}
            alt={thumbnailAltText}
            class="bg-gray-700 sm:min-h-[200px] rounded-md"
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