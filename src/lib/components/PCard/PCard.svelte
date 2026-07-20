<script lang="ts">
    export let cardContent: string;
    // @ts-ignore
    import parse from '@js-bits/dom-parser';

    function containsHTML(str: string) {
        const doc = parse(str, 'text/html') as Document
        return Array.from(doc.childNodes).some(node => node.nodeType === 1);
    }
</script>

<p class="shadow-lg mb-4 rounded-xl p-4 bg-gray-100 dark:bg-gray-600">
    {#if containsHTML(cardContent)}
        {@html cardContent}
    {:else}
        {cardContent}
    {/if}
</p>