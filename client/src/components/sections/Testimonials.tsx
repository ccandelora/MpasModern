import { testimonials, caseStudy } from '@/data';
import TestimonialCard from '@/components/ui/testimonial-card';
import { Button } from '@/components/ui/button';
import { CalendarCheck, FileText, Users } from 'lucide-react';

// Map of icon names to components
const iconMap: Record<string, React.ReactNode> = {
  'calendar-check': <CalendarCheck className="h-5 w-5 text-accent" />,
  'file-text': <FileText className="h-5 w-5 text-accent" />,
  'users': <Users className="h-5 w-5 text-accent" />,
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg">
            See how departments across Massachusetts have achieved accreditation success with our help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1498598457418-36ef20772c9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt={caseStudy.imageAlt} 
                className="rounded-lg" 
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-primary mb-4">{caseStudy.title}</h3>
              <p className="mb-4">{caseStudy.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                {caseStudy.stats.map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2">{iconMap[stat.icon]}</span>
                    <span>{stat.text}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="text-accent font-medium hover:text-accent/80 transition duration-300 flex items-center">
                Read the Full Case Study 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <a href="#contact">Become Our Next Success Story</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
