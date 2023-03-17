<script>
  import { page } from '$app/stores';
</script>

{#if $page.data.session}
    <h1 class="text-3xl">{$page?.error?.message}</h1>
{:else}
    <h1 class="text-3xl">404 not found</h1>
{/if}