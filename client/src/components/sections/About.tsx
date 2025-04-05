import { aboutPoints } from '@/data';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import aboutImage from '../../assets/images/image30.png';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src={aboutImage}
              alt="Police officers in a meeting" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-primary text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-6">
              At Massachusetts Police Accreditation Solutions (MPAS), our mission is to educate, assist, support and guide our clients with integrity, enthusiasm, and professionalism. We believe that proper accreditation leads to better policing, increased community trust, and improved public safety outcomes.
            </p>
            
            <h3 className="text-primary-600 text-xl font-semibold mb-4">Why Choose MPAS?</h3>
            <ul className="space-y-3">
              {aboutPoints.map((point) => (
                <li key={point.id} className="flex items-start">
                  <span className="text-accent mr-3 mt-1">
                    <Check className="h-5 w-5" />
                  </span>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="mt-8" variant="default">
              <a href="#contact">Learn More About Our Team</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
