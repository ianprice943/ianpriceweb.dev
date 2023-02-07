<script lang="ts">
    import { SkillLevel, type SkillsData } from "../types/resumeTypes.types";
    import { theme } from "$lib/stores/stores";
	import { onMount } from "svelte";
    export let cardContent: SkillsData;

    let progressBarColor: string;
    if($theme === 'light') {
        progressBarColor = "#555";
    } else {
        progressBarColor = "#FFF";
    }

    // TODO: Update to be more programatic
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

    // TODO: see if this can be done more declaratively
    const applyProgressBar = () => {
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

    onMount(() => {
        applyProgressBar();
    })
</script>

<li class="text-center shadow-lg mb-2 sm:mr-4 rounded-xl p-4 border-gray-50 border-2  dark:bg-gray-600 dark:border-0 dark:border-gray-600" tabIndex={0}>
    <article>
        <span>{cardContent.skill_name}</span>
        <div class={`proficiency-bar${cardContent.id} py-2 border-2 border-black rounded-xl`} aria-label="skill proficiency progress bar" role="progressbar"></div>
        <ul class="pt-2 flex flex-row justify-between text-xs md:text-sm lg:text-xs xl:text-sm">
            <li aria-label={cardContent.skill_level === SkillLevel.None ? "Current Skill Level" : null}>None</li>
            <li aria-label={cardContent.skill_level === SkillLevel.Novice ? "Current Skill Level" : null}>Novice</li>
            <li aria-label={cardContent.skill_level === SkillLevel.Intermediate ? "Current Skill Level" : null}>Intermediate</li>
            <li aria-label={cardContent.skill_level === SkillLevel.Advanced ? "Current Skill Level" : null}>Advanced</li>
            <li aria-label={cardContent.skill_level === SkillLevel.Expert ? "Current Skill Level" : null}>Expert</li>
        </ul>
    </article>
</li>