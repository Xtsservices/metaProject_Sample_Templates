// src/components/bloodbank/BloodBankHeader.tsx
import { useState } from 'react';
import { Heart, Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BloodBankHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/bloodbank2' },
    { name: 'About', path: '/bloodBank2/about' },
    { name: 'Donate', path: '/bloodbank2/donate' },
    { name: 'Find Blood', path: '/bloodBank2/search' },
    // { name: 'Blog', path: '/bloodbank2/blog' },
    { name: 'Contact', path: '/bloodbank2/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>Emergency Blood Need? Call Now</span>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/bloodbank" className="flex items-center gap-3">
            <div className="bg-red-600 p-3 rounded-full">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-red-600">Blood Bank</h1>
              <p className="text-xs text-gray-600">Saving Lives Together</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Donate CTA */}
          <Link
            to="/bloodbank/donate"
            className="hidden md:block bg-red-600 text-white px-6 py-2.5 rounded-full hover:bg-red-700 transition-colors font-medium shadow-sm"
          >
            Donate Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-6 flex flex-col gap-4 text-center border-t pt-4">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-red-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/bloodbank/donate"
              className="bg-red-600 text-white py-3 rounded-full font-medium mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}