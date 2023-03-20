<script lang="ts">
    import type { JobData } from "$lib/types/resumeTypes.types";
	import { onMount } from "svelte";
    import { debounce } from "$lib/utils/utils";
    import Caret from "./Caret.svelte";
    export let cardContent: JobData;

    let contentHeight: number;
    let article: HTMLElement;
    let windowWidth: number;
    let maxCompressedArticleHeight: number;
    let isExpanded = false;

    const windowMap = {
        large: 1024,
        medium: 768,
        small: 640
    }    

    const setDimensions = () => {
        windowWidth = window.screen.width;

        if(windowWidth >= windowMap.large) {
            maxCompressedArticleHeight = 330;
        } else if (windowWidth >= windowMap.medium) {
            maxCompressedArticleHeight = 336;
        } else if (windowWidth >= windowMap.small) {
            maxCompressedArticleHeight = 320;
        } else {
            maxCompressedArticleHeight = 296;
        }

        contentHeight = article?.scrollHeight;
    }

    const debouncedSetDimensions = debounce(setDimensions, 300);

    const handleExpand = () => {
        if(!isExpanded) {
            article.classList.add('expand');
            isExpanded = true;
        } else {
            article.classList.remove('expand');
            isExpanded = false;
            // scroll the user back to the top of the article if
            // the top is no longer in view
            const rect = article.getBoundingClientRect();
            if(rect.top < 0) {
                article.scrollIntoView({behavior: "smooth"});
            }
        }
    }

    onMount(() => {
        window.addEventListener('resize', debouncedSetDimensions);
        setDimensions();
    });


    
</script>

<!-- h-72 sm:h-56 md:h-80 lg:h-80 -->
<article class="overflow-y-hidden p-6 shadow-lg rounded-xl bg-gray-100 dark:bg-gray-600 relative" bind:this={article}>
    <!-- <p class="absolute right-0 top-0">{contentHeight}</p> -->
    <h3 class="text-xl md:text-2xl text-center">{cardContent.company_name}</h3>
    <p class="md:text-xl">{cardContent.job_title}</p>
    <p class="md:text-xl">{cardContent.start_time} - {cardContent.end_time}</p>
    <p class="md:text-xl">{cardContent.description}</p>
    <ul class="list-disc pl-6">
        {#each cardContent.job_descriptions as responsibility (responsibility.id)}
            <li class="md:text-xl text-ellipsis">{responsibility.description}</li>
        {/each}
    </ul>
    {#if contentHeight > maxCompressedArticleHeight}
        <div class="absolute bottom-0 right-0 left-0 flex justify-center bg-gray-100 dark:bg-gray-600">
            <button class="flex flex-wrap justify-center items-center w-40 border-black dark:border-white" aria-label={isExpanded ? "Hide additional content" : "Expand to view additional content"} on:click={handleExpand}>
                {#if isExpanded}
                    <Caret rotate={true} /> Hide
                {:else}
                    <Caret rotate={false} /> Expand
                {/if}
            </button>
        </div>
    {/if}
</article>

<style>
    button {
        border-top: 1px solid;
    }
    article {
        height: 18.5em;
        max-height: 18.5em;
        transition: max-height .75s;
    }
    @media(min-width: 640px) {
        article {
            height: 20em;
            max-height: 20em;
        }
    }
    @media(min-width: 768px) {
        article {
            height: 21em;
            max-height: 21em;
        }
    }
    @media(min-width: 1024px) {
        article {
            height: 19em;
            max-height: 19em;
        }
    }
</style>