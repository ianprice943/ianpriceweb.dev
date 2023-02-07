<script lang="ts">
    import type { JobData } from "$lib/types/resumeTypes.types";
    export let cardContent: JobData;

</script>

<article class="h-72 overflow-y-auto sm:h-56 md:h-72 lg:h-64 lg:overflow-y-auto shadow-lg mb-2 md:mr-4 rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600" tabIndex={0}>
    <h3 class="text-xl text-center">{cardContent.company_name}</h3>
    <p>{cardContent.job_title}</p>
    <p>{cardContent.start_time} - {cardContent.end_time}</p>
    <p>{cardContent.description}</p>
    <ul class="list-disc pl-6">
        {#each cardContent.job_descriptions as responsibility (responsibility.id)}
            <li>{responsibility.description}</li>
        {/each}
    </ul>
</article>

<style>
    article {
        scrollbar-width: 4px;
    }
    article::-webkit-scrollbar {
        width: 5px;
    }
    article::-webkit-scrollbar-thumb {
        background-color: grey;
        outline: 1px solid #708090;
    }
    article::-webkit-scrollbar-track {
        box-shadow: inset 0 6px transparent;
        padding-right: 0.5em;
    }
</style>