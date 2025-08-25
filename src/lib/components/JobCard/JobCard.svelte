<script lang="ts">
    import type { JobData } from "$lib/types/resumeTypes.types";
    export let cardContent: JobData;
</script>

<article class="p-6 shadow-lg rounded-xl bg-gray-100 dark:bg-gray-600">
    <h3 class="text-xl md:text-2xl text-center">{cardContent.company_name}</h3>
    <p class="md:text-xl">{cardContent.job_title}</p>
    <p class="md:text-xl">{cardContent.start_time} - {cardContent.end_time}</p>
    <p class="md:text-xl">{cardContent.description}</p>
    <ul class="list-disc pl-6">
        {#each cardContent.job_descriptions as responsibility (responsibility.id)}
            <li class="md:text-lg text-ellipsis">{responsibility.description}</li>
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