import React from 'react';
import { Testimonial } from '../../types';
import Card from '../ui/Card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4 text-teal-600 dark:text-teal-500">
          <Quote size={24} />
        </div>
        <p className="text-gray-700 dark:text-gray-300 italic mb-6 flex-grow">
          "{testimonial.content}"
        </p>
        <div className="flex items-center">
          {testimonial.avatarUrl && (
            <img 
              src={testimonial.avatarUrl} 
              alt={testimonial.author} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
          )}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {testimonial.author}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;