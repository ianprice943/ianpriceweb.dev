<script lang="ts">
    import { page } from '$app/stores';
</script>

<footer class="text-center p-2 flex-grow-0 flex-shrink-0 relative">
    <div class="justify-self-center">Ian Price - 2023</div>
    {#if !$page.data.session}
        <a href="/login" class="underline sm:absolute sm:right-6 sm:top-2">Admin Login</a>
    {:else}
        <form method="POST" action="/login?/logout">
            <button on:submit|preventDefault type="submit" class="underline sm:absolute sm:right-6 sm:top-2">Admin Logout</button>
        </form>
    {/if}
</footer>