import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQs() {
  const [expandedId, setExpandedId] = useState<string | null>('q1');

  const faqs = [
    {
      id: 'q1',
      category: 'Centre Details & Locations',
      question: 'How do I locate a Vijaya Diagnostic Centre near me?',
      answer: 'You can find a center near you by visiting our "Find a Centre" page, selecting your city, and browsing all available locations with their contact details and timings.'
    },
    {
      id: 'q2',
      category: 'Centre Details & Locations',
      question: 'Are wheelchair facilities available at your centre?',
      answer: 'Yes, all our major diagnostic centres are equipped with wheelchair accessibility and supporting facilities for patients with mobility challenges.'
    },
    {
      id: 'q3',
      category: 'Centre Details & Locations',
      question: 'Can I check the operational timing of a Centre?',
      answer: 'Yes, you can check the operational timings of any centre on our website. Most centres operate from 6:30 AM to 8:00 PM with extended hours available at select locations.'
    },
    {
      id: 'q4',
      category: 'Health Checkup & Packages',
      question: 'What is the validity period for health check packages?',
      answer: 'Health check packages typically have a validity period of 6-12 months from the date of purchase. The specific validity depends on the package purchased.'
    },
    {
      id: 'q5',
      category: 'Health Checkup & Packages',
      question: 'How do I prepare for a preventive health check-up?',
      answer: 'Most health packages require 10-12 hours fasting before the test. Avoid smoking and strenuous exercise 24 hours before. Drink plenty of water the night before.'
    },
    {
      id: 'q6',
      category: 'Home Sample Collection',
      question: 'Can I get my pathology samples collected from home?',
      answer: 'Yes, we offer convenient home sample collection for blood and urine tests. Simply book an appointment online and our trained phlebotomist will visit your home.'
    },
    {
      id: 'q7',
      category: 'Home Sample Collection',
      question: 'Can I reschedule my home blood collection appointment?',
      answer: 'Yes, you can prepone or postpone your appointment through our website or mobile app, subject to availability in your area.'
    },
    {
      id: 'q8',
      category: 'Reports',
      question: 'How do I view my reports online?',
      answer: 'You can access your reports anytime by logging into your account on www.vijayadiagnostic.com using your registration details.'
    },
    {
      id: 'q9',
      category: 'Tests Information',
      question: 'Is fasting necessary before a blood test?',
      answer: 'Fasting is necessary for certain tests like glucose, lipid profile, and liver function tests. Other tests do not require fasting. Your test instructions will specify this.'
    },
    {
      id: 'q10',
      category: 'Tests Information',
      question: 'How do I prepare for a CT scan?',
      answer: 'Preparation depends on the type of CT scan. Generally, wear comfortable clothing, remove jewelry, and inform our staff about any allergies or medical conditions.'
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categories = [...new Set(faqs.map(f => f.category))];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
              {category}
            </h3>
            <div className="space-y-4">
              {faqs
                .filter(f => f.category === category)
                .map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition"
                  >
                    <button
                      onClick={() => toggleExpand(faq.id)}
                      className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 text-left">
                        {faq.question}
                      </h4>
                      <ChevronDown
                        size={24}
                        className={`text-blue-600 flex-shrink-0 transition transform ${
                          expandedId === faq.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedId === faq.id && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Get in touch with our support team for any queries or assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9240222222" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Call Us: 9240 222 222
            </a>
            <a href="mailto:info@vijayadiagnostic.com" className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
