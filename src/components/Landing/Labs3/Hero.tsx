import React from 'react';
import { ArrowRight, Heart, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              India's Largest Integrated Diagnostic Chain
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Over 40 years of excellence in diagnostics. Trust us with your health today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2">
                Book a Test <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Find a Centre
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500 bg-opacity-50 p-6 rounded-lg backdrop-blur">
              <Heart className="text-white mb-3" size={32} />
              <p className="text-sm">100+ Million Lives Touched</p>
            </div>
            <div className="bg-blue-500 bg-opacity-50 p-6 rounded-lg backdrop-blur">
              <Zap className="text-white mb-3" size={32} />
              <p className="text-sm">25+ Cities Across 6 States</p>
            </div>
            <div className="bg-blue-500 bg-opacity-50 p-6 rounded-lg backdrop-blur col-span-2">
              <p className="font-bold text-lg">3000+ Professionals</p>
              <p className="text-sm">300+ Specialized Radiologists & Pathologists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
