import React from 'react';

export default function Procedures2() {
  const procedures = [
    {
      name: 'Root Canal Therapy',
      description: 'Save your tooth with our advanced endodontic treatments',
      image: '🦷'
    },
    {
      name: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter smile',
      image: '✨'
    },
    {
      name: 'Orthodontics',
      description: 'Straighten your teeth with modern braces and aligners',
      image: '📐'
    },
    {
      name: 'Dental Implants',
      description: 'Permanent solutions for missing teeth',
      image: '👑'
    },
    {
      name: 'Gum Disease Treatment',
      description: 'Comprehensive periodontal care and treatment',
      image: '🌿'
    },
    {
      name: 'Dental Fillings',
      description: 'Restore damaged teeth with aesthetic filling materials',
      image: '🔧'
    }
  ];

  return (
    <section id="procedures" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Our Procedures</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a wide range of advanced dental procedures with cutting-edge technology
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="text-6xl text-center py-8 bg-blue-50">{procedure.image}</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{procedure.name}</h3>
                <p className="text-gray-600">{procedure.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700">Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
