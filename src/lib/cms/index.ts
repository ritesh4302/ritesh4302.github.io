/**
 * Headless CMS integration stub (reserved for future iterations).
 *
 * Intended use: blog posts / health articles authored in a headless CMS
 * (e.g. Sanity, Contentful, Strapi). Swap the stub implementation for real
 * fetchers, then render posts under an `app/blog/` route.
 */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date
  body?: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // TODO: replace with a CMS fetch, e.g.:
  // return sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc)`);
  return [];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  void slug; // TODO: fetch a single post from the CMS by slug
  return null;
}
