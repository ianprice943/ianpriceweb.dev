<script lang="ts">
    import { JSDOM } from "jsdom";
    export let cardContent: string;

    function containsHTML(str: string) {
        const dom = new JSDOM('<!DOCTYPE html><html></html>');
        const parser = new dom.window.DOMParser()
        const doc = parser.parseFromString(str, 'text/html')
        // console.log('doc nodes: ', doc.body.childNodes.length)
        // console.log(Array.from(doc.body.childNodes).some(node => node.nodeType === 1))
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