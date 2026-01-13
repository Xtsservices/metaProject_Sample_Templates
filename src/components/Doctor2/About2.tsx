import React from 'react';
import { Star, MapPin, Phone, Clock, Shield } from 'lucide-react';

export default function About2() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-gray-600 mb-4 text-lg">
              With over 20 years of experience, we've helped thousands of patients achieve their dream smiles.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Star className="text-yellow-400" size={24} />
                <span>Experienced and certified dentists</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-blue-600" size={24} />
                <span>Flexible appointment scheduling</span>
              </li>
              <li className="flex items-center gap-3">
                <Shield className="text-green-600" size={24} />
                <span>Advanced sterilization techniques</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-red-600" size={24} />
                <span>Conveniently located in the city center</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">117 Crown Street, London, SW11 9JP, UK</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
