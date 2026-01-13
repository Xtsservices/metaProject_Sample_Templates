import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Care and Compassion are Provided in Bulk</h2>
            <p className="text-gray-600 mb-4 text-lg">
              At MedHealth, we believe that exceptional healthcare starts with understanding and compassion. Our dedicated team of medical professionals is committed to providing you and your family with the highest quality care.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              With over 15 years of experience and countless success stories, we have established ourselves as a trusted healthcare provider in the community. Our state-of-the-art facilities combined with our expert physicians ensure the best outcomes for our patients.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              More About Us
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-600 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide comprehensive, compassionate healthcare services that improve the health and well-being of individuals and families in our community.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading healthcare provider known for excellence, innovation, and patient-centered care that transforms lives.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Integrity, Compassion, Excellence, and Accountability in every interaction with our patients and community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
