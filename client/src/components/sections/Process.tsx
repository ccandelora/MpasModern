import { processSteps } from '@/data';
import ProcessStep from '@/components/ui/process-step';

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl font-bold mb-4">Our Proven Accreditation Process</h2>
          <p className="text-lg">
            We've developed a systematic approach to guide your department through each phase of the accreditation journey, ensuring clarity and measurable progress at every step.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line (visible on medium screens and up) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/70 transform -translate-x-1/2"></div>
          
          {/* Process Steps */}
          {processSteps.map((step, index) => (
            <ProcessStep 
              key={step.id} 
              step={step} 
              index={index} 
              isLast={index === processSteps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
