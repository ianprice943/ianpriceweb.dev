<script lang="ts">
    import { browser } from "$app/environment";
    import { SkillLevel, type SkillsData } from "../types/resumeTypes.types";
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

    if(browser) {
        let listItem: HTMLElement | null = document.querySelector(`.skill-${cardContent.id}`);
        if(listItem !== null) {
            const observer = new IntersectionObserver(entries => {
                console.log(cardContent.skill_name, entries[0].boundingClientRect.top, entries[0].boundingClientRect.bottom);
                // if(entries[0].boundingClientRect.top <= window.screen.height ||
                //          (entries[0].boundingClientRect.top <= 0 && entries[0].boundingClientRect.bottom >= 0)) {
                //     console.log(cardContent.skill_name, 'flying in')
                //     listItem?.classList.add('fly');
                // } else if(entries[0].boundingClientRect.top <= 0 || entries[0].boundingClientRect.bottom <= 0) {
                //     console.log(cardContent.skill_name, 'going off screen')
                //     listItem?.classList.remove('fly');
                // }
                if(entries[0].boundingClientRect.top <= 0) {
                    if(entries[0].boundingClientRect.bottom <= 0) {
                        console.log(cardContent.skill_name, 'going off screen')
                        listItem?.classList.remove('fly');
                    } else if(entries[0].boundingClientRect.bottom >= 0) {
                        console.log(cardContent.skill_name, 'flying in')
                        listItem?.classList.add('fly');
                    }
                } else if(entries[0].boundingClientRect.top <= window.screen.height) {
                    if(entries[0].boundingClientRect.bottom >= 0) {
                        console.log(cardContent.skill_name, 'flying in')
                        listItem?.classList.add('fly');
                    }
                } else if(entries[0].boundingClientRect.top >= window.screen.height) {
                    if(entries[0].boundingClientRect.bottom >= window.screen.height) {
                        console.log(cardContent.skill_name, 'going off screen')
                        listItem?.classList.remove('fly');
                    }
                }
            });
            observer.observe(listItem);
        }
    }

    onMount(() => {
        applyProgressBar();
    })
</script>
<li class={`skill skill-${cardContent.id} text-center shadow-lg mb-2 sm:mr-4 rounded-xl p-4 border-gray-50 border-2  dark:bg-gray-600 dark:border-0 dark:border-gray-600`} tabIndex={0}>
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

<style>
.skill {
    transform: translateX(-300px);
    transition: all ease-in .3s;
    /* animation: flyRight 0.5s ease-in; */
}
.fly {
    transform: translateX(0px);
}
</style>