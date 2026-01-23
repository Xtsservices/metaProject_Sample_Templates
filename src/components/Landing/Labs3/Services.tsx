import React from 'react';
import { Microscope, Radio, Stethoscope, Beaker } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'clinical-pathology',
      icon: Beaker,
      title: 'Clinical Pathology',
      description: 'Highly specialized branch in health diagnostics with expert analysis of body fluids and tissues.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'microbiology',
      icon: Microscope,
      title: 'Microbiology',
      description: 'Advanced microbial testing and analysis for infection diagnosis and treatment guidance.',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'haematology',
      icon: Radio,
      title: 'Haematology & Immuno-Haematology',
      description: 'Comprehensive blood disorder diagnosis and hematological testing services.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'serology',
      icon: Stethoscope,
      title: 'Serology',
      description: 'Specialized serological tests for infectious diseases and immune response evaluation.',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'radiology',
      icon: Radio,
      title: 'Radiology Services',
      description: 'CT Scan, MRI, Ultrasound, X-Ray, and PET-CT services with latest technology.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'advanced-imaging',
      icon: Microscope,
      title: 'Advanced Radiology',
      description: '3T MRI and other cutting-edge imaging technologies for precise diagnosis.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600">World-class diagnostic services with latest technology</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group">
                <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                  <Icon size={40} className="mb-4" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                    Know more → 
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
