export async function loadSvx(slug: string) {
    const path = `../content/posts/${slug}.svx`;
    try {
        const post = await import(/* @vite-ignore */ path);
        return {
            content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        throw { status: 404, message: `Did not find a .svx with slug "${slug}", supposedly located at ../content/posts/${slug}.svx`};
    }
}