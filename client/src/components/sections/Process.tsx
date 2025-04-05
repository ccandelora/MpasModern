import { ArrowRight, CheckCircle2, ClipboardCheck, Users, Settings, Target } from 'lucide-react';
import { useEffect, useState } from 'react';
import { searchPexelsImage } from '@/utils/pexels';
import Image from 'next/image';
import processReviewImage from '@/assets/images/process-review.jpg';
import processPlanningImage from '@/assets/images/process-planning.jpg';
import processDevelopmentImage from '@/assets/images/process-development.jpg';
import processTrainingImage from '@/assets/images/process-training.jpg';

interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "Detailed Review & Evaluation",
    description: "We utilize a detailed review and evaluation process designed specifically to identify how we can best support your agency's unique requirements. Whether you are looking for custom-developed model policies or prefer that we recommend enhancements and updates to your existing policies and procedures, our goal is to ensure comprehensive compliance tailored specifically for you.",
    image: processReviewImage
  },
  {
    title: "Customized Planning",
    description: "Understanding the complex and ever-evolving landscape of compliance, we provide hands-on guidance to help your agency consistently meet its operational and regulatory requirements. Recognizing the unique challenges each agency faces, we establish a customized plan that directly addresses your organization's specific needs and circumstances.",
    image: processPlanningImage
  },
  {
    title: "Policy Development & Enhancement",
    description: "For agencies with existing policies and procedures already in place, we collaborate closely with your team leaders and process managers, suggesting practical amendments to optimize current documentation. Alternatively, we can craft entirely new, tailored policies and procedures from the ground up.",
    image: processDevelopmentImage
  },
  {
    title: "Comprehensive Training",
    description: "Furthermore, we deliver comprehensive training to your personnel responsible for managing compliance initiatives, equipping them with practical knowledge, clear guidelines, and proven strategies to meet deadlines efficiently and effectively handle ongoing requirements.",
    image: processTrainingImage
  }
];

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-lg">
            A comprehensive approach to policy development and implementation
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-end justify-start p-6 z-10">
                  <h3 className="text-white text-2xl font-bold">
                    {index + 1}. {step.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
