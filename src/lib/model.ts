export type PostCategory = 'project' | 'blog';

export type WorkExperience = {
   company: {
      name: string;
      logo: string;
      website: string;
   };
   position: string;
   description: string;
   location: string;
   timespan: {
      startDate: Date;
      endDate: Date;
   };
};

export type LinkIcon = {
   name: string;
   icon: string;
   url: string;
}

export type Post = {
   slug: string;
   title: string;
   description: string;
   date: Date;
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
   const missingProperties = requiredProperties.filter(
      (prop) => frontMatter[prop] === undefined || frontMatter[prop] === null
   );
   return missingProperties;
}
