---
title: Test Post
date: "2023-2-12"
description: "A test blog post"
urlStub: "test"
---

<script>
    import Caret from '$lib/components/Caret.svelte'
</script>

## Test Markdown File

**Bold?**

List:
- SvelteKit
- Is
- Great!

Code block
```ts
    let typedVariable: Boolean = true;
```

Another code block with a long piece of code
```ts
    let superLongVariableWithALotOfText: string = "abcdefghijklmnopqrstuvwxyz";
```

Imported Svelte Component Below:
<Caret rotate={false} />