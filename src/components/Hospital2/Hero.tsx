import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Better Care For Your Health</h1>
        <p className="text-xl md:text-2xl mb-8 text-red-100">
          15+ Years of Excellence in Healthcare. 99% Positive Reviews from our patients.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Make Appointment
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div>
            <p className="text-4xl font-bold">15+</p>
            <p className="text-red-100">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">99%</p>
            <p className="text-red-100">Positive Review</p>
          </div>
        </div>
      </div>
    </section>
  );
}
