<script lang="ts">
    import { page } from '$app/stores';
</script>

<footer class="text-center p-2 flex-grow-0 flex-shrink-0 relative">
    <div class="justify-self-center">Copyright © 2023 - Ian Price</div>
    {#if !$page.data.session}
        <a aria-hidden="true" href="/login" class="underline sm:absolute sm:right-6 sm:top-2">Admin Login</a>
    {:else}
        <form aria-hidden="true" method="POST" action="/login?/logout">
            <button on:submit|preventDefault type="submit" class="underline sm:absolute sm:right-6 sm:top-2">Admin Logout</button>
        </form>
    {/if}
</footer>