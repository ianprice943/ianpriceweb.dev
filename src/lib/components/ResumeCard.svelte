<script lang="ts">
    import type { ResumeCard } from "$lib/types/resumeTypes";
    export let cardContent: ResumeCard;

    const responsibilities = cardContent.job.responsibilities.slice(1);
</script>

<article class="h-72 overflow-y-auto sm:h-56 md:h-72 lg:h-64 lg:overflow-y-auto shadow-lg mb-2 md:mr-4 rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600" tabIndex={0}>
    <h3 class="text-xl text-center">{cardContent.job.companyName}</h3>
    <p>{cardContent.job.companyTitle}</p>
    <p>{cardContent.job.experienceTime}</p>
    <p>{cardContent.job.responsibilities[0]}</p>
    <ul class="list-disc pl-6">
        <!-- {cardContent.job.responsibilities.slice(1).map((responsibility, i) => {
            return <li className="" key={i}>{responsibility}</li> 
        })} -->
        {#each responsibilities as responsibility (responsibility)}
            <li>{responsibility}</li>
        {/each}
    </ul>
</article>