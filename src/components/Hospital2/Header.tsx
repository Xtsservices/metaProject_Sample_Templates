import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-red-600">MedHealth</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-gray-700 hover:text-red-600 transition">Home</a>
          <a href="#about" className="text-gray-700 hover:text-red-600 transition">About</a>
          <a href="#services" className="text-gray-700 hover:text-red-600 transition">Services</a>
          <a href="#doctors" className="text-gray-700 hover:text-red-600 transition">Doctors</a>
          <a href="#testimonials" className="text-gray-700 hover:text-red-600 transition">Testimonials</a>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2">
            <Phone size={18} /> Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 px-6 py-4 border-t">
          <a href="#home" className="block py-2 text-gray-700 hover:text-red-600">Home</a>
          <a href="#about" className="block py-2 text-gray-700 hover:text-red-600">About</a>
          <a href="#services" className="block py-2 text-gray-700 hover:text-red-600">Services</a>
          <a href="#doctors" className="block py-2 text-gray-700 hover:text-red-600">Doctors</a>
          <a href="#testimonials" className="block py-2 text-gray-700 hover:text-red-600">Testimonials</a>
          <button className="w-full bg-red-600 text-white px-6 py-2 rounded-lg mt-4">Book Appointment</button>
        </div>
      )}
    </header>
  );
}
