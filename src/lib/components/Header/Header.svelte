<script>
    import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.svelte";
    import { page } from "$app/stores";
</script>

<header class="px-4 py-2 flex flex-col-reverse flex-grow-0 flex-shrink-0 sm:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64">
    <div class="sm:flex-grow">
        <p class="text-4xl text-center sm:text-left">Ian Price</p>
    </div>
    <nav class="flex text-lg py-2 sm:py-0 sm:flex-grow-0">
        <ul class="flex mx-auto flex-row sm:my-auto">
            <li class="px-1 hover:underline {$page?.route?.id === "/" ? "underline" : ""}">
                <a href="/">Home</a>
            </li>
            <li class="px-1 hover:underline {$page?.route?.id === "/resume" ? "underline" : ""}">
                <a href="/resume">Resume</a>
            </li>
            <li class="px-1 hover:underline {$page?.route?.id === "/portfolio" ? "underline" : ""}">
                <a href="/portfolio">Portfolio</a>
            </li>
            <li class="px-1 sm:pr-2 hover:underline {$page?.route?.id?.includes("blog") ? "underline" : ""}">
                <a href="/blog">Blog</a>
            </li>
        </ul>
    </nav>
    <ThemeSwitcher />
</header>