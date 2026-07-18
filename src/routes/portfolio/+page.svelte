<svelte:head>
    <title>Ian Price - Portfolio</title>
    <meta name="description" content="The portfolio page of Ian Price's Portfolio" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href={`//$ianpriceweb.dev/images/favicon.ico`} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content=//www.ianpriceweb.dev/ />
    <meta property="og:title" content="Ian Price - Portfolio" />
    <meta property="og:description" content="The portfolio page of Ian Price's Portfolio" />
    <meta property="og:image" content="//www.ianpriceweb.dev/images/ian.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="//www.ianpriceweb.dev/" />
    <meta property="twitter:title" content="Ian Price - Portfolio" />
    <meta property="twitter:description" content="The portfolio page of Ian Price's Portfolio" />
    <meta property="twitter:image" content="//www.ianpriceweb.dev/images/ian.png" />
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
        <h2 class="text-center text-lg font-semibold">Dawn Taylor Law</h2>
        <p class="text-center text-sm py-2">Dawn Taylor Law is a law office focused on Mediations, Family Law and Criminal Law.</p>
        <a href="https://www.dawntaylorlaw.com" target="_blank" aria-label="The website for Dawn Taylor's law practice, this link opens in a new tab" class="flex h-full justify-center rounded-xl">
            <img src="/images/dawn-and-scales.webp" alt="Dawn with legal scales" class="my-auto" />
        </a>
    </article>
    <article class="flex flex-col shadow-lg rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
        <h2 class="text-center text-lg font-semibold">Operation Valor Arts</h2>
        <p class="text-center text-sm py-2">Operation Valor Arts is a 501(c)(3) dedicated to providing Veterans with training and resources to design interpretive public art.</p>
        <a href="https://www.ovarts.org" target="_blank" aria-label="The website for Operation Valor Arts, this link opens in a new tab" class="flex h-full justify-center rounded-xl">
            <img src="/images/OVArts-Logo.webp" alt="Operation Valor Arts logo" class="my-auto" />
        </a>
    </article>
    <article class="flex flex-col shadow-lg rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
        <h2 class="text-center text-lg font-semibold">William Kampf Mediation</h2>
        <p class="text-center text-sm py-2">An introductory site and blog for a client&apos;s Mediation business.</p>
        <a href="https://wkmediation.com/" target="_blank" aria-label="Website for a mediator in Los Angeles, this link opens in a new tab" class="flex h-full justify-center">
            <img src="/images/wk_mediation_logo_horiz_graygold.webp" alt="WK Mediation Logo" class="my-auto" />
        </a>
    </article>
</div>
