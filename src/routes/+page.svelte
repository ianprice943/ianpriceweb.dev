<script>
    import PCard from "$lib/components/PCard/PCard.svelte";

    const year = new Date().getFullYear()
    const firstYearOfWebDev = 2018
    const yearsOfExperience = year - firstYearOfWebDev

    const cardContent1 = `My name is Ian Price. I'm a full stack web developer based in Memphis Tennessee. I graduated from Miami University with a Bachelor of Science in Computer Science in 2019. I've been developing websites for ${yearsOfExperience} years across a variety of settings in both the private and public sectors. From e-commerce and enterprise, to government agencies and non-profits, I have the experience needed to help your small business's website stand out from the crowd.`;

    const cardContent2 = "I'm currently working as a Senior Software Engineer for G2O, consulting on projects such as the Innovate Ohio Project to revamp many core .gov websites for the State of Ohio and its residents. My focus is on front-end web development, the online front door to your business that your customers see and interact with. I take designs and bring them to life on the web while ensuring responsiveness across screen sizes, cross browser compatibility, and WCAG2 and ADA compliance.";

    const cardContent3 = `
    <ul class="what-I-offer-list">
        <li>Complete Websites Built From Scratch</li>
        <li>Website Updates</li>
        <li>Accessibility Auditing</li>
        <li>SEO Optimizations</li>
    </ul>
    Every project is unique, so I offer these services on a sliding scale - this way my services can be accessible to anyone, even those on a tight budget.<br/><br/>
    If you or your business needs any of the services mentioned above, email me at <a style="text-decoration:underline;" href="mailto:ianpricewebdev@gmail.com">ianpricewebdev@gmail.com</a>!
    `;
</script>

<svelte:head>
    <title>Ian Price WebDev - Home</title>
    <meta name="description" content="The homepage of Ian Price's Website Development site" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="/images/favicon.ico" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="//www.ianpriceweb.dev" />
    <meta property="og:title" content="Ian Price - Home" />
    <meta property="og:description" content="The homepage of Ian Price's Website Development site" />
    <meta property="og:image" content="//www.ianpriceweb.dev/images/ian.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="//www.ianpriceweb.dev" />
    <meta property="twitter:title" content="Ian Price - Home" />
    <meta property="twitter:description" content="The homepage of Ian Price's Website Development site" />
    <meta property="twitter:image" content="//www.ianpriceweb.dev/images/ian.png" />
</svelte:head>

<h1 class="sr-only">Home</h1>
<div class="flex flex-col items-center md:flex-row md:gap-10 md:items-start lg:items-center">
    <!-- <div class="block w-2/3 mx-auto lg:ml-0 lg:mr-auto lg:w-5/12 lg:my-2.5 xl:w-1/3"> -->
    <div class="w-1/2 sm:w-1/3 md:w-1/2 lg:w-2/5">
        <img src="/images/ian.webp" alt="A headshot of Ian" class="rounded-xl shadow-lg" />
    </div>
    <!-- <div class="text-xl mt-4 lg:w-6/12 lg:ml-auto"> -->
    <div class="text-xl mt-6 md:w-1/2 md:text-base md:mt-0 lg:w-3/5">
        <h2>Who Am I?</h2>
        <PCard cardContent={cardContent1} />
        <h2>What do I do?</h2>
        <PCard cardContent={cardContent2} />
        <h2>What can I do for you?</h2>
        <PCard cardContent={cardContent3} />
    </div>
</div>

<style>
    h2 {
        font-size: 26px;
        margin-bottom: 16px;
    }
    @media (min-width: 1024px) {
        h2 {
            font-size: 24px;
        }
    }
</style>