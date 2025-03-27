import { ArrowRight, Calendar } from 'lucide-react';

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

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Featured Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={getImageUrl(post.imageAlt)} 
          alt={post.imageAlt} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{post.date}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-primary mb-3">{post.title}</h3>
        
        {/* Excerpt */}
        <p className="mb-4">{post.excerpt}</p>
        
        {/* Read More Link */}
        <a href="#" className="text-accent font-medium hover:text-accent/80 transition duration-300 flex items-center">
          Read More 
          <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
