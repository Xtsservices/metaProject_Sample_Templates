// src/components/pharmacy/PharmacyAbout.tsx  (or rename to AboutUs.tsx if you prefer)

import { Shield, Award, Heart, Clock, Users, CheckCircle } from 'lucide-react';
import PharmacyHeader from './PharmacyHeader'; // your shared header component
import PharmacyFooter from './PharmacyFooter'; // your shared footer component

export default function PharmacyAbout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PharmacyHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-teal-800 via-teal-900 to-blue-950 text-white overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About PharmaCare
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-teal-100 opacity-90">
              Your trusted partner in health & wellness since 2018
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Journey
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2018 with a simple vision: <strong>make quality healthcare accessible to everyone</strong>, 
                  PharmaCare started as a small neighborhood pharmacy in Hyderabad.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we have grown into one of the most trusted online pharmacies in India — 
                  delivering authentic medicines, wellness products, and healthcare essentials 
                  to thousands of happy customers every month.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  What hasn't changed is our commitment to <strong>trust</strong>, <strong>speed</strong>, and <strong>care</strong>.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* You can replace with real image later */}
                <img
                  src="https://images.unsplash.com/photo-1587854691338-9e8b3e5e9f2d?auto=format&fit=crop&w=1200&q=80"
                  alt="Friendly pharmacist helping customer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              What We Stand For
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "100% Authentic",
                  desc: "Every product is sourced directly from licensed manufacturers with complete quality checks",
                },
                {
                  icon: Clock,
                  title: "Lightning Fast Delivery",
                  desc: "Same-day delivery in many cities & next-day across India",
                },
                {
                  icon: Heart,
                  title: "Customer First",
                  desc: "24×7 support, easy returns, and genuine care for your well-being",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-500 group text-center"
                >
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-600 transition-colors">
                    <value.icon className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team / Trust Signals */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Trusted by Thousands
            </h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="text-5xl font-bold text-teal-600">50,000+</div>
                <p className="text-xl text-gray-700">Happy Customers</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold text-teal-600">15,000+</div>
                <p className="text-xl text-gray-700">Products Available</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold text-teal-600">4.8/5</div>
                <p className="text-xl text-gray-700">Average Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-teal-100">
              Join thousands of families who trust PharmaCare every single day.
            </p>
            <a
              href="/pharmacy"
              className="inline-block bg-white text-teal-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
            >
              Start Shopping Now →
            </a>
          </div>
        </section>
      </main>

      <PharmacyFooter />
    </div>
  );
}