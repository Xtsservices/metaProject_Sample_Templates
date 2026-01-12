import React from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './Contact';

const LabsLanding: React.FC = () => {
  return (
    <div className="labs-landing">
      {/* hide child headers/footers so we can provide a single unified header/footer */}
      <style>{`.labs-children header, .labs-children footer { display: none !important; }`}</style>

      {/* Unified header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <svg className="w-10 h-10 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 21h10" /><circle cx="12" cy="7" r="4" /></svg>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Diagnostic Laboratory</h1>
                <p className="text-xs text-gray-500">WordPress Theme</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/labs" className="text-gray-600 hover:text-teal-600 transition">Home</a>
              <a href="#about-us" className="text-gray-600 hover:text-teal-600 transition">About</a>
              <a href="#services" className="text-gray-600 hover:text-teal-600 transition">Services</a>
              <a href="#contact-us" className="text-gray-600 hover:text-teal-600 transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* mount the page components — their internal header/footer are hidden via .labs-children */}
      <main className="labs-children">
        <section id="home"><Home /></section>
        <section id="about-us"><AboutUs /></section>
        <section id="services"><Services /></section>
        <section id="contact-us"><ContactUs /></section>
      </main>

      {/* optional unified footer (child footers already hidden) */}
      <footer className="bg-gray-900 text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          © 2025 Laboratory All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LabsLanding;
