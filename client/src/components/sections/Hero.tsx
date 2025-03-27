import { Button } from '@/components/ui/button';
import badgeImage from '../../assets/images/police-badge.svg';

const Hero = () => {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-center"
          style={{
            backgroundImage: `url(${badgeImage})`,
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
            opacity: 0.1
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Guiding Excellence in Massachusetts Law Enforcement</h1>
          <p className="text-xl mb-8">We help police departments navigate the accreditation process and achieve operational excellence through specialized consulting, training, and support services.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
              <a href="#contact">Request a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
