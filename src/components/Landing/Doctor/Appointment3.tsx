import React, { useState } from 'react';
import Header from './Header3';
import Footer from './Footer3';

const Appointment: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', service: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: integrate booking API later
    alert('Appointment request submitted — implement API integration');
  };

  return (
    <>
      <Header />
      <div className="bg-white pt-32">
        <section className="py-20 max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-slate-600 mb-8">Select a service and preferred date/time. We'll contact you to confirm.</p>
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-8 space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="w-full p-3 border rounded" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded" required />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full p-3 border rounded" required />
            <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full p-3 border rounded" required />
            <select name="service" value={form.service} onChange={handleChange} className="w-full p-3 border rounded" required>
              <option value="">Select service</option>
              <option>General Dentistry</option>
              <option>Cosmetic Dentistry</option>
              <option>Teeth Whitening</option>
              <option>Dental Implants</option>
              <option>Orthodontics</option>
              <option>Emergency Care</option>
            </select>
            <div className="flex justify-end">
              <button type="submit" className="px-6 py-3 bg-teal-600 text-white rounded">Request Appointment</button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;
