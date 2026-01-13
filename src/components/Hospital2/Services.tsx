import React from 'react';
import { Stethoscope, Home, AlertCircle, Smile, Pill, Heart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: AlertCircle,
      title: 'Emergency Service',
      description: 'Round the clock emergency care with expert physicians and advanced equipment'
    },
    {
      icon: Home,
      title: 'Homecare Visit',
      description: 'Professional healthcare services delivered to your home for convenience and comfort'
    },
    {
      icon: Smile,
      title: 'Dental',
      description: 'Comprehensive dental care including preventive, cosmetic, and restorative services'
    },
    {
      icon: Stethoscope,
      title: 'Medical Check',
      description: 'Thorough medical examinations and health screenings for preventive care'
    },
    {
      icon: Pill,
      title: 'Internal Medicine',
      description: 'Specialized care for internal diseases and complex health conditions'
    },
    {
      icon: Heart,
      title: 'Critical Care',
      description: 'Intensive care unit with advanced life support and monitoring systems'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Common Specialties</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide comprehensive healthcare services across multiple specialties
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <Icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-red-600 font-semibold hover:text-red-700">Read More →</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
