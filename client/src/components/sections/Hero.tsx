import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full opacity-25 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`
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
