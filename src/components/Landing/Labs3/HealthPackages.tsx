import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HealthPackages() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const packages = [
    {
      id: 'basic',
      name: 'Vijaya General Health Check - Basic',
      originalPrice: '₹3900',
      discountedPrice: '₹2500',
      discount: '36%',
      parameters: 11,
      includesRadiology: true,
      description: 'Perfect for routine health screening and general wellness'
    },
    {
      id: 'advanced',
      name: 'Vijaya General Health Check - Advanced',
      originalPrice: '₹7000',
      discountedPrice: '₹4000',
      discount: '43%',
      parameters: 16,
      includesRadiology: true,
      description: 'Comprehensive health check with advanced parameters'
    },
    {
      id: 'master',
      name: 'Vijaya Master Health Checkup',
      originalPrice: '₹12280',
      discountedPrice: '₹7030',
      discount: '43%',
      parameters: 19,
      includesRadiology: true,
      description: 'Most comprehensive health checkup package'
    },
    {
      id: 'cardiac',
      name: 'Vijaya Cardiac Profile - Basic',
      originalPrice: '₹5500',
      discountedPrice: '₹3500',
      discount: '36%',
      parameters: 12,
      includesRadiology: true,
      description: 'Specialized heart health screening'
    },
    {
      id: 'diabetic',
      name: 'Vijaya Diabetic Profile - Basic',
      originalPrice: '₹3500',
      discountedPrice: '₹2200',
      discount: '37%',
      parameters: 8,
      includesRadiology: false,
      description: 'Diabetes risk assessment and monitoring'
    },
    {
      id: 'women',
      name: 'Vijaya Well-Women Check up Comprehensive',
      originalPrice: '₹6000',
      discountedPrice: '₹3800',
      discount: '37%',
      parameters: 15,
      includesRadiology: true,
      description: 'Comprehensive health check designed for women'
    }
  ];

  return (
    <section id="packages" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Health Checkup Packages</h2>
          <p className="text-xl text-gray-600">Choose the perfect health package for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-600 transition"
            >
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">{pkg.name}</h3>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold whitespace-nowrap ml-2">
                    {pkg.discount} OFF
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">{pkg.discountedPrice}</span>
                  <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Parameters:</span> {pkg.parameters}
                  </p>
                  {pkg.includesRadiology && (
                    <p className="text-sm text-gray-700 font-semibold text-blue-600">
                      ✓ Includes Radiology Tests
                    </p>
                  )}
                </div>
              </div>
              <div className="p-6">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
}
