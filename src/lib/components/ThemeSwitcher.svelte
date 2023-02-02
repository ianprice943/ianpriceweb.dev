<script>

</script>

<div class="flex justify-end">
    <button id="sun" class="outline-2px border-0 border-black bg-yellow-300 w-10 h-10 sm:w-8 sm:h-8 rounded-xl my-auto mr-1 hover:bg-yellow-100 transform xl:hover:scale-125 xl:focus-within:scale-125" aria-label="activate light theme"></button>
    <button id="moon" class="outline-2px border-0 border-black bg-gray-300 w-10 h-10 sm:w-8 sm:h-8 rounded-xl my-auto hover:bg-gray-500 transform xl:hover:scale-125 xl:focus-within:scale-125" aria-label="activate dark theme"></button>
</div>

<style>
    #moon {
        background-image: url('/moon.svg');
        background-size: 1.25rem;
        background-position: center;
        background-repeat: no-repeat;
    }
    #sun {
        background-image: url('/sun.svg');
        background-size: 1.25rem;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>