import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Robert Fox',
      role: 'Patient',
      rating: 5,
      text: 'The care and attention I received at MedHealth was exceptional. The staff was professional and compassionate. Highly recommended!'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Patient',
      rating: 5,
      text: 'Outstanding healthcare experience. The doctors are highly skilled and the facilities are state-of-the-art. I trust them completely.'
    },
    {
      name: 'David Lee',
      role: 'Patient',
      rating: 5,
      text: 'Best hospital in the city! The emergency team saved my life. Forever grateful for their expertise and dedication.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Our Customers & Clients</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          4.9 Overall Rating, based on 3500+ Reviews | 99% Positive Reviews
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 rounded-lg p-8 text-center">
          <p className="text-4xl font-bold text-red-600 mb-2">4.9</p>
          <p className="text-gray-600 mb-4">Overall Rating, based on 3500+ Reviews</p>
          <p className="text-2xl font-semibold text-gray-800">99% Positive Review</p>
        </div>
      </div>
    </section>
  );
}
