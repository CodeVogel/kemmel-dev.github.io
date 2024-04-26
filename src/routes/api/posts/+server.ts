import { missingPostProps, type Post } from '$lib/model';
import { json } from '@sveltejs/kit';

// Gets all posts.
async function getPosts() {
    let posts: Post[] = [];

    // Get all the SVX files
    const paths = import.meta.glob('/src/content/posts/*.svx', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        // Get the slug from the path
        const slug = path.split('/').pop()?.replace('.svx', '');

        // Check if the file is an object, has metadata (frontmatter) and slug was parsed
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const frontMatter = file.metadata;
            const missingProps = missingPostProps(frontMatter);
            if (missingProps.length > 0) {
                console.log(
                    `Post ${slug} is missing the following properties, or they are null: ${missingProps.join(', ')}`
                );
                continue;
            }
            const post = frontMatter as Omit<Post, 'slug'>;
            posts.push({ ...post, slug });
        }
    }

    // Sort the posts by date
    posts = posts.sort(
        (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
    );

    return posts;
}

// GET /api/posts
export async function GET() {
    const posts = await getPosts();
    return json(posts);
}

export const prerender = true;
