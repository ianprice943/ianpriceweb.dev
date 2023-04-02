<script lang="ts">
    import { browser } from "$app/environment";
	import { onMount } from 'svelte';
    import { marked } from 'marked';
	import { highlightSettings, setTabIndexOnCodeBlocks } from "$lib/utils/utils";
    import "$lib/styles/github.css";
    import "$lib/styles/github-dark.css";
    import { page } from "$app/stores";

    import type { PageData } from './$types';
    export let data: PageData;
    let description = data?.description as string;
    let markdown = data?.mdContent as string;
    let title = data?.title as string;
    let isPublished = data.is_published as boolean;
    const startingUrlStub = data.urlStub as string;
    const startingPublished = data.is_published as boolean;
    console.log('startingPublished?', startingPublished);
    let urlStub = data.urlStub as string;
    let thumbnailUrl = data.thumbnail as string;
    let thumbnailAltText = data.thumbnail_alt_text as string;

    marked.setOptions({
        highlight: (code, lang) => {
            return highlightSettings(code, lang);
        },
        langPrefix: 'hljs language-'
    })
    $: html = marked(markdown);
    
    // console.log('$page', $page)

    onMount(() => {
        setTabIndexOnCodeBlocks(browser);
    });

    // rerun when markdown dynamically updates
    $: setTabIndexOnCodeBlocks(browser);
</script>

<div class="flex flex-col md:flex-row w-full h-auto max-h-screens">
    <form method="POST" action={$page.params.slug === "new" ? "?/createPost" : "?/updatePost"} class="w-full md:w-1/2 max-w-none flex flex-col h-auto">
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
                <!-- Hidden section of form to pass the original url stub to the form logic on backend -->
                <div class="hidden">
                    <label for="startingUrlStub">Starting URL Stub</label>
                    <input
                        type="text"
                        id="startingUrlStub"
                        name="startingUrlStub"
                        readonly
                        value={startingUrlStub}
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
                    <label for="thumbnailUrl">Thumbnail Url (multiple of 600x250 preferable)</label>
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
        {#if $page.params.slug !== "new"}
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
            <!-- Hidden section for whether the post was already published-->
            <div class="hidden">
                <label for="startingPublished">Already Published?</label>
                <input
                    type="checkbox"
                    id="startingPublished"
                    name="startingPublished"
                    readonly
                    checked={startingPublished}
                >
            </div>
        {/if}
        <div class="flex gap-2 mt-2">
            <button 
                type="submit"
                on:submit
                class="w-24 px-2 py-1 rounded-md border-2 text-white bg-green-800 border-green-800"
            >
                Save
            </button>
            <a
                class="w-24 px-2 py-1 rounded-md border-2 text-center text-white bg-red-800 border-red-800"
                href={$page.params.slug === "new" ? "/blog" : `/blog/${$page.params.slug}`}
            >
                Cancel
            </a>
        </div>
    </form>
    <article class="w-full md:w-1/2 max-w-none pl-2 overflow-y-auto prose dark:prose-invert h-auto">
        <h1>{ title }</h1>
        <p>{ description }</p>
        <img 
            src={thumbnailUrl}
            alt={thumbnailAltText}
            class="bg-gray-700 rounded-md"
        />
        <div>{ @html html }</div>
    </article>
</div>

{#if $page.status === 500}
    <p class="text-red-600">{$page.form.error}</p>
{/if}

<style>
    @media (min-width: 768px) {
        article {
            max-width: 75ch;
        }
    }
</style>