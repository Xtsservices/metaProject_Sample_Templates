import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import MetadevLogo from '../../../assets/MetadevLogo.jpg';
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-xl text-slate-900">
                O
              </div>
              <div>
                <div className="text-xl font-bold">OrthoExpert</div>
                <div className="text-xs text-slate-400">Dr. Michael Johnson, MD</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Leading orthopedic surgeon specializing in joint replacement, sports medicine, and minimally invasive procedures. Your mobility is our mission.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/doctor" className="text-slate-400 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/doctor/about" className="text-slate-400 hover:text-white transition">About Dr. Johnson</Link>
              </li>
              <li>
                <Link to="/doctor/services" className="text-slate-400 hover:text-white transition">Our Services</Link>
              </li>
              <li>
                <Link to="/doctor/contact" className="text-slate-400 hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Specialties</h3>
            <ul className="space-y-3">
              <li className="text-slate-400">Joint Replacement</li>
              <li className="text-slate-400">Sports Medicine</li>
              <li className="text-slate-400">Spine Surgery</li>
              <li className="text-slate-400">Trauma Care</li>
              <li className="text-slate-400">Arthroscopy</li>
              <li className="text-slate-400">Physical Therapy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  456 Medical Center Drive<br />
                  Suite 300, Houston, TX 77030
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="tel:+18001234567" className="text-slate-400 hover:text-white transition">
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="mailto:info@orthopediccare.com" className="text-slate-400 hover:text-white transition">
                  info@orthopediccare.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  Mon - Fri: 8:00 AM - 5:00 PM<br />
                  Emergency: 24/7 Available
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 OrthoExpert - Dr. Michael Johnson, MD. All rights reserved.
            </p>
             <div className="mt-3 flex items-center justify-center gap-2">
            <p className="text-xs text-gray-500">Powered by MetaDev</p>
            <img 
              src={MetadevLogo}
              alt="MetaDev Logo"
              className="h-16 w-auto"
            />
          </div>
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