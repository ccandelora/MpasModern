import { benefits } from '@/data';
import { Button } from '@/components/ui/button';
import { Shield, Scale, TrendingUp, Users } from 'lucide-react';

// Map of icon names to components
const iconMap: Record<string, React.ReactNode> = {
  'shield': <Shield className="h-8 w-8" />,
  'scale': <Scale className="h-8 w-8" />,
  'trending-up': <TrendingUp className="h-8 w-8" />,
  'users': <Users className="h-8 w-8" />,
};

const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">The Benefits of Accreditation</h2>
          <p className="text-xl">
            Becoming an accredited law enforcement agency delivers substantial advantages to your department and community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-accent text-4xl mb-4">
                {iconMap[benefit.icon]}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-accent hover:bg-accent/90 text-white">
            <a href="#contact">Schedule a Discovery Call</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
