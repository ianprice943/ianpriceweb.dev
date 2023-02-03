<script lang="ts">

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

<section id="experience" aria-label="experience">
    <h2 class="text-2xl">Experience</h2>
    <div class="p-1 md:grid md:grid-cols-2">
        <!-- {jobs?.map((job: JobData, i: number) => {
            return <ResumeCard key={i} job={job} />
        })} -->
    </div>
</section>
<section id="education" aria-label="education">
    <h2 class="text-2xl">Education</h2>
    <div class="p-1 md:grid md:grid-cols-1 lg:grid-cols-2">
        <!-- {education?.map((school: EducationData, i: number) => {
            return <EducationCard key={i} school={school} />
        })} -->
    </div>
</section>
<section id="skills" aria-label="skills">
    <h2 class="text-2xl">Skills</h2>
    <div class="p-1">
        <ul class="sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <!-- {skills?.map((skill: string, i: number) => {
                return <SkillCard key={i} index={i} skill={skill} />
            })} -->
        </ul>
    </div>
</section>