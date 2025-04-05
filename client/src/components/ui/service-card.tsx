import { ArrowRight, Search, FileText, Users, Folder, ClipboardCheck, RefreshCw, Check } from 'lucide-react';
import initialAssessmentImage from '../../assets/images/image2.png';
import policyDevelopmentImage from '../../assets/images/image6.png';
import staffTrainingImage from '../../assets/images/image7.png';
import documentationImage from '../../assets/images/image11.png';
import mockAssessmentImage from '../../assets/images/image12.png';
import ongoingComplianceImage from '../../assets/images/image14.png';

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
    'Initial Assessment and Gap Analysis': initialAssessmentImage,
    'Policy Development and Implementation': policyDevelopmentImage,
    'Staff Training and Education': staffTrainingImage,
    'Documentation and Evidence Management': documentationImage,
    'Assessment Preparation': mockAssessmentImage,
    'Ongoing Compliance Support': ongoingComplianceImage,
  };
  return imageMap[alt] || initialAssessmentImage;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  points, 
  imageAlt 
}) => {
  const serviceUrl = `https://mpas.boston/services/${title.toLowerCase().replace(/\s+/g, '-')}`;
  const imageUrl = getImageUrl(imageAlt);
  const serviceId = `service-${title.toLowerCase().replace(/\s+/g, '-')}`;
  
  // Structured data for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Massachusetts Police Accreditation Solutions"
    },
    "serviceType": "Police Accreditation Consulting",
    "image": imageUrl
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col" aria-labelledby={serviceId}>
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-full object-cover" 
          loading="lazy"
          width="400"
          height="225"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <header className="flex items-center mb-4">
          <div className="bg-primary rounded-full p-3 mr-4" aria-hidden="true">
            {iconMap[icon]}
          </div>
          <h3 id={serviceId} className="text-xl font-semibold text-primary">{title}</h3>
        </header>
        <p className="mb-4">{description}</p>
        <ul className="space-y-2 mb-6 flex-grow" aria-label={`Benefits of ${title}`}>
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-accent mt-1 mr-2" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <a href="#contact" 
           className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300 flex items-center mt-auto focus:outline-none focus:underline"
           aria-label={`Learn more about ${title} and contact us`}>
          Learn More 
          <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;
