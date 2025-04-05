import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  initials: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {/* Star Rating */}
      <div className="flex items-center mb-4">
        <div className="text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 inline-block fill-current" />
          ))}
        </div>
      </div>
      
      {/* Quote */}
      <p className="italic mb-6">{testimonial.quote}</p>
      
      {/* Author Info */}
      <div className="flex items-center">
        <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mr-4">
          {testimonial.initials}
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.author}</h4>
          <p className="text-sm text-gray-600">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
