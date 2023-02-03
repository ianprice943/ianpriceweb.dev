<script lang='ts'>
    import type { EducationCard } from "../types/educationCard";
    export let cardContent: EducationCard;
</script>

<article class="shadow-lg mb-2 md:mr-4 rounded-xl p-4 border-gray-50 border-2  dark:bg-gray-600 dark:border-0 dark:border-gray-600" tabIndex={0}>
    <h3 class="text-xl text-center">{cardContent.school.schoolName}</h3>
    <p>{cardContent.school.graduateLevel}</p>
    <p>{cardContent.school.degreeEarned}</p>
    <p>{cardContent.school.educationTime}</p>
</article>