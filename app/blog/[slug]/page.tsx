import React from 'react';
import { useRouter } from 'next/router';

const BlogPostPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Example blog post data; this should ideally come from a CMS or local file
    const blogPost = {
        title: 'Sample Blog Post',
        content: '<p>This is the full content of the blog post.</p>',
        relatedPosts: [
            { title: 'Related Post 1', slug: 'related-post-1' },
            { title: 'Related Post 2', slug: 'related-post-2' },
        ],
    };

    return (
        <div>
            <h1>{blogPost.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            <h2>Related Posts</h2>
            <ul>
                {blogPost.relatedPosts.map(post => (
                    <li key={post.slug}>
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPostPage;
