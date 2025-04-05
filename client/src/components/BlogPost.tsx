import { BlogPost as BlogPostType } from '@/data/blog-posts';
import BlogLayout from '@/components/layout/BlogLayout';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <BlogLayout>
      <div className="relative h-[300px] md:h-[400px] -mx-8 -mt-8 mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>
        
        <div className="text-gray-600">
          {post.content ? (
            <ReactMarkdown
              components={{
                h2: ({children}) => <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>,
                p: ({children}) => <p className="text-gray-600 leading-relaxed mb-4">{children}</p>,
                ul: ({children}) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
                li: ({children}) => <li className="text-gray-600">{children}</li>,
                strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                a: ({children, href}) => (
                  <a 
                    href={href}
                    className="text-primary hover:underline transition-colors duration-200"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          ) : (
            <p className="text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>
          )}
          
          {/* Placeholder content - we'll replace this with real content later */}
          <p>
            Police departments across Massachusetts are continually striving to improve their services
            and maintain the highest standards of law enforcement. The accreditation process plays a
            crucial role in achieving these goals, providing a framework for excellence and
            accountability.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Key Changes and Updates
          </h2>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Enhanced focus on community engagement and transparency</li>
            <li>Updated requirements for policy documentation and review</li>
            <li>New guidelines for technology implementation and cybersecurity</li>
            <li>Revised training requirements for officers and staff</li>
          </ul>
          
          <p>
            These changes reflect the evolving nature of law enforcement and the increasing
            importance of maintaining high standards in police operations. Departments seeking
            accreditation must demonstrate their commitment to excellence through comprehensive
            documentation, regular training, and consistent policy implementation.
          </p>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPost; 