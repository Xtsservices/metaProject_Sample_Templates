import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/hospital" className="text-2xl font-bold mb-4 block">
              Astra
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Expert dental care in a comfortable environment. We provide comprehensive dental services for the whole family.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/hospital" className="text-slate-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hospital#about" className="text-slate-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/hospital#services" className="text-slate-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/hospital#contact" className="text-slate-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/hospital#services" className="text-slate-400 hover:text-white transition">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/hospital#services" className="text-slate-400 hover:text-white transition">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link to="/hospital#services" className="text-slate-400 hover:text-white transition">
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link to="/hospital#services" className="text-slate-400 hover:text-white transition">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link to="/hospital#services" className="text-slate-400 hover:text-white transition">
                  Preventive Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  123 Main Street<br />
                  San Francisco, CA 94102
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:5551234567" className="text-slate-400 hover:text-white transition">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@astradental.com" className="text-slate-400 hover:text-white transition">
                  info@astradental.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Office Hours</h4>
              <p className="text-slate-400 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="max-w-2xl">
            <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-slate-400 mb-4">Get dental tips, special offers, and updates delivered to your inbox.</p>
            <form className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 text-white placeholder-slate-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Astra Dental Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;