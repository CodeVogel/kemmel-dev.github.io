import type { Post } from '$lib/model'
import { json } from '@sveltejs/kit'

// Gets all posts.
async function getPosts() {
	let posts: Post[] = []

    // Get all the SVX files
	const paths = import.meta.glob('/src/content/posts/*.svx', { eager: true })

	for (const path in paths) {
		const file = paths[path]
        // Get the slug from the path
		const slug = path.split('/').pop()?.replace('.svx', '')
        
        // Check if the file is an object, has metadata (frontmatter) and slug was parsed
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const frontMatter = file.metadata as Omit<Post, 'slug'>
            // Create the post
			const post = { ...frontMatter, slug } satisfies Post
            if (post.published)
			    posts.push(post)
		}
	}

    // Sort the posts by date
	posts = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

// GET /api/posts
export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
