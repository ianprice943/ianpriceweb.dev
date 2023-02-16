<script lang="ts">
    import { browser } from "$app/environment";
	import { onMount } from 'svelte';
    import { marked } from 'marked';
    import type { PageServerLoad } from './$types';
    export let data: PageServerLoad;
    console.log(data);
    let editMode = false;
    let content = data?.content;
    let description = data?.description;
    let markdown = data?.mdContent;
    let title = data?.title;
    let date = data.date;
    $: html = marked(markdown);
    
    const dynaURL = "//www.ianprice943.dev/blog/" + data.urlStub;

    const setTabIndexOnCodeBlocks = () => {
        if(browser) {
            let preBlocks: NodeListOf<HTMLPreElement> | null = document.querySelectorAll<"pre">('pre');
            preBlocks?.forEach((block) => {
                block.tabIndex = 0;
            });
        }
    }

    const handleEditMode = () => {
        if(editMode) {
            saveMarkDown(markdown);
        } else {

            editMode = !editMode;
        }
    }

    const saveMarkDown = (markdown: string) => {

    }

    onMount(() => {
        setTabIndexOnCodeBlocks();
    });

    // rerun if markdown dynamically update
    $: setTabIndexOnCodeBlocks();
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="//ianprice943.dev/images/favicon.ico" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={dynaURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <!-- <meta property="og:image" content="//www.ianprice943.dev/images/LinkedIn.png" /> -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={dynaURL} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <!-- <meta property="twitter:image" content="//www.ianprice943.dev/images/LinkedIn.png" /> -->
</svelte:head>


{#if !editMode}
    {#if true}
    <!-- update to only show this button if logged in -->
        <button class="absolute right-0 border-2 border-red-800" on:click={handleEditMode}>
            Edit
        </button>
    {/if}
    <article class="prose dark:prose-invert">
        <h1>{ title }</h1>
        <p>Published: { date }</p>
        <div>{@html content}</div>
    </article>
{:else}
    <div class="flex flex-row w-full h-auto">
        <form method="PUT" class="w-1/2 max-w-none pl-2 flex flex-col">
            <label for="postTitle">Title:</label>
            <input 
                type="text"
                id="postTitle"
                name="postTitle"
                bind:value={title}
                class="focus:outline-0 border-0"
            >
            <textarea class="overflow-x-auto h-full focus:outline-0 border-0 bg-gray-900 text-green-600" bind:value={markdown}></textarea>
        </form>
        <article class="w-1/2 max-w-none pl-2 mt-6 overflow-y-auto prose dark:prose-invert">
            <h1>{ title }</h1>
            <p>Published: { date }</p>
            <div>{@html html}</div>
        </article>
    </div>
{/if}