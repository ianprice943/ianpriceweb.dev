<script lang="ts">
    import { page } from '$app/stores';
</script>

<footer class="text-center p-2 flex-grow-0 flex-shrink-0 relative">
    <div class="justify-self-center">Written by Ian Price - 2023</div>
    {#if !$page.data.session}
        <a href="/login" alt="admin log in" class="underline absolute right-2 top-2">Admin Login</a>
    {:else}
        <form method="POST" action="/login?/logout">
            <button on:submit|preventDefault type="submit" alt="admin log out" class="underline absolute right-2 top-2">Admin Logout</button>
        </form>
    {/if}
</footer>