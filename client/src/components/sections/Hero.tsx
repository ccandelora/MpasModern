import React from 'react';
import { Button } from '@/components/ui/button';
import videoBackground from '../../assets/videos/compressed/background-compressed.mp4';

const HeroComponent = () => {
  return (
    <section className="relative bg-primary text-white overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ opacity: 0.1 }}
          aria-hidden="true"
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-6">Guiding Excellence in Massachusetts Law Enforcement</h1>
          <p className="text-xl mb-8">We help police departments navigate the accreditation process and achieve operational excellence through specialized consulting, training, and support services.</p>
          <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Call to action buttons">
            <Button asChild size="lg" variant="primary-accent">
              <a href="#services" className="focus:ring-2 focus:ring-offset-2 focus:ring-white">Explore Our Services</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
              <a href="#contact" className="focus:ring-2 focus:ring-offset-2 focus:ring-primary">Request a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero = React.memo(HeroComponent);

export default Hero;
