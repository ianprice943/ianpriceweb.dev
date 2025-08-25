<script lang='ts'>
    import type { EducationData } from "$lib/types/resumeTypes.types";
    export let cardContent: EducationData;
</script>

<article class="shadow-lg mb-2 md:mr-4 rounded-xl p-4 border-gray-50 border-2  dark:bg-gray-600 dark:border-0 dark:border-gray-600">
    <h3 class="text-xl md:text-2xl text-center">{cardContent.school_name}</h3>
    <p class="md:text-lg">{cardContent.graduate_level}</p>
    <p class="md:text-lg">{cardContent.degree_earned}</p>
    <p class="md:text-lg">{cardContent.education_time}</p>
</article>

<style>
   article h3,
   article p {
    max-width: 65ch;
   } 
</style>