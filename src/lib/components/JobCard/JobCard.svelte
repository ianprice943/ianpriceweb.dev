<script lang="ts">
    import type { JobData } from "$lib/types/resumeTypes.types";
    export let cardContent: JobData;
</script>

<article class="p-6 shadow-lg rounded-xl bg-gray-100 dark:bg-gray-600">
    <h3 class="text-2xl text-center font-extrabold mb-4">{cardContent.company_name}</h3>
    <p class="text-xl font-semibold">{cardContent.job_title}</p>
    <p class="text-sm">{cardContent.start_time} - {cardContent.end_time}</p>
    <p class="mt-4 leading-8">{cardContent.description}</p>
    <ul class="list-disc pl-6">
        {#each cardContent.job_descriptions as responsibility (responsibility.id)}
            <li class="text-ellipsis leading-7 mb-2">{responsibility.description}</li>
        {/each}
    </ul>
</article>

<style>
   article h3,
   article p {
    max-width: 65ch;
   }
   article ul {
    max-width: 75ch;
   } 
</style>