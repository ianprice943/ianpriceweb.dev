<script lang="ts">
    export let cardContent: string;

    function containsHTML(str: string) {
        const doc = new DOMParser().parseFromString(str, "text/html");
        return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
    }
</script>

<p class="shadow-lg mb-4 rounded-xl p-4 bg-gray-100 dark:bg-gray-600">
    {#if containsHTML(cardContent)}
        {@html cardContent}
    {:else}
        {cardContent}
    {/if}
</p>