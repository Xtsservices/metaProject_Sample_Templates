import React from 'react';
import { Droplet, Microscope, Activity } from 'lucide-react';

export default function PopularTests() {
  const tests = [
    {
      name: 'Fasting Plasma Glucose',
      price: '₹120',
      icon: Activity,
      category: 'Blood Test'
    },
    {
      name: 'Complete Blood Picture (CBP)',
      price: '₹390',
      icon: Droplet,
      category: 'Blood Test'
    },
    {
      name: 'Creatinine',
      price: '₹260',
      icon: Microscope,
      category: 'Blood Test'
    },
    {
      name: 'Thyroid Profile',
      price: '₹850',
      icon: Activity,
      category: 'Blood Test'
    },
    {
      name: 'Lipid Profile',
      price: '₹600',
      icon: Droplet,
      category: 'Blood Test'
    },
    {
      name: 'Complete Urine Examination',
      price: '₹200',
      icon: Microscope,
      category: 'Pathology'
    }
  ];

  return (
    <section id="tests" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Tests</h2>
          <p className="text-xl text-gray-600">Get accurate diagnostic tests at affordable prices</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test, index) => {
            const Icon = test.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="text-blue-600" size={32} />
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {test.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{test.name}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-4">{test.price}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                  Book Now
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            View All Tests
          </button>
        </div>
      </div>
    </section>
  );
}
