import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
      <svg className="w-12 h-12 text-blue-600 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
      <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 italic">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
          {testimonial.author.avatar && (
            <img 
              src={testimonial.author.avatar} 
              alt={testimonial.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
        </div>
        <div className="text-left">
          <p className="font-bold text-gray-900">{testimonial.author.name}</p>
          <p className="text-gray-600">{testimonial.author.title}, {testimonial.author.company}</p>
        </div>
      </div>
    </div>
  );
} 