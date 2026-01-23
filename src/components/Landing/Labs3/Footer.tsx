import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import MetadevLogo from '../../../assets/MetadevLogo.jpg';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Vijaya Diagnostic</h4>
            <p className="text-sm leading-relaxed mb-4">
              India's largest integrated diagnostic chain with 40+ years of excellence in healthcare services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:9240222222" className="hover:text-blue-400 transition">9240 222 222</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:info@vijayadiagnostic.com" className="hover:text-blue-400 transition">info@vijayadiagnostic.com</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Laboratory Tests</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Radiology Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Health Packages</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Home Sample Collection</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Imaging Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Find a Centre</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Download Report</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Book a Test</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 text-white placeholder-gray-500 rounded-l-lg focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg transition font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="font-semibold text-white mb-3">Certifications</h5>
              <div className="space-y-2 text-sm">
                <p>ISO 9001:2015 Certified</p>
                <p>NABL Accredited</p>
                <p>NABH Certified</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Business Hours</h5>
              <div className="space-y-2 text-sm">
                <p>Monday - Friday: 6:30 AM - 8:00 PM</p>
                <p>Saturday: 6:30 AM - 6:00 PM</p>
                <p>Sunday: 7:00 AM - 2:00 PM</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Our Presence</h5>
              <div className="space-y-2 text-sm">
                <p>6 States • 25+ Cities</p>
                <p>160+ Diagnostic Centres</p>
                <p>100+ Million Lives Served</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Vijaya Diagnostic Centre Limited. All Rights Reserved.</p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <p className="text-xs text-gray-500">Powered by MetaDev</p>
              <img 
                src={MetadevLogo}
                alt="MetaDev Logo"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
