import React from 'react';
import { resources } from '@/data';
import { 
  FileDown, Wrench, GraduationCap, FileText, FileSpreadsheet, Video, Calendar 
} from 'lucide-react';

// Map of icon names to components
const iconMap: Record<string, React.ReactNode> = {
  'file-down': <FileDown className="h-8 w-8" />,
  'tool': <Wrench className="h-8 w-8" />, // Using Wrench instead of Tool
  'graduation-cap': <GraduationCap className="h-8 w-8" />,
  'file-pdf': <FileText className="h-5 w-5" />, // Using FileText for PDF files
  'file-spreadsheet': <FileSpreadsheet className="h-5 w-5" />,
  'file-text': <FileText className="h-5 w-5" />,
  'video': <Video className="h-5 w-5" />,
  'calendar': <Calendar className="h-5 w-5" />,
};

const ResourcesComponent = () => {
  return (
    <section id="resources" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl font-bold mb-4">Accreditation Resources</h2>
          <p className="text-lg text-gray-600">
            Access our collection of guides, templates, and tools designed to support your department's accreditation journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-gray-100 p-8 rounded-lg">
              <div className="text-primary text-3xl mb-4">
                {iconMap[resource.icon]}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{resource.title}</h3>
              <ul className="space-y-3">
                {resource.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-300 focus:outline-none focus:underline">
                      <span className="mr-2">{iconMap[link.icon]}</span>
                      <span>{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Resources = React.memo(ResourcesComponent);

export default Resources;
