<script lang="ts">
    export let urlStub: string;
    export let title: string;
    export let description: string;
</script>

<li>
    <article class="bg-gray-100 dark:bg-gray-600 shadow-lg rounded-xl p-4">
        <a href={`/blog/${urlStub}`}>
            <h2 class="text-2xl">{title}</h2>
            <p>{description}</p>
        </a>
    </article>
</li>