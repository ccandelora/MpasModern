import { ArrowRight, Calendar } from 'lucide-react';
import { useMemo } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageAlt: string;
}

interface BlogCardProps {
  post: BlogPost;
}

// Function to get image URL based on alt text for demo purposes
const getImageUrl = (alt: string) => {
  const imageMap: Record<string, string> = {
    '2023 Changes to Massachusetts Accreditation Standards': 'https://images.unsplash.com/photo-1604870930622-c31ec98c4667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Leveraging Technology in the Accreditation Process': 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Building Public Trust Through Accreditation': 'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  };
  return imageMap[alt] || '';
};

// Function to format date in ISO format for structured data
const formatDateISO = (dateString: string) => {
  const months: Record<string, number> = {
    'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
    'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
  };
  
  const parts = dateString.split(' ');
  const day = parseInt(parts[1].replace(',', ''));
  const month = months[parts[0]];
  const year = parseInt(parts[2]);
  
  return new Date(year, month, day).toISOString();
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const blogPostUrl = `https://mpas.boston/blog/${post.id}`;
  const imageUrl = getImageUrl(post.imageAlt);
  const dateISO = useMemo(() => formatDateISO(post.date), [post.date]);
  const postTitle = post.title;
  
  // Structured data for BlogPosting
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postTitle,
    "description": post.excerpt,
    "image": imageUrl,
    "datePublished": dateISO,
    "author": {
      "@type": "Organization",
      "name": "Massachusetts Police Accreditation Solutions"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Massachusetts Police Accreditation Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mpas.boston/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": blogPostUrl
    }
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col" aria-labelledby={`blog-title-${post.id}`}>
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </script>
      
      {/* Featured Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={post.imageAlt} 
          className="w-full h-full object-cover" 
          loading="lazy"
          width="400"
          height="225"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date */}
        <time dateTime={dateISO} className="flex items-center text-sm text-gray-600 mb-3">
          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
          <span>{post.date}</span>
        </time>
        
        {/* Title */}
        <h3 id={`blog-title-${post.id}`} className="text-xl font-semibold text-primary mb-3">
          <a href={blogPostUrl} className="hover:underline focus:outline-none focus:underline">
            {postTitle}
          </a>
        </h3>
        
        {/* Excerpt */}
        <p className="mb-4 flex-grow">{post.excerpt}</p>
        
        {/* Read More Link */}
        <a 
          href={blogPostUrl} 
          className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300 flex items-center mt-auto focus:outline-none focus:underline" 
          aria-label={`Read more about ${postTitle}`}
        >
          Read More 
          <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
