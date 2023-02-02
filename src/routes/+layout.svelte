<script lang="ts">
    import { theme } from "../lib/stores/stores";
    import { browser } from "$app/environment";
    import "../app.css";
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";

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

<Header />
<main>
    <slot />
</main>
<Footer />