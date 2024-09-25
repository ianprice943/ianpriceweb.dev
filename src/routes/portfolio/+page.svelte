<svelte:head>
    <title>Ian Price - Portfolio</title>
    <meta name="description" content="The portfolio page of Ian Price's Portfolio" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href={`//$ianpriceweb.dev/images/favicon.ico`} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content=//www.ianpriceweb.dev/ />
    <meta property="og:title" content="Ian Price - Portfolio" />
    <meta property="og:description" content="The portfolio page of Ian Price's Portfolio" />
    <meta property="og:image" content="//www.ianpriceweb.dev/images/LinkedIn.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="//www.ianpriceweb.dev/" />
    <meta property="twitter:title" content="Ian Price - Portfolio" />
    <meta property="twitter:description" content="The portfolio page of Ian Price's Portfolio" />
    <meta property="twitter:image" content="//www.ianpriceweb.dev/images/LinkedIn.png" />
</svelte:head>

<h1 class="text-center md:text-left text-3xl mb-2">Portfolio</h1>
<div class="grid md:grid-cols-2 gap-4">
    <article class="flex flex-col shadow-lg rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
        <h2 class="text-center text-lg font-semibold">To see what side projects I&apos;m working on, check out my GitHub</h2>
        <a href="https://github.com/ianprice943" target="_blank" aria-label="Ian's GitHub, this link opens in a new tab" class="flex h-full justify-center rounded-xl bg-gray-600 dark:bg-transparent">
            <img src="/images/GitHub_Logo_White.webp" alt="GitHub Logo" class="my-auto" />
        </a>
    </article>
    <article class="flex flex-col shadow-lg rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
        <h2 class="text-center text-lg font-semibold">Operation Valor Arts</h2>
        <p class="text-center text-sm py-2">Operation Valor Arts is a 501(c)(3) dedicated to providing Veterans with training and resources to design interpretive public art.</p>
        <a href="https://www.ovarts.org" target="_blank" aria-label="The website for Operation Valor Arts, this link opens in a new tab" class="flex h-full justify-center rounded-xl">
            <img src="/images/OVArts-Logo.webp" alt="GitHub Logo" class="my-auto" />
        </a>
    </article>
    <article class="shadow-lg rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
        <h2 class="text-center text-lg font-semibold">Three.js Playground</h2>
        <p class="text-center text-sm py-2">A small playground I developed to learn the basics of Three.js.</p>
        <a href="https://ip-threejs-playground.netlify.app/" target="_blank" aria-label="A website showing off some basics of Three.js, this link opens in a new tab" class="flex my-auto justify-center">
            <img src="/images/three.webp" alt="Three.js rendered sphere" class='rounded-xl' />
        </a>
    </article>
    <article class="flex flex-col shadow-lg rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
        <h2 class="text-center text-lg font-semibold">William Kampf Mediation</h2>
        <p class="text-center text-sm py-2">An introductory site and blog for a client&apos;s Mediation business.</p>
        <a href="https://wkmediation.com/" target="_blank" aria-label="Website for a mediator in Los Angeles, this link opens in a new tab" class="flex h-full justify-center">
            <img src="/images/wk_mediation_logo_horiz_graygold.webp" alt="WK Mediation Logo" class="my-auto" />
        </a>
    </article>
    <article class="shadow-lg rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
        <h2 class="text-center text-lg font-semibold">Pokemon Mystery Dungeon Rescue Team DX Starters</h2>
        <p class="text-center text-sm py-2">A website I developed to learn Vue.js, and later React.js + Typescript (Note, due to Heroku removing their free tier of hosting services, these sites are now offline. Links now take you to their respective GitHub repositories.)</p>
        <a href="https://github.com/ianprice943/PMDDXStarters-react" target="_blank" aria-label="Link to React.js Version Source Code, this link opens in a new tab" class="flex my-auto justify-center">
            <img src="/images/PMDRTDXLogo.webp" alt="Pokemon Mystery Dungeon Rescue Team DX Logo" />
        </a>
        <ul class="flex justify-around pt-2">
            <li class="text-center hover:underline">
                <a href="https://github.com/ianprice943/PMDDXStarters" target="_blank" aria-label="Link to Vue.js Version Source Code, this link opens in a new tab">Vue.js Version Source Code</a>
            </li>
            <li class="text-center hover:underline">
                <a href="https://github.com/ianprice943/PMDDXStarters-react" target="_blank" aria-label="Link to React.js Version Source Code, this link opens in a new tab">React.js Version Source Code</a>
            </li>
        </ul>
    </article>
</div>
