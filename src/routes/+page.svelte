<script>
    import PCard from "$lib/components/PCard.svelte";
    // import profilePicture from '/images/LinkedIn.png';

    const cardContent1 = "Greetings! I'm a 25 year old web developer based in Columbus, Ohio. In 2019 I graduated Miami University with a Bachelor of Science in Computer Science.";

    const cardContent2 = "My focus is on front-end web development. I've obtained over two years of E-Commerce experience working for Ascena and Opcapita brands such as Justice, Dressbarn, and maurices.";

    const cardContent3 = "I take designs and bring them to life on the web while ensuring responsiveness, cross browser compatibility, and WCAG2 and ADA compliance. A more accessible web is a more inclusive web."

    const cardContent4 = "I'm currently working as a Software Engineer for g2o, consulting on the Innovate Ohio Project to revamp many core .gov websites for the State of Ohio.";
</script>

<svelte:head>
    <title>Ian Price - Home</title>
    <meta name="description" content="The homepage of Ian Price's Portfolio" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="//ianprice943.dev/images/favicon.ico" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="//www.ianprice943.dev" />
    <meta property="og:title" content="Ian Price - Home" />
    <meta property="og:description" content="The homepage of Ian Price's Portfolio" />
    <meta property="og:image" content="//www.ianprice943.dev/images/LinkedIn.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="//www.ianprice943.dev" />
    <meta property="twitter:title" content="Ian Price - Home" />
    <meta property="twitter:description" content="The homepage of Ian Price's Portfolio" />
    <meta property="twitter:image" content="//www.ianprice943.dev/images/LinkedIn.png" />
</svelte:head>
<section class="flex flex-col md:flex-row">
    <div class="block w-2/3 mx-auto md:ml-0 md:mr-auto md:w-5/12 md:my-2.5 xl:w-1/3">
        <img src={'/images/LinkedIn.png'} alt="An image of Ian" class="rounded-xl" />
    </div>
    <div class="text-xl m-2.5 mr-0 md:w-6/12 md:ml-auto">
        <PCard cardContent={cardContent1} />
        <PCard cardContent={cardContent2} />
        <PCard cardContent={cardContent3} />
        <PCard cardContent={cardContent4} />
    </div>
</section>

<style lang="postcss">

</style>