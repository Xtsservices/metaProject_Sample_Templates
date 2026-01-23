import React from 'react';
import { Award } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      id: 1,
      title: 'Most Preferred Workplace for Women',
      year: '2024-2025',
      by: 'Team Marksmen',
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Best Diagnostic Centre in India',
      year: '2023',
      by: 'Healthcare Excellence Awards',
      icon: '⭐'
    },
    {
      id: 3,
      title: 'Customer Service Excellence',
      year: '2023',
      by: 'National Service Awards',
      icon: '👍'
    },
    {
      id: 4,
      title: 'Innovation in Diagnostic Technology',
      year: '2022',
      by: 'Medical Technology Forum',
      icon: '🚀'
    },
    {
      id: 5,
      title: 'Most Trusted Diagnostic Chain',
      year: '2022',
      by: 'Patient Care Association',
      icon: '💙'
    },
    {
      id: 6,
      title: 'Environmental Sustainability Award',
      year: '2021',
      by: 'Green Healthcare Initiative',
      icon: '🌱'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600">Recognized for our excellence and commitment to patient care</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {awards.map((award) => (
            <div key={award.id} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-600 hover:shadow-xl transition cursor-pointer">
              <div className="w-full h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                <span className="text-8xl">{award.icon}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{award.title}</h3>
                    <p className="text-sm text-blue-600 font-semibold mt-1">{award.by}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm font-medium mb-4">Year: {award.year}</p>
                <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications & Accreditations</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  ISO 9001:2015 Certified
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  NABL Accredited Laboratories
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  NABH Certified Centre
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  CAP Accredited
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Serving 100+ Million Lives
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  3000+ Dedicated Professionals
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  160+ Diagnostic Centres
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  450+ Corporate Partners
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
