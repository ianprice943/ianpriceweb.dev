<script lang="ts">
    export let urlStub: string;
    export let title: string;
    export let description: string;
    export let thumbnailUrl: string;
    export let thumbnailAltText: string;
</script>

<li>
    <article class="bg-gray-100 dark:bg-gray-600 shadow-lg rounded-xl p-4">
        <a href={`/blog/${urlStub}`}>
            {#if thumbnailUrl && thumbnailAltText}
                <img 
                    src={thumbnailUrl}
                    alt={thumbnailAltText}
                    loading="lazy"
                    class="object-contain min-h-[200px]"
                />
            {/if}
            <h2 class="text-2xl">{title}</h2>
            <p>{description}</p>
        </a>
    </article>
</li>