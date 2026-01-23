import React from 'react';
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import MetadevLogo from '../../assets/MetadevLogo.jpg';
export default function Footer2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Dr. Dental Care</h3>
            <p className="text-gray-400">
              Providing exceptional dental care with modern technology and compassionate service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition">Services</a></li>
              <li><a href="#procedures" className="text-gray-400 hover:text-blue-400 transition">Procedures</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition">About</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">General Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Cosmetic Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Implants</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Emergency</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <span className="text-gray-400">117 Crown Street, London, SW11 9JP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-400">info@drdental.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-gray-400">
            © {currentYear} Dr. Dental Care. All rights reserved.
          </p>
          
           <div className="mt-3 flex items-center justify-center gap-2">
            <p className="text-xs text-gray-500">Powered by MetaDev</p>
            <img 
              src={MetadevLogo}
              alt="MetaDev Logo"
              className="h-16 w-auto"
            />
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
