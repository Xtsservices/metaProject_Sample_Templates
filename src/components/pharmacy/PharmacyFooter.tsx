// src/components/pharmacy/PharmacyFooter.tsx
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function PharmacyFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                P+
              </div>
              <span className="text-xl font-bold">PharmaCare</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for quality healthcare products and services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Medicine</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Vitamins</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Supplements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Personal Care</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-teal-500 mt-1" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-teal-500 mt-1" />
                <span className="text-gray-400">support@pharmacare.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-teal-500 mt-1" />
                <span className="text-gray-400">123 Healthcare St, Medical City, MC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PharmaCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}