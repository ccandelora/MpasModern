import Meta from '@/components/ui/meta';
import Hero from '@/components/sections/Hero';
import ClientLogos from '@/components/sections/ClientLogos';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Benefits from '@/components/sections/Benefits';
import Resources from '@/components/sections/Resources';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import CallToAction from '@/components/sections/CallToAction';
import Contact from '@/components/sections/Contact';

const Home = () => {
  return (
    <>
      <Meta />
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <Process />
      <Benefits />
      <Resources />
      <Testimonials />
      <Blog />
      <CallToAction />
      <Contact />
    </>
  );
};

export default Home;
