<script lang="ts">

</script>

<svelte:head>
    <title>Ian Price - Portfolio</title>
    <meta name="description" content="The portfolio page of Ian Price's Portfolio" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="//ianprice943.dev/images/favicon.ico" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="//www.ianprice943.dev/portfolio" />
    <meta property="og:title" content="Ian Price - Portfolio" />
    <meta property="og:description" content="The portfolio page of Ian Price's Portfolio" />
    <meta property="og:image" content="//www.ianprice943.dev/images/LinkedIn.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="//www.ianprice943.dev/portfolio" />
    <meta property="twitter:title" content="Ian Price - Portfolio" />
    <meta property="twitter:description" content="The portfolio page of Ian Price's Portfolio" />
    <meta property="twitter:image" content="//www.ianprice943.dev/images/LinkedIn.png" />
</svelte:head>

<h1 class="text-center md:text-left text-3xl mb-2">Portfolio</h1>
<section class="grid md:grid-cols-2">
    <article class="flex flex-col shadow-lg mb-2 md:mr-4 rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
        <h2 class="text-center text-lg font-semibold">To see what side projects I&apos;m working on, check out my GitHub</h2>
        <a href="https://github.com/ianprice943" aria-label="Ian's GitHub" class="my-auto rounded-xl bg-gray-600 dark:bg-transparent">
            <img src="/images/GitHub_Logo_White.webp" alt="GitHub Logo" />
        </a>
    </article>
    <article class="shadow-lg mb-2 md:mr-4 rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
        <h2 class="text-center text-lg font-semibold">Pokemon Mystery Dungeon Rescue Team DX Starters</h2>
        <p class="text-center text-sm py-2">A website I developed to learn Vue.js, and later React.js + Typescript (Note, due to Heroku removing their free tier of hosting services, these sites are now offline. Links now take you to their respective GitHub repositories.)</p>
        <a href="https://github.com/ianprice943/PMDDXStarters-react" aria-label="Website for a game, written in React" class="flex my-auto justify-center">
            <img src="/images/PMDRTDXLogo.webp" alt="Pokemon Mystery Dungeon Rescue Team DX Logo" />
        </a>
        <ul class="flex justify-around">
            <li class="hover:underline">
                <a href="https://github.com/ianprice943/PMDDXStarters" aria-label="Website for a game, written in Vue.js">Vue.js Version</a>
            </li>
            <li class="hover:underline">
                <a href="https://github.com/ianprice943/PMDDXStarters-react" aria-label="Website for a game, written in React">React.js Version</a>
            </li>
        </ul>
    </article>
    <article class="flex flex-col shadow-lg mb-2 md:mr-4 rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
        <h2 class="text-center text-lg font-semibold">William Kampf Mediation</h2>
        <p class="text-center text-sm py-2">An introductory site and blog for a client&apos;s Mediation business.</p>
        <a href="https://wkmediation.com/" aria-label="Website for a mediator in Los Angeles" class="my-auto">
            <img src="/images/wk_mediation_logo_horiz_graygold.webp" alt="WK Mediation Logo" />
        </a>
    </article>
    <article class="shadow-lg mb-2 md:mr-4 rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
        <h2 class="text-center text-lg font-semibold">Three.js Playground</h2>
        <p class="text-center text-sm py-2">A small playground I developed to learn the basics of Three.js.</p>
        <a href="https://ip-threejs-playground.netlify.app/" aria-label="A website showing off some basics of Three.js" class="flex y-auto justify-center">
            <img src="/images/three.webp" alt="Three.js rendered sphere" class='rounded-xl' />
        </a>
    </article>
</section>