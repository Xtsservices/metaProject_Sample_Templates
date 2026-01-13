import React from 'react';

export default function Hero2() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Smile is Our Priority</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Comprehensive dental care with the latest technology and compassionate service
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Schedule Appointment
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
