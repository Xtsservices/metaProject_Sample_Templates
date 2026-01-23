import React from 'react';
import { Award, Users, Building2, MapPin, CheckCircle, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: '40+ Years of Legacy',
      description: 'Over four decades of trust and excellence in diagnostic services'
    },
    {
      icon: Users,
      title: '3000+ Professionals',
      description: 'Including 300+ specialized and super-specialized experts'
    },
    {
      icon: CheckCircle,
      title: '100+ Million Lives',
      description: 'We have served and earned trust from millions across India'
    },
    {
      icon: Building2,
      title: 'ISO & NABL Certified',
      description: 'Accredited with ISO 9001:2015 and NABL certifications'
    },
    {
      icon: MapPin,
      title: '25+ Cities',
      description: '160+ diagnostic centers across 6 states'
    },
    {
      icon: TrendingUp,
      title: '450+ Corporate Partners',
      description: 'Trusted by leading organizations across India'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Vijaya Diagnostic Centre?</h2>
          <p className="text-xl text-gray-600">Built on trust, backed by expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100 hover:shadow-lg transition">
                <Icon className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Promise to You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Accuracy & Precision</h4>
              <p className="text-blue-100 leading-relaxed">
                Every test is conducted with meticulous care and handled by our expert team. Your health is our top priority.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Compassionate Care</h4>
              <p className="text-blue-100 leading-relaxed">
                Behind every test is a person with a story. We treat every patient with empathy and professionalism.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Accessibility</h4>
              <p className="text-blue-100 leading-relaxed">
                With 160+ centers across 25+ cities and home sample collection, we ensure care reaches you.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quality Assurance</h4>
              <p className="text-blue-100 leading-relaxed">
                ISO 9001:2015 certified and NABL accredited laboratories ensure consistent quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
