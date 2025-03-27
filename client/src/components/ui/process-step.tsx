import { Check } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  points: string[];
  imageAlt: string;
}

interface ProcessStepProps {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}

// Function to get image URL based on alt text for demo purposes
const getImageUrl = (alt: string) => {
  const imageMap: Record<string, string> = {
    'Initial assessment process': 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    'Strategic planning session': 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Policy development': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Implementation and training': 'https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80',
    'Assessment and support': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  };
  return imageMap[alt] || '';
};

const ProcessStep: React.FC<ProcessStepProps> = ({ step, index, isLast }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col md:flex-row items-center ${isLast ? '' : 'mb-12 md:mb-24'}`}>
      {/* Left Column (Text for odd-indexed steps, Image for even-indexed steps) */}
      <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:text-right order-2 md:order-1' : 'order-3'}`}>
        {isEven ? (
          <>
            <h3 className="text-2xl font-semibold text-primary mb-3">{step.title}</h3>
            <p className="text-lg mb-4">{step.description}</p>
            <ul className="space-y-2 md:ml-auto">
              {step.points.map((point, i) => (
                <li key={i} className="flex items-start justify-end">
                  <span>{point}</span>
                  <Check className="text-accent mt-1 ml-2 h-5 w-5" />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <img 
            src={getImageUrl(step.imageAlt)} 
            alt={step.imageAlt} 
            className="rounded-lg shadow-lg w-full" 
          />
        )}
      </div>
      
      {/* Center Column (Step Number) */}
      <div className="relative md:w-8 order-1 md:order-2 mb-8 md:mb-0">
        <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg relative z-10">
          {step.id}
        </div>
      </div>
      
      {/* Right Column (Image for odd-indexed steps, Text for even-indexed steps) */}
      <div className={`md:w-1/2 ${isEven ? 'order-3' : 'md:pl-12 order-2 md:order-3'}`}>
        {isEven ? (
          <img 
            src={getImageUrl(step.imageAlt)} 
            alt={step.imageAlt} 
            className="rounded-lg shadow-lg w-full" 
          />
        ) : (
          <>
            <h3 className="text-2xl font-semibold text-primary mb-3">{step.title}</h3>
            <p className="text-lg mb-4">{step.description}</p>
            <ul className="space-y-2">
              {step.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-accent mt-1 mr-2 h-5 w-5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ProcessStep;
