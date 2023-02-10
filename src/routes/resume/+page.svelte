<script lang="ts">
    import EducationCard from "$lib/components/EducationCard.svelte";
	import JobCard from "$lib/components/JobCard.svelte";
	import SkillCard from "$lib/components/SkillCard.svelte";
    import type { CombinedResumePageData } from "$lib/types/resumeTypes.types";
    export let data: CombinedResumePageData;
    const { jobData, educationData, skillsData } = data;
</script>

<svelte:head>
    <title>Ian Price - Resume</title>
    <meta name="description" content="The resume page of Ian Price's Portfolio" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="//ianprice943.dev/images/favicon.ico" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="//www.ianprice943.dev" />
    <meta property="og:title" content="Ian Price - Resume" />
    <meta property="og:description" content="The resume page of Ian Price's Portfolio" />
    <meta property="og:image" content="//www.ianprice943.dev/images/LinkedIn.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="//www.ianprice943.dev" />
    <meta property="twitter:title" content="Ian Price - Resume" />
    <meta property="twitter:description" content="The resume page of Ian Price's Portfolio" />
    <meta property="twitter:image" content="//www.ianprice943.dev/images/LinkedIn.png" />
</svelte:head>

<h1 class="text-center md:text-left text-3xl mb-2">Resume</h1>
<section id="experience" aria-label="experience">
    <h2 class="text-2xl mb-2">Experience</h2>
    <div class="grid md:grid-cols-2 gap-2">
        {#each jobData as job (job.id)}
            <JobCard cardContent={job} />
        {/each}
    </div>
</section>
<section id="education" aria-label="education">
    <h2 class="text-2xl mb-2">Education</h2>
    <div class="md:grid md:grid-cols-1 lg:grid-cols-2">
        {#each educationData as education (education.id)}
            <EducationCard cardContent={education} />
        {/each}
    </div>
</section>
<section id="skills" aria-label="skills">
    <h2 class="text-2xl mb-2">Skills</h2>
    <div class="">
        <ul class="sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {#each skillsData as skill (skill.id)}
                <SkillCard cardContent={skill} />
            {/each}
        </ul>
    </div>
</section>