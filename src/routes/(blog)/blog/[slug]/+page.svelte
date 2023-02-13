<script lang="ts">
    import { browser } from "$app/environment";
	import { onMount } from 'svelte';
    import type { PageData } from './$types';
    export let data: PageData;

    const dynaURL = "//www.ianprice943.dev/blog/" + data.urlStub;

    const setTabIndexOnCodeBlocks = () => {
        if(browser) {
            let preBlocks: NodeListOf<HTMLPreElement> | null = document.querySelectorAll<"pre">('pre');
            preBlocks?.forEach((block) => {
                block.tabIndex = 0;
            });
        }
    }

    onMount(() => {
        setTabIndexOnCodeBlocks();
    });

    // rerun if markdown dynamically update
    $: setTabIndexOnCodeBlocks();
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.description} />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="//ianprice943.dev/images/favicon.ico" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={dynaURL} />
    <meta property="og:title" content={data.title} />
    <meta property="og:description" content={data.description} />
    <!-- <meta property="og:image" content="//www.ianprice943.dev/images/LinkedIn.png" /> -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={dynaURL} />
    <meta property="twitter:title" content={data.title} />
    <meta property="twitter:description" content={data.description} />
    <!-- <meta property="twitter:image" content="//www.ianprice943.dev/images/LinkedIn.png" /> -->
</svelte:head>

<article class="prose dark:prose-invert">
<h1>{ data.title }</h1>
<p>Published: { data.date }</p>
<svelte:component this={ data.content } />
</article>