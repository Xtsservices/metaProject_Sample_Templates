// src/components/bloodbank/BloodBankDonate.tsx
import BloodBankHeader from '../../components/BloodBank2/BloodBankHeader';
import BloodBankFooter from '../../components/BloodBank2/BloodBankFooter';
import { useState } from 'react';
import { Calendar, MapPin, Clock, Droplet, CheckCircle, AlertCircle } from 'lucide-react';

export default function BloodBankDonate2() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bloodType: '',
    preferredDate: '',
    preferredCenter: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll contact you soon to confirm your donation slot.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <BloodBankHeader />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Donate Blood Today
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Your donation can save up to 3 lives. Be a hero.
            </p>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                  <h2 className="text-3xl font-bold text-gray-900">You Can Donate If</h2>
                </div>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    Age 18–65 years
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    Weight above 50 kg
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    Good general health
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    Not donated in last 3 months
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <AlertCircle className="w-10 h-10 text-red-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Temporary Deferral</h2>
                </div>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    Cold/flu/fever
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    Recent tattoo/piercing
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    Pregnancy or nursing
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    Recent surgery/vaccination
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Schedule Your Donation
            </h2>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-10 rounded-2xl shadow-xl space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Blood Group</label>
                  <select
                    value={formData.bloodType}
                    onChange={e => setFormData({...formData, bloodType: e.target.value})}
                    className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={e => setFormData({...formData, preferredDate: e.target.value})}
                    className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred Donation Center</label>
                <select
                  value={formData.preferredCenter}
                  onChange={e => setFormData({...formData, preferredCenter: e.target.value})}
                  className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                >
                  <option value="">Select Center</option>
                  <option value="main">Main Blood Center - Tanuku</option>
                  <option value="govt">Govt Hospital Blood Bank</option>
                  <option value="private">Private Hospital Center</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-xl font-bold text-lg transition shadow-md"
              >
                Schedule My Donation
              </button>
            </form>
          </div>
        </section>
      </main>

      <BloodBankFooter />
    </div>
  );
}