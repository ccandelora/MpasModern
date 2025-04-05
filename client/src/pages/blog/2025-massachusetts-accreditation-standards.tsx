import BlogPost from '@/components/BlogPost';
import { blogPosts } from '@/data/blog-posts';
import Meta from '@/components/ui/meta';

const BlogPostPage = () => {
  const post = blogPosts[0]; // First blog post

  return (
    <>
      <Meta
        title={`${post.title} | MPAS Blog`}
        description={post.excerpt}
        ogImage={post.image}
      />
      <BlogPost post={post} />
    </>
  );
};

export default BlogPostPage; 