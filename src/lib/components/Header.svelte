<script>
    import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<header class="p-2 flex flex-col-reverse sm:flex-row md:px-4 lg:px-8 xl:px-16 2xl:px-32">
    <div class="sm:flex-grow">
        <p class="text-4xl text-center sm:text-left">Ian Price</p>
    </div>
    <nav class="flex text-lg sm:flex-grow-0">
        <ul class="flex mx-auto flex-row sm:my-auto">
            <li class="pr-2 hover:underline">
                <a href="/">Home</a>
            </li>
            <li class="pr-2 hover:underline">
                <a href="/resume">Resume</a>
            </li>
            <li class="pr-2 hover:underline">
                <a href="/portfolio">Portfolio</a>
            </li>
            <li class="sm:pr-2 hover:underline">
                <a href="/blog">Blog</a>
            </li>
        </ul>
    </nav>
    <ThemeSwitcher />
</header>