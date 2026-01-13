import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';

export default function Appointment2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    alert('Thank you for booking! We will confirm your appointment shortly.');
    setFormData({ name: '', email: '', phone: '', date: '', time: '', service: '' });
  };

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Book an Appointment</h2>
        <p className="text-center text-gray-600 mb-12">
          Schedule your dental visit at your convenience
        </p>

        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <User size={18} /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <Mail size={18} /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <Phone size={18} /> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="(555) 123-4567"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                required
              >
                <option value="">Select a service</option>
                <option value="general">General Dentistry</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="implants">Implants</option>
                <option value="emergency">Emergency Care</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <Calendar size={18} /> Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <Clock size={18} /> Preferred Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                required
              >
                <option value="">Select a time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
