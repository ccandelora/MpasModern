import React from 'react';
import { services } from '@/data';
import ServiceCard from '@/components/ui/service-card';
import { Button } from '@/components/ui/button';

const ServicesComponent = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl font-bold mb-4">Comprehensive Accreditation Services</h2>
          <p className="text-lg text-gray-600">
            We offer specialized services designed to guide your department through every stage of the accreditation process, from initial assessment to long-term maintenance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              points={service.points}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <a href="#contact">Request a Service Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Services = React.memo(ServicesComponent);

export default Services;
