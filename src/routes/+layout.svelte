<script lang="ts">
    import { theme } from "$lib/stores/stores";
    import { browser } from "$app/environment";
    import "../app.css";
    import Header from "$lib/components/Header/Header.svelte";
    import Footer from "$lib/components/Footer/Footer.svelte";
    import { supabase } from "$lib/utils/supabaseClient";
    import { invalidate } from "$app/navigation";
    import { onMount } from 'svelte'

    onMount(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(() => {
            invalidate('supabase:auth')
        });

        return () => {
            subscription.unsubscribe()
        }
    })

    if(browser) {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('prefers-color-scheme: dark').matches)) {
            document.documentElement.classList.add('dark');
            $theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            $theme = 'light';
        }
    }
</script>

<div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow px-4 pb-10 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <slot />
    </main>
    <Footer />
</div>