<script lang="ts">
    import { browser } from "$app/environment";
	import { onMount } from 'svelte';
    import { marked } from 'marked';
	import { highlightSettings } from "$lib/utils/utils";
    import { convertDateString } from "$lib/utils/utils";
    import "../github.css";
    import "../github-dark.css";
    import type { PageServerLoad } from './$types';
    export let data: PageServerLoad;
    import { page } from "$app/stores";
    import { domain } from "$lib/stores/stores";
    console.log(data);
    let editMode = false;
    let content = data?.content as string;
    let description = data?.description as string;
    let markdown = data?.mdContent as string;
    let title = data?.title as string;
    let date = convertDateString(data.date as string);
    let isPublished = data.is_published as boolean;
    let urlStub = data.urlStub as string;
    let thumbnailUrl = data.thumbnail as string;
    let thumbnailAltText = data.thumbnail_alt_text as string;

    marked.setOptions({
        highlight: (code) => {
            return highlightSettings(code);
        },
        langPrefix: 'hljs language-'
    })
    $: html = marked(markdown);
    
    const dynaURL = `//${$domain}/blog/${urlStub}`;

    const setTabIndexOnCodeBlocks = () => {
        if(browser) {
            let preBlocks: NodeListOf<HTMLPreElement> | null = document.querySelectorAll<"pre">('pre');
            preBlocks?.forEach((block) => {
                block.tabIndex = 0;
            });
        }
    }

    const openEditMode = () => {
        editMode = true;
    }

    const cancelEditMode = () => {
        description = data?.description as string;
        markdown = data?.mdContent as string;
        title = data?.title as string;
        isPublished = data.is_published as boolean;
        urlStub = data.urlStub as string;
        thumbnailUrl = data.thumbnail as string;
        thumbnailAltText = data.thumbnail_alt_text as string;
        editMode = false;
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
    <link rel="icon" href={`//${$domain}/images/favicon.ico`} />
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
    {#if $page.data.session}
        <button class="px-2 py-1 mb-2 rounded-md border-2 bg-red-800 border-red-800" on:click={openEditMode}>
            Edit
        </button>
    {/if}
    <article class="prose dark:prose-invert mx-auto">
        <h1>{ title }</h1>
        <p>Published: { date }</p>
        {#if thumbnailUrl && thumbnailAltText}
            <img 
                src={thumbnailUrl}
                alt={thumbnailAltText}
                class="bg-gray-700"
            />
        {/if}
        <div>{@html content}</div>
    </article>
{:else}
    <div class="flex flex-col md:flex-row w-full h-auto">
        <form method="POST" action="?/updatePost" class="w-full md:w-1/2 max-w-none pl-2 flex flex-col">
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
                            bind:value={urlStub}
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
            <div class="flex my-2">
                <label for="isPublished">Publish Upon Saving?</label>
                <input
                    name="isPublished"
                    type="checkbox"
                    id="isPublished"
                    bind:checked={isPublished}
                    class="ml-2"
                >
            </div>
            <div class="flex gap-2">
                <button 
                    type="submit"
                    on:submit
                    class="w-24 px-2 py-1 rounded-md border-2 text-white bg-green-800 border-green-800"
                >
                    Save
                </button>
                <button 
                    class="w-24 px-2 py-1 rounded-md border-2 text-white bg-red-800 border-red-800"
                    on:click={cancelEditMode}
                >
                    Cancel
                </button>
            </div>
        </form>
        <article class="w-full md:w-1/2 max-w-none pl-2 mt-6 overflow-y-auto prose dark:prose-invert">
            <h1>{ title }</h1>
            <p>{ description }</p>
            <img 
                src={thumbnailUrl}
                alt={thumbnailAltText}
                class="bg-gray-700"
            />
            <div>{ @html html }</div>
        </article>
    </div>
{/if}

{#if $page.status === 500}
    <p class="text-red-600">{$page.form.error}</p>
{/if}