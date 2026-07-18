<script>
    import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.svelte";
    import { page } from "$app/stores";
    import { theme } from "$lib/stores/stores";
</script>

<header class="px-4 py-2 relative flex flex-col grow-0 shrink-0 lg:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64">
    <div class="flex flex-col items-center sm:items-baseline sm:flex-row lg:grow lg:max-h-44 xl:max-h-56 2xl:max-h-[unset]">
        <a 
            href="/" 
            aria-label="Ian Price Web Development logo, click to return to the home page."
            class="flex w-3/5 xs:w-2/5 sm:w-1/4 lg:w-[unset]"
        >
            {#if $theme === 'light'}
                <img 
                    src="/images/ipwd-logo-960-transparent-cropped.webp"
                    alt="ADA Compliance, accessibility focused, website analytics, and SEO optimization. Building websites with real people in mind." 
                    class="w-full"
                />
            {:else}
                <img 
                    src="/images/ipwd-logo-960-transparent-cropped-dark-mode.webp"
                    alt="ADA Compliance, accessibility focused, website analytics, and SEO optimization. Building websites with real people in mind." 
                    class="w-full"
                />
            {/if}
        </a>
        <div class="flex sm:w-3/4 lg:w-[unset]">
            {#if $theme === 'light'}
                <img 
                    src="/images/ipwd-cover-fb-transparent-cropped.webp" alt="ADA Compliance, accessibility focused, website analytics, and SEO optimization. Building websites with real people in mind." 
                    class="w-full"
                />
             {:else}
                <img 
                    src="/images/ipwd-cover-fb-transparent-cropped-dark-mode.webp" alt="ADA Compliance, accessibility focused, website analytics, and SEO optimization. Building websites with real people in mind." 
                    class="w-full"
                />
             {/if}
        </div>
    </div>
    <nav class="flex text-lg py-2 sm:py-0 sm:grow-0">
        <ul class="flex mx-auto flex-row sm:my-auto">
            <li class="px-1 hover:underline {$page?.route?.id === "/" ? "underline" : ""}">
                <a href="/">Home</a>
            </li>
            <li class="px-1 hover:underline {$page?.route?.id === "/portfolio" ? "underline" : ""}">
                <a href="/portfolio">Portfolio</a>
            </li>
            <li class="px-1 hover:underline {$page?.route?.id === "/resume" ? "underline" : ""}">
                <a href="/resume">Resume</a>
            </li>
            <li class="px-1 sm:pr-2 hover:underline {$page?.route?.id?.includes("blog") ? "underline" : ""}">
                <a href="/blog">Blog</a>
            </li>
        </ul>
    </nav>
    <ThemeSwitcher />
</header>