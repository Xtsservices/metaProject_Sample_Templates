import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:5551234567" className="flex items-center gap-2 hover:text-blue-100 transition">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
              <a href="mailto:info@astradental.com" className="hidden sm:flex items-center gap-2 hover:text-blue-100 transition">
                <Mail className="w-4 h-4" />
                <span>info@astradental.com</span>
              </a>
            </div>
            <div className="hidden md:block text-sm">
              Monday - Friday: 9:00 AM - 6:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/hospital" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Astra
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/hospital" className="text-slate-700 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link to="/hospital#about" className="text-slate-700 hover:text-blue-600 transition font-medium">
              About
            </Link>
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition font-medium">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-slate-200 py-2">
                  <Link to="/hospital#services" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    All Services
                  </Link>
                  <Link to="/hospital#services" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Cosmetic Dentistry
                  </Link>
                  <Link to="/hospital#services" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Dental Implants
                  </Link>
                  <Link to="/hospital#services" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition">
                    Emergency Care
                  </Link>
                </div>
              )}
            </div>
            <Link to="/hospital#contact" className="text-slate-700 hover:text-blue-600 transition font-medium">
              Contact
            </Link>
          </div>

          {/* Book Appointment Button */}
          <div className="hidden lg:block">
            <Link 
              to="/hospital#booking" 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col gap-4">
              <Link to="/hospital" className="text-slate-700 hover:text-blue-600 transition font-medium">
                Home
              </Link>
              <Link to="/hospital#about" className="text-slate-700 hover:text-blue-600 transition font-medium">
                About
              </Link>
              <Link to="/hospital#services" className="text-slate-700 hover:text-blue-600 transition font-medium">
                Services
              </Link>
              <Link to="/hospital#contact" className="text-slate-700 hover:text-blue-600 transition font-medium">
                Contact
              </Link>
              <Link 
                to="/hospital#booking" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-center hover:shadow-lg transition-all duration-300 font-medium"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;