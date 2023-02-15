<script>
  import { page } from '$app/stores';
</script>

{#if $page !== null}
    <h1 class="text-3xl">{$page?.error?.message}</h1>
{:else}
    <h1 class="text-3xl">Blog post not found</h1>
{/if}