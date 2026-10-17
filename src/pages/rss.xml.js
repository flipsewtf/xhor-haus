import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteDescription } from '@/assets/data/site-desc';

export async function GET(context) {
    const posts = await getCollection('blog');

    // Sort posts by pubDate, newest first
    const sortedPosts = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

    return rss({
        title: 'Flipse | Xhor.haus',
        description: siteDescription,
        site: context.site,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description || '',
            content: post.body,
            link: `/weblog/${post.id}/`,
        })),
        customData: `<language>en-US</language>`,
    });
}
