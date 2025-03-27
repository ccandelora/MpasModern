import { ArrowRight, Search, FileText, Users, Folder, ClipboardCheck, RefreshCw, Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  points: string[];
  imageAlt: string;
}

// Map of icon names to components
const iconMap: Record<string, React.ReactNode> = {
  'search': <Search className="h-5 w-5 text-white" />,
  'file-text': <FileText className="h-5 w-5 text-white" />,
  'users': <Users className="h-5 w-5 text-white" />,
  'folder': <Folder className="h-5 w-5 text-white" />,
  'clipboard-check': <ClipboardCheck className="h-5 w-5 text-white" />,
  'refresh-cw': <RefreshCw className="h-5 w-5 text-white" />,
};

// Function to get image URL based on alt text for demo purposes
const getImageUrl = (alt: string) => {
  const imageMap: Record<string, string> = {
    'Initial Assessment and Gap Analysis': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Policy Development and Implementation': 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Staff Training and Education': 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Documentation and Evidence Management': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Mock Assessment Preparation': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Ongoing Compliance Support': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  };
  return imageMap[alt] || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f';
};

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  points, 
  imageAlt 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={getImageUrl(imageAlt)} 
          alt={imageAlt} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded-full p-3 mr-4">
            {iconMap[icon]}
          </div>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
        </div>
        <p className="mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-accent mt-1 mr-2" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <a href="#contact" className="text-accent font-medium hover:text-accent/80 transition duration-300 flex items-center">
          Learn More 
          <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
