<script lang="ts">
    import { theme } from "$lib/stores/stores";
	import { onMount } from "svelte";
    export let rotate: Boolean;
    let fill: string;

    $: $theme, setFill();
    
    const setFill = () => {
        if($theme === 'dark') {
            fill = "#FFF";
        } else {
            fill = "#000";
        }
    }

    onMount(() => {
        setFill();
    });
</script>

{#if rotate}
    <svg class="rotate-180 -ml-3" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.16108 10.0731C4.45387 9.2649 5.02785 8 6.1018 8H17.898C18.972 8 19.5459 9.2649 18.8388 10.0731L13.3169 16.3838C12.6197 17.1806 11.3801 17.1806 10.6829 16.3838L5.16108 10.0731ZM6.65274 9.5L11.8118 15.396C11.9114 15.5099 12.0885 15.5099 12.1881 15.396L17.3471 9.5H6.65274Z" fill={`${fill}`}/>
    </svg>
{:else}
    <svg class="-ml-3" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.16108 10.0731C4.45387 9.2649 5.02785 8 6.1018 8H17.898C18.972 8 19.5459 9.2649 18.8388 10.0731L13.3169 16.3838C12.6197 17.1806 11.3801 17.1806 10.6829 16.3838L5.16108 10.0731ZM6.65274 9.5L11.8118 15.396C11.9114 15.5099 12.0885 15.5099 12.1881 15.396L17.3471 9.5H6.65274Z" fill={`${fill}`}/>
    </svg>
{/if}
