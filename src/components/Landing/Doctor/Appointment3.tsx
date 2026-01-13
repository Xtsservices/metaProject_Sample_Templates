import React, { useState } from 'react';
import Header from './Header3';
import Footer from './Footer3';
import { Calendar, Clock, User, FileText } from 'lucide-react';

const Appointment: React.FC = () => {
  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    date: '', 
    time: '', 
    service: '', 
    symptoms: '',
    insurance: '',
    referral: 'no'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: integrate booking API later
    alert('Appointment request submitted successfully! Our team will contact you within 24 hours to confirm your appointment.');
  };

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <>
      <Header />
      <div className="bg-white pt-32">
        <section className="py-20 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-slate-900" />
              <h1 className="text-4xl font-bold text-slate-900">Schedule Your Consultation</h1>
            </div>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Book an appointment with Dr. Michael Johnson for expert orthopedic care. We'll work together to develop a personalized treatment plan for your condition.
            </p>
          </div>

          {/* Appointment Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <User className="w-8 h-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Expert Care</h3>
              <p className="text-slate-600 text-sm">Board-certified orthopedic surgeon with 15+ years experience</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Quick Scheduling</h3>
              <p className="text-slate-600 text-sm">Same-day and next-day appointments often available</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <FileText className="w-8 h-8 text-slate-900 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Comprehensive Evaluation</h3>
              <p className="text-slate-600 text-sm">Thorough assessment and personalized treatment plan</p>
            </div>
          </div>

          {/* Appointment Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Patient Information</h2>
            
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                <input 
                  name="firstName" 
                  value={form.firstName} 
                  onChange={handleChange} 
                  placeholder="Enter your first name" 
                  className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                <input 
                  name="lastName" 
                  value={form.lastName} 
                  onChange={handleChange} 
                  placeholder="Enter your last name" 
                  className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <input 
                  name="email" 
                  type="email"
                  value={form.email} 
                  onChange={handleChange} 
                  placeholder="Enter your email" 
                  className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                <input 
                  name="phone" 
                  type="tel"
                  value={form.phone} 
                  onChange={handleChange} 
                  placeholder="Enter your phone number" 
                  className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                  required 
                />
              </div>
            </div>

            {/* Appointment Details */}
            <h3 className="text-xl font-bold text-slate-900 mb-4">Appointment Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date *</label>
                <input 
                  name="date" 
                  type="date" 
                  value={form.date} 
                  onChange={handleChange} 
                  className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time *</label>
                <select 
                  name="time" 
                  value={form.time} 
                  onChange={handleChange} 
                  className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                  required
                >
                  <option value="">Select preferred time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed *</label>
              <select 
                name="service" 
                value={form.service} 
                onChange={handleChange} 
                className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                required
              >
                <option value="">Select service type</option>
                <option>Joint Replacement Consultation</option>
                <option>Sports Medicine Evaluation</option>
                <option>Spine Surgery Consultation</option>
                <option>Arthroscopic Procedure Consultation</option>
                <option>General Orthopedic Assessment</option>
                <option>Second Opinion</option>
                <option>Post-Surgical Follow-up</option>
                <option>Physical Therapy Evaluation</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Insurance Provider</label>
              <input 
                name="insurance" 
                value={form.insurance} 
                onChange={handleChange} 
                placeholder="Enter your insurance provider (optional)" 
                className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Do you have a physician referral?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="referral" 
                    value="yes" 
                    checked={form.referral === 'yes'} 
                    onChange={handleChange} 
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="referral" 
                    value="no" 
                    checked={form.referral === 'no'} 
                    onChange={handleChange} 
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Describe Your Symptoms or Condition</label>
              <textarea 
                name="symptoms"
                value={form.symptoms} 
                onChange={handleChange} 
                placeholder="Please describe your symptoms, pain level, when it started, and any relevant details..." 
                className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                rows={4}
              />
            </div>

            {/* Terms and Submit */}
            <div className="mb-6">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" required />
                <span className="text-sm text-slate-600">
                  I agree to the privacy policy and consent to being contacted by OrthoExpert regarding my appointment. I understand that this is a request and final scheduling will be confirmed by phone.
                </span>
              </label>
            </div>

            <div className="flex justify-end">
              <button 
                type="submit" 
                className="px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all"
              >
                Request Appointment
              </button>
            </div>
          </form>

          {/* Additional Information */}
          <div className="mt-12 bg-slate-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What to Bring to Your Appointment</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">Photo ID and insurance card</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">List of current medications</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">Previous imaging studies (X-rays, MRI)</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">Medical history and physician notes</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">Completed intake forms (if provided)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  <span className="text-slate-700">Questions about your condition</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;
