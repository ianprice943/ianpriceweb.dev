import { supabase } from '$lib/utils/supabaseClient';
import type { PageServerLoad } from './$types';
import { createRequire } from "module";
import { compile as mdsvexCompile } from 'mdsvex';
import { compile as svelteCompile } from 'svelte/compiler';

export const load = ( async ({ params }) => {
    
    return loadFromDB(params.slug);

    // return loadFromStorage(params.slug);

}) satisfies PageServerLoad;

const loadFromDB = async (slug: string) => {
    const { data, error } = await supabase
    .from('blog_posts')
    .select(`
        is_published,
        urlStub,
        title,
        description,
        content
    `)
    .eq('urlStub', slug);
    
    if(!error) {
        const dbContent = data[0].content ? data[0].content : "Error loading content from database";
        console.log('content', dbContent);

        return compileMD(dbContent);
    }
}

const loadFromStorage = async (slug: string) => {
    const { data, error } = await supabase
    .storage
    .from('blog-posts')
    .download(`${slug}/${slug}.md`);

    console.log('attempting to download', `${slug}/${slug}.md`)

    if(!error) {
        console.log(data);
        const bufferedData = await data.arrayBuffer().then((arrayBuffer) => Buffer.from(arrayBuffer, 'binary').toString());
        console.log('buff', bufferedData);

        return compileMD(bufferedData);
    }
}

const compileMD = async (data: string) => {
  // following code adapted from https://gist.github.com/babichjacob/c6907dd261fb3776044f618372d59470
  // unfortunately I lose the use of svelte components in markdown when using things this way

  const mdsvexConfig = {
    extensions: [".svelte.md"],
  }
  
  const preprocessed = await mdsvexCompile(data, mdsvexConfig);
  // console.log('preprocessed', preprocessed);
  
  if(preprocessed) {
      const compiled = svelteCompile(
      preprocessed.code,
        {
          generate: 'ssr',
          format: "cjs",
          hydratable: false,
        }
      );
      // console.log('compiled', compiled);
      
      const require = createRequire(import.meta.url);
      // getting TS to pipe down
      const module = { 
        exports: { 
          default: {
            render: function(){} 
          },
          metadata: {
            title: "",
            description: "",
            date: "",
            urlStub: ""
          }
        } 
      };
      const exports = module.exports;
      
      eval(compiled.js.code);
      
      const rendered = module.exports.default.render();
      const meta = module.exports.metadata;
      
      // still works even though TS is complaining
      const renderedHTML = rendered.html;
      
      const { title, description, date, urlStub } = meta;
      // console.log('title', title, 'desc', description, 'date', date, 'stub', urlStub)
      const content = renderedHTML;
      const mdContent = data;
      
      return {
        title,
        description,
        date,
        urlStub,
        content,
        mdContent
      }
  }
}