import { MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import MetadevLogo from '../../../assets/MetadevLogo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">About AmCare</h3>
            <p className="text-gray-400 mb-6">
              Professional emergency medical services providing quality care 24/7 with certified paramedics.
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
              Contact Us
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Services</a></li>
              <li><a href="#" className="hover:text-white transition">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Emergency Ambulance</a></li>
              <li><a href="#" className="hover:text-white transition">ICU Ambulance</a></li>
              <li><a href="#" className="hover:text-white transition">Air Ambulance</a></li>
              <li><a href="#" className="hover:text-white transition">Patient Transport</a></li>
              <li><a href="#" className="hover:text-white transition">Medical Escort</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>123 Emergency Street<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>Emergency: 911</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <p className="text-gray-400 text-sm">
              © 2025 AmCare Ambulance Service. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Sitemap</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Powered by MetaDev */}
          <div className="border-t border-gray-700 pt-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <p className="text-xs text-gray-500">Powered by MetaDev</p>
              <img 
                src={MetadevLogo}
                alt="MetaDev Logo"
                className="h-5 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
