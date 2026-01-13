import React from 'react';
import { Smile, Heart, Clock, Shield } from 'lucide-react';

export default function Services2() {
  const services = [
    {
      icon: Smile,
      title: 'General Dentistry',
      description: 'Regular cleanings, exams, and preventive care for optimal oral health'
    },
    {
      icon: Heart,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with teeth whitening, veneers, and bonding'
    },
    {
      icon: Clock,
      title: 'Emergency Care',
      description: 'Same-day appointments for urgent dental issues and pain relief'
    },
    {
      icon: Shield,
      title: 'Implants & Crowns',
      description: 'Advanced restorative solutions for missing or damaged teeth'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide comprehensive dental care using the latest technology and techniques
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
