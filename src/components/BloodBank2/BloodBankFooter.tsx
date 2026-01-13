// src/components/bloodbank/BloodBankFooter.tsx
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BloodBankFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-3 rounded-full">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Blood Bank</h3>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              We are committed to saving lives through safe blood collection, storage, and distribution.
              Every donation counts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/bloodbank2" className="hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link to="/bloodbank2/about" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link to="/bloodbank2/donate" className="hover:text-red-400 transition-colors">Donate Blood</Link></li>
              <li><Link to="/bloodbank2/search" className="hover:text-red-400 transition-colors">Find Blood</Link></li>
              <li><Link to="/bloodbank2/blog" className="hover:text-red-400 transition-colors">Blog</Link></li>
              <li><Link to="/bloodbank2/contact" className="hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">Donor Eligibility</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Blood Types Guide</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Donation Process</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>123 Medical Center Road,<br />Tanuku, Andhra Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span>contact@bloodbank.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          © {new Date().getFullYear()} Blood Bank Tanuku. All rights reserved.
        </div>
      </div>
    </footer>
  );
}