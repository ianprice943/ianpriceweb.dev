import type { PageLoad } from './$types';


export const load = ( async ({ params }) => {
    const post = await import(`./${params.slug}.md`)
    const { title, description, date, urlStub } = post.metadata
    const content = post.default
  
    return {
      content,
      title,
      description,
      date,
      urlStub
    }
}) satisfies PageLoad;