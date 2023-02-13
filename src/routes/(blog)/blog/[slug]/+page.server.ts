import { supabase } from '$lib/utils/supabaseClient';
import type { PageServerLoad } from './$types';
import type { BlogPost } from '$lib/types/blogTypes.types';


export const load = ( async ({ params }) => {
    // const post = await import(`./${params.slug}.md`)
    // const { title, description, date, urlStub } = post.metadata
    // const content = post.default
  
    // return {
    //   content,
    //   title,
    //   description,
    //   date,
    //   urlStub
    // }
    // const { data, error } = await supabase
    // .from('blog_posts')
    // .select(`
    //     is_published,
    //     urlStub,
    //     title,
    //     description,
    //     content
    // `)
    // .eq('urlStub', params.slug);

    console.log('slug: ', params.slug);

    const { data, error } = await supabase
    .storage
    .from('blog-posts')
    .download(`${params.slug}/${params.slug}.md`);

    console.log('attempting to download', `${params.slug}/${params.slug}.md`)

    if(!error) {
      console.log(data);

      const { title, description, date, urlStub } = data.metadata;
      const content = data.default;

      return {
        title,
        description,
        date,
        urlStub,
        content
      }
    }

}) satisfies PageServerLoad;