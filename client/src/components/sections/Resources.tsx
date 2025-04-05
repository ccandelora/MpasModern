import React from 'react';
import { resources } from '@/data';
import { 
  FileText, BookOpen, ClipboardCheck, ListChecks, Calendar, ArrowRight 
} from 'lucide-react';

// Map of icon names to components
const iconMap: Record<string, React.ReactNode> = {
  'file-text': <FileText className="h-8 w-8 text-primary" />, 
  'book-open': <BookOpen className="h-8 w-8 text-primary" />, 
  'clipboard-check': <ClipboardCheck className="h-8 w-8 text-primary" />, 
  'list-checks': <ListChecks className="h-8 w-8 text-primary" />,
  'calendar': <Calendar className="h-8 w-8 text-primary" />,
};

const ResourcesComponent = () => {
  return (
    <section id="resources" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl font-bold mb-4">Official MPAC Resources</h2>
          <p className="text-lg text-gray-600">
            Access key documents and information directly from the Massachusetts Police Accreditation Commission.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <a 
              key={resource.id} 
              href={resource.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="mb-4">
                {iconMap[resource.icon]}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors duration-300">{resource.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{resource.description}</p>
              <span className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300">
                View Resource
                <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Resources = React.memo(ResourcesComponent);

export default Resources;
