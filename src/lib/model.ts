export type PostCategory = 'project' | 'blog';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	category: PostCategory[];
	published: boolean;
	headerImage: string;
	youtubeURL?: string;
};

// This function should return true if the data contains 
// all non-optional properties of a post (minus the slug).
export function missingPostProps(frontMatter: any) {
	const requiredProperties = [
		'title', 
		'description', 
		'date', 
		'category', 
		'published', 
		'headerImage'
	];
	const missingProperties = requiredProperties.filter(prop => frontMatter[prop] === undefined || frontMatter[prop] === null)
	return missingProperties;
}
