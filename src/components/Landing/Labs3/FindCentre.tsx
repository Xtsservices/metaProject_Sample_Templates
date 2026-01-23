import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function FindCentre() {
  const cities = [
    { name: 'Hyderabad', centers: 45 },
    { name: 'Bengaluru', centers: 32 },
    { name: 'Gurugram', centers: 28 },
    { name: 'Kolkata', centers: 20 },
    { name: 'Pune', centers: 18 },
    { name: 'Chennai', centers: 15 }
  ];

  const popularCentres = [
    {
      city: 'Hyderabad',
      location: 'A S Rao Nagar',
      phone: '9240 222 222',
      timing: '6:30 AM - 8:00 PM'
    },
    {
      city: 'Hyderabad',
      location: 'Ameerpet',
      phone: '9240 222 222',
      timing: '6:30 AM - 8:00 PM'
    },
    {
      city: 'Bengaluru',
      location: 'Koramangala',
      phone: '080-4141 4141',
      timing: '7:00 AM - 8:00 PM'
    },
    {
      city: 'Gurugram',
      location: 'DLF Cyber City',
      phone: '124-4567 8910',
      timing: '7:00 AM - 8:00 PM'
    },
    {
      city: 'Pune',
      location: 'Kalyani Nagar',
      phone: '020-6657 1111',
      timing: '6:30 AM - 8:00 PM'
    },
    {
      city: 'Kolkata',
      location: 'Alipore',
      phone: '033-4014 0141',
      timing: '6:30 AM - 8:00 PM'
    }
  ];

  return (
    <section id="centres" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find a Centre Near You</h2>
          <p className="text-xl text-gray-600">160+ diagnostic centers across 25+ cities</p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Presence</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition cursor-pointer">
                <h4 className="text-lg font-bold text-gray-900">{city.name}</h4>
                <p className="text-sm text-gray-600 mt-2">{city.centers} Centers</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Centers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCentres.map((centre, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{centre.location}</h4>
                <p className="text-sm text-gray-600 mb-4">{centre.city}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{centre.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{centre.timing}</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="mx-auto mb-4" size={32} />
              <h4 className="text-lg font-bold mb-2">160+ Centers</h4>
              <p className="text-blue-100">Spread across India for your convenience</p>
            </div>
            <div>
              <Phone className="mx-auto mb-4" size={32} />
              <h4 className="text-lg font-bold mb-2">24/7 Support</h4>
              <p className="text-blue-100">Call us anytime for assistance</p>
            </div>
            <div>
              <Clock className="mx-auto mb-4" size={32} />
              <h4 className="text-lg font-bold mb-2">Extended Hours</h4>
              <p className="text-blue-100">Open early morning to late evening</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
