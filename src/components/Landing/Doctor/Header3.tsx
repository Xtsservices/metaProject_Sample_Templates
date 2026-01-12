import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, MapPin, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/doctor', label: 'Home' },
    { path: '/doctor/about', label: 'About' },
    { path: '/doctor/services', label: 'Services' },
    { path: '/doctor/contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-teal-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="hidden lg:flex items-center gap-2">
              <a href="tel:+18001234567" className="flex items-center gap-2 text-white hover:text-teal-100 transition">
                <Phone className="w-4 h-4 text-white" />
                <span>+1 (800) 123-4567</span>
              </a>
              <a href="mailto:info@dentalcare.com" className="hidden md:flex items-center gap-2 text-white hover:text-teal-100 transition">
                <Mail className="w-4 h-4 text-white" />
                <span>info@dentalcare.com</span>
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/doctor" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">DentalCare</div>
                <div className="text-xs text-teal-600">Perfect Smiles</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-teal-600'
                      : 'text-slate-700 hover:text-teal-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/doctor/appointment"
                className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
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
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-teal-600'
                        : 'text-slate-700 hover:text-teal-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/doctor/appointment"
                  className="px-6 py-3 bg-teal-600 text-white rounded-full text-center hover:bg-teal-700 transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;