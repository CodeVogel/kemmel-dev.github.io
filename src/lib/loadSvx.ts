import { error } from "@sveltejs/kit";

export async function loadSvx(slug: string) {
    try {
        const post = await import(`../content/posts/${slug}.svx`);

        return {
            content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        error(404, `Could not find `);
    }
}