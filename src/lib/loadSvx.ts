export async function loadSvx(slug: string) {
    try {
        const post = await import(`../content/posts/${slug}.svx`);
        return {
            content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        throw { status: 404, message: `Did not find a .svx with slug "${slug}", supposedly located at ../content/posts/${slug}.svx`};
    }
}