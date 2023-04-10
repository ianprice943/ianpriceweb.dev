<script lang="ts">
    import { theme } from "../../stores/stores";
    import { browser } from "$app/environment";

    const setTheme = (newTheme: string) => {
        if(newTheme === 'dark') {
            if(browser) {
                localStorage.setItem('theme', 'dark');
            }
            document.documentElement.classList.add('dark');
            $theme = 'dark';
        } else {
            if(browser) {
                localStorage.setItem('theme', 'light');
            }
            document.documentElement.classList.remove('dark');
            $theme = 'light';
        }
        console.log(`theme is now ${$theme}`)
    }

    const blurButtonIfScreenLarge = (buttonID: string) => {
        const button: HTMLButtonElement | null = document.querySelector(`#${buttonID}`);
        if(button && window.innerWidth >= 1280) {
            button.blur();
        }
    }
</script>

<div id="theme-switcher" class="flex justify-end">
    <button id="sun" name="light" class="outline-2px border-0 border-black bg-yellow-300 w-10 h-10 sm:w-8 sm:h-8 rounded-xl my-auto mr-1 hover:bg-yellow-100 transform xl:hover:scale-125 xl:focus-within:scale-125" on:click={() => {setTheme('light'); blurButtonIfScreenLarge('sun')}} aria-label="activate light theme"></button>
    <button id="moon" name="dark" class="outline-2px border-0 border-black bg-gray-300 w-10 h-10 sm:w-8 sm:h-8 rounded-xl my-auto hover:bg-gray-500 transform xl:hover:scale-125 xl:focus-within:scale-125" on:click={() => {setTheme('dark'); blurButtonIfScreenLarge('moon')}} aria-label="activate dark theme"></button>
</div>

<style>
    #theme-switcher {
        position: absolute;
        right: 1rem;
    }
    @media(min-width: 640px) {
        #theme-switcher {
            position: unset;
        }
    }
    #moon {
        background-image: url('/images/moon.svg');
        background-size: 1.25rem;
        background-position: center;
        background-repeat: no-repeat;
    }
    #sun {
        background-image: url('/images/sun.svg');
        background-size: 1.25rem;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>