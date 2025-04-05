import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <Link href="/#blog" className="inline-flex items-center text-primary hover:text-primary/90 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout; 