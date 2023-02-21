<script>
    import { page } from '$app/stores';
    console.log('page', $page);
    let email = "";
    let pw = "";
</script>

<form method="POST" action="?/login" class="flex flex-col">
    <label for="email">Email:</label>
    <input type="text" id="email" name="email" bind:value={email} class="text-black pl-1 focus:outline-0 border-0 w-1/3">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" bind:value={pw} class="text-black pl-1 focus:outline-0 border-0 w-1/3">
    <button
        type="submit"
        on:submit
        class="w-24 px-2 py-1 mt-2 rounded-md border-2 bg-green-800 border-green-800"
    >
        Sign In
    </button>
</form>

{#if $page.status === 400}
    <p class="text-red-600">{$page.form.error}</p>
{/if}