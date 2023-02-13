<script lang="ts">
    export let urlStub: string;
    export let title: string;
    export let description: string;
</script>

<li>
    <article>
        <a href={`/blog/${urlStub}`}>
            <h2>{title}</h2>
            <p>{description}</p>
        </a>
    </article>
</li>