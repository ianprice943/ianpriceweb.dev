<script lang="ts">
    import EducationCard from "$lib/components/EducationCard/EducationCard.svelte";
	import JobCard from "$lib/components/JobCard/JobCard.svelte";
	import SkillCard from "$lib/components/SkillCard/SkillCard.svelte";
    import type { CombinedResumePageData } from "$lib/types/resumeTypes.types";
    export let data: CombinedResumePageData;
    const { jobData, educationData, skillsData } = data;
</script>

<svelte:head>
    <title>Ian Price - Resume</title>
    <meta name="description" content="The resume page of Ian Price's Portfolio" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="//www.ianpriceweb.dev/images/favicon.ico" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content=//www.ianpriceweb.dev/ />
    <meta property="og:title" content="Ian Price - Resume" />
    <meta property="og:description" content="The resume page of Ian Price's Portfolio" />
    <meta property="og:image" content="//www.ianpriceweb.dev/images/LinkedIn.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="//www.ianpriceweb.dev/" />
    <meta property="twitter:title" content="Ian Price - Resume" />
    <meta property="twitter:description" content="The resume page of Ian Price's Portfolio" />
    <meta property="twitter:image" content="//www.ianpriceweb.dev/images/LinkedIn.png" />
</svelte:head>

<h1 class="text-center md:text-left text-3xl mb-2">Resume</h1>
<section id="experience" class="flex flex-col items-center">
    <h2 class="text-2xl mb-6">Experience</h2>
    {#if !Object.keys(jobData).includes("error")}
        <div class="md:w-[80ch] mb-4 grid gap-4">
            {#each jobData as job (job.id)}
                <JobCard cardContent={job} />
            {/each}
        </div>
    {:else}
        <p>Sorry, there was an error getting my job data.</p>
    {/if}
</section>
<section id="education" class="flex flex-col items-center">
    <h2 class="text-2xl mt-2 mb-6">Education</h2>
    {#if !Object.keys(educationData).includes("error")}
        <div class="md:w-[80ch] grid sm:grid-cols-2 gap-4">
            {#each educationData as education (education.id)}
                <EducationCard cardContent={education} />
            {/each}
        </div>
    {:else}
        <p>Sorry, there was an error getting my education data.</p>
    {/if}
</section>
<section id="skills" class="flex flex-col items-center">
    <h2 class="text-2xl mt-2 mb-6">Skills</h2>
    {#if !Object.keys(skillsData).includes("error")}
        <ul class="md:w-[80ch] grid sm:grid-cols-2 gap-4">
            {#each skillsData as skill (skill.id)}
                <SkillCard cardContent={skill} />
            {/each}
        </ul>
    {:else}
        <p>Sorry, there was an error getting my skills data.</p>
    {/if}
</section>