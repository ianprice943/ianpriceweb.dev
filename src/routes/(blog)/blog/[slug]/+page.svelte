<script lang="ts">
    import { browser } from "$app/environment";
	import { onMount } from 'svelte';
    import { marked } from 'marked';
    import type { PageServerLoad } from './$types';
    export let data: PageServerLoad;
    console.log(data);
    let editMode = false;
    // let source = data.content.render().html;
    let source = data.mdContent;
    // console.log('data content render', data.content.render().html);
    $: markdown = marked(source);
    
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

{#if !editMode}
    <article class="prose dark:prose-invert">
        <button class="absolute right-0 border-2 border-red-800" on:click={() => editMode = !editMode}>Edit Mode</button>
        <h1>{ data.title }</h1>
        <p>Published: { data.date }</p>
        <!-- <svelte:component this={ data.content } /> -->
        <div>{@html data.content}</div>
    </article>
{:else}
    <div class="flex flex-row w-full h-auto">
        <textarea class="w-1/2 max-w-none pl-2 overflow-x-auto focus:outline-0 border-0 bg-gray-900 text-green-600" bind:value={source}></textarea>
        <article class="w-1/2 max-w-none pl-2 overflow-y-auto prose dark:prose-invert">{@html markdown}</article>
    </div>
{/if}