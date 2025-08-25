<script lang="ts">
    import { browser } from "$app/environment";
    import { SkillLevel, type SkillsData } from "../../types/resumeTypes.types";
    import { theme } from "$lib/stores/stores";
	import { onMount } from "svelte";
    export let cardContent: SkillsData;

    // following line taken from https://stackoverflow.com/a/64887820
    $: $theme, applyProgressBar();

    const applyProgressBar = () => {
        let progressBarColor: string;
        if($theme === 'light') {
            progressBarColor = "#555";
        } else {
            progressBarColor = "#FFF";
        }

        let gradientString = "";
        if (cardContent.skill_level === SkillLevel.Novice) {
            gradientString = `linear-gradient(to right, ${progressBarColor} 25%, transparent 25%)`;
        } else if (cardContent.skill_level === SkillLevel.Intermediate) {
            gradientString = `linear-gradient(to right, ${progressBarColor} 50%, transparent 50%)`;
        } else if (cardContent.skill_level === SkillLevel.Advanced) {
            gradientString = `linear-gradient(to right, ${progressBarColor} 75%, transparent 75%)`;
        } else if (cardContent.skill_level === SkillLevel.Expert) {
            gradientString = `linear-gradient(to right, ${progressBarColor} 100%)`;
        }

        // added to get SSR to allow this
        if(browser) {
            const progressBar: HTMLDivElement | null = document.querySelector(`.proficiency-bar${cardContent.id}`);
            if (progressBar !== null) {
                progressBar.style.backgroundImage = gradientString;
                let percentFull = "0";
                if (gradientString.includes('25%')) {
                    percentFull = "25";
                } else if (gradientString.includes('50%')) {
                    percentFull = "50";
                } else if (gradientString.includes('75%')) {
                    percentFull = "75";
                } else if (gradientString.includes('100%')) {
                    percentFull = "100";
                }
                progressBar.setAttribute("aria-valuenow", percentFull);
                progressBar.setAttribute("aria-valuemin", "0");
                progressBar.setAttribute("aria-valuemax", "100");
            }
        }
    }

    onMount(() => {
        applyProgressBar();
    })
</script>
<li class={`skill-${cardContent.id} min-w-min text-center shadow-lg rounded-xl p-4 border-gray-50 border-2  dark:bg-gray-600 dark:border-0 dark:border-gray-600`}>
    <article >
        <h3>{cardContent.skill_name}</h3>
        <span class="sr-only">Current Skill Level: {cardContent.skill_level}</span>
        <div class={`proficiency-bar${cardContent.id} py-2 border-2 border-black rounded-xl`} aria-hidden="true"></div>
        <ul aria-hidden="true" class="pt-2 flex flex-row justify-between gap-3 md:gap-4 lg:gap-5 text-xs md:text-sm lg:text-xs xl:text-sm">
            <li>None</li>
            <li>Novice</li>
            <li>Intermediate</li>
            <li>Advanced</li>
            <li>Expert</li>
        </ul>
    </article>
</li>