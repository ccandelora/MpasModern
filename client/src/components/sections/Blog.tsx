import { blogPosts } from '@/data';
import BlogCard from '@/components/ui/blog-card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg">
            Stay informed about accreditation trends, law enforcement best practices, and industry updates through our regularly published articles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <a href="#">View All Articles</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
