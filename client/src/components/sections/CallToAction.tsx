import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Accreditation Journey?</h2>
          <p className="text-xl mb-8">
            Schedule a free consultation to discuss your department's needs and how we can help you achieve accreditation success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <a href="#contact">Request a Consultation</a>
            </Button>
            <Button asChild variant="outline" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
              <a href="tel:6175551234">Call Us: (617) 555-1234</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
