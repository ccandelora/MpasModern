import { useEffect } from 'react';
import { useLocation } from 'wouter';
import Meta from '@/components/ui/meta';
import Hero from '@/components/sections/Hero';
import ClientLogos from '@/components/sections/ClientLogos';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Benefits from '@/components/sections/Benefits';
import Resources from '@/components/sections/Resources';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import CallToAction from '@/components/sections/CallToAction';
import Contact from '@/components/sections/Contact';

const Home = () => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const sectionId = hash.substring(1);
      // Find the element with the matching ID
      const element = document.getElementById(sectionId);
      if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Home page specific schema
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Massachusetts Police Accreditation Solutions | Leading Experts in Police Accreditation",
    "description": "Expert consulting to help Massachusetts police departments achieve accreditation through specialized consulting, training, and support services.",
    "url": "https://mpas.boston/",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "Massachusetts Police Accreditation Solutions",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Police Accreditation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Initial Assessment",
              "description": "A comprehensive evaluation of your department's current policies, procedures, and practices compared to accreditation standards."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Policy Development",
              "description": "Creation and implementation of compliant policies tailored to your department's specific needs and community context."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Staff Training",
              "description": "Comprehensive training programs to ensure all personnel understand accreditation requirements and their role in the process."
            }
          }
        ]
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Meta 
          title="Massachusetts Police Accreditation Solutions | Leading Experts in Police Accreditation"
          description="Massachusetts' premier consulting firm helping police departments achieve accreditation through expert consulting, policy development, training, and ongoing support."
          keywords="massachusetts police accreditation, police department consulting, law enforcement standards, accreditation process, police policy development, law enforcement consulting, Massachusetts police standards"
          schema={homePageSchema}
        />
        <Hero />
        <ClientLogos />
        <About />
        <Team />
        <Services />
        <Process />
        <Benefits />
        <Resources />
        <Testimonials />
        <Blog />
        <CallToAction />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
