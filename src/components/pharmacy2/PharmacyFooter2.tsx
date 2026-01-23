// src/components/pharmacy/PharmacyFooter.tsx
import { MapPin, Phone, Mail } from 'lucide-react';
import MetadevLogo from '../../assets/MetadevLogo.jpg';

export default function PharmacyFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">About PharmaStore</h3>
            <p className="text-sm mb-6 leading-relaxed">
              Your trusted online pharmacy providing quality medicines and healthcare products with professional care and fast delivery.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  {/* You can add lucide icons: Facebook, Twitter, etc. */}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Added Contact Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", href: "/pharmacy2/About" },
                { name: "Shop", href: "/pharmacy2" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms & Conditions", href: "#" },
                { name: "Return Policy", href: "#" },
                { name: "Contact Us", href: "/pharmacy2/contact" }  // ← NEW
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3 text-sm">
              {["Medicines", "Vitamins & Supplements", "Medical Devices", "Personal Care", "Baby Care"].map((cat) => (
                <li key={cat}>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span>123 Health Street, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>support@pharmastore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          © {new Date().getFullYear()} PharmaStore. All rights reserved.
        </div>
        <div className="mt-3 flex items-center justify-center gap-2">
            <p className="text-xs text-gray-500">Powered by MetaDev</p>
            <img 
              src={MetadevLogo}
              alt="MetaDev Logo"
              className="h-16 w-auto"
            />
          </div>
      </div>
    </footer>
  );
}