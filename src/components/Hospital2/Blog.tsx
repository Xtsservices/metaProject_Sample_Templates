import React from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      title: 'Get the Home care and nursing service',
      description: 'Professional nursing services bring expert care right to your home. Learn about our comprehensive homecare programs and how they can improve your health outcomes.',
      icon: '🏥'
    },
    {
      title: 'Diabetes & blood pressure check up',
      description: 'Regular monitoring is essential for managing chronic conditions. Our specialists provide detailed check-ups and personalized treatment plans.',
      icon: '💉'
    },
    {
      title: 'Online Health care treatment Facilities',
      description: 'Access quality healthcare from the comfort of your home. Our telemedicine services connect you with experts for consultations and follow-ups.',
      icon: '💻'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Our Articles About Health</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay informed with our latest health tips and medical insights
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="bg-gradient-to-r from-red-600 to-red-500 h-32 flex items-center justify-center">
                <span className="text-5xl">{article.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <button className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
