<script lang="ts">
    export let urlStub: string;
    export let title: string;
    export let description: string;
    export let thumbnailUrl: string;
    export let thumbnailAltText: string;
</script>

<li>
    <article class="bg-gray-100 dark:bg-gray-600 shadow-lg rounded-xl p-4 h-full">
        <a 
            class="flex flex-col justify-between h-full"
            href={`/blog/${urlStub}`}
        >
            {#if thumbnailUrl && thumbnailAltText}
                <img 
                    src={thumbnailUrl}
                    alt={thumbnailAltText}
                    loading="lazy"
                    class="object-contain flex mx-auto mb-2 rounded-md"
                />
            {/if}
            <h2 class="text-2xl">{title}</h2>
            <p>{description}</p>
        </a>
    </article>
</li>

<style>
    img {
        height: unset;
    }
</style>