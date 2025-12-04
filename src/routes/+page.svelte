<script>
    import PCard from "$lib/components/PCard/PCard.svelte";

    const cardContent1 = "Greetings! I'm a full stack web developer based in Memphis Tennessee. In 2019 I graduated Miami University with a Bachelor of Science in Computer Science.";

    const cardContent2 = "My focus is on front-end web development. I take designs and bring them to life on the web while ensuring responsiveness, cross browser compatibility, and WCAG2 and ADA compliance. A more accessible web is a more inclusive web.";

    const cardContent3 = "I'm currently working as a Senior Software Engineer for G2O, consulting on projects such as the Innovate Ohio Project to revamp many core .gov websites for the State of Ohio.";

    const cardContent4 = 'If you or your business needs a website, or updates to your current site, email me at <a style="text-decoration:underline;" href="mailto:ianpricewebdev@gmail.com">ianpricewebdev@gmail.com</a>!'
</script>

<svelte:head>
    <title>Ian Price - Home</title>
    <meta name="description" content="The homepage of Ian Price's Portfolio" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="/images/favicon.ico" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="//www.ianpriceweb.dev" />
    <meta property="og:title" content="Ian Price - Home" />
    <meta property="og:description" content="The homepage of Ian Price's Portfolio" />
    <meta property="og:image" content="//www.ianpriceweb.dev/images/LinkedIn.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="//www.ianpriceweb.dev" />
    <meta property="twitter:title" content="Ian Price - Home" />
    <meta property="twitter:description" content="The homepage of Ian Price's Portfolio" />
    <meta property="twitter:image" content="//www.ianpriceweb.dev/images/LinkedIn.png" />
</svelte:head>

<h1 class="text-center md:text-left text-3xl my-4">Home</h1>
<div class="flex flex-col lg:flex-row">
    <div class="block w-2/3 mx-auto lg:ml-0 lg:mr-auto lg:w-5/12 lg:my-2.5 xl:w-1/3">
        <img src="/images/LinkedIn.webp" alt="Ian" class="rounded-xl shadow-lg" />
    </div>
    <div class="text-xl mt-4 lg:w-6/12 lg:ml-auto">
        <PCard cardContent={cardContent1} />
        <PCard cardContent={cardContent2} />
        <PCard cardContent={cardContent3} />
        <PCard cardContent={cardContent4} />
    </div>
</div>