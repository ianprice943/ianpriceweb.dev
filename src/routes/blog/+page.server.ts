import { supabase } from "$lib/utils/supabaseClient";
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from "./$types";
import type { BlogPost } from "$lib/types/blogTypes.types";

export const load = ( async (event: any) => {
    const { data, error } = await supabase
    .from('blog_posts')
    .select(`
        id,
        published_at,
        is_published,
        urlStub,
        title,
        description
    `);

    if(!error) {
        const session = await getServerSession(event);
        
        // Filter out unpublished posts if not authenticated
        if(!session?.user?.aud) {
            console.log('data', data);
            const filtered = data?.filter(post => {
                post.is_published;
            });
            return {filtered}
        }

        return {data};
    } else {
        console.log('error:', error);
        return {error: error}
    }
});

/** @type {import('./$types').Actions} */
export const actions = {
    createPost: async ({ request }) => {
        const formData = await request.formData();
        console.log('new post form data', formData);

        const urlStub = formData.get("urlStub")?.toString();

        const createObject: BlogPost = {
            is_published: formData.get("isPublished") === 'on' ? true : false,
            title: formData.get("postTitle")?.toString(),
            description: formData.get("postDescription")?.toString(),
            content: formData.get("markdown")?.toString(),
            urlStub: urlStub
        };

        const { data, error } = await supabase
        .from('blog_posts')
        .insert(createObject)
        .eq('urlStub', urlStub);

        if(!error) {
            if(urlStub) {
                throw redirect(303, `/blog/${urlStub}`);
            } else {
                throw redirect(303, '/blog');
            }
        } else {
            console.log("update post error: ", error);
            throw fail(500, {
                error: 'Something went wrong while updating your blog post.',
                values: {
                    error
                }
            });
        }
    }
} satisfies Actions;