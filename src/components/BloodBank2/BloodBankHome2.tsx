// src/components/bloodbank/BloodBankHome.tsx
import BloodBankHeader from '../../components/BloodBank2/BloodBankHeader';
import BloodBankFooter from '../../components/BloodBank2/BloodBankFooter';
import { Heart, Droplet, Users, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function BloodBankHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <BloodBankHeader />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white">
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="max-w-4xl">
              <p className="text-red-200 uppercase tracking-wider font-medium mb-6">
                Be the Reason Someone Lives
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                Donate Blood.<br />
                <span className="text-white">Save Lives.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl opacity-90">
                One donation can save up to 3 lives. Your blood can give someone a second chance.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="/bloodbank/donate"
                  className="inline-flex items-center bg-white text-red-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
                >
                  Donate Now <ArrowRight className="ml-3 w-5 h-5" />
                </a>
                <a
                  href="/bloodbank/search-blood"
                  className="inline-flex items-center border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-red-700 transition"
                >
                  Find Blood
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">25,000+</div>
                <p className="text-gray-600">Active Donors</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">1,20,000+</div>
                <p className="text-gray-600">Units Collected</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">3,00,000+</div>
                <p className="text-gray-600">Lives Saved</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
                <p className="text-gray-600">Years of Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Donate */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Save Lives?
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Your one donation can help up to three people. Join our community of life-savers today.
            </p>
            <a
              href="/bloodbank/donate"
              className="inline-flex items-center bg-red-600 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-red-700 transition shadow-lg"
            >
              Become a Donor Now <ArrowRight className="ml-4 w-6 h-6" />
            </a>
          </div>
        </section>
      </main>

      <BloodBankFooter />
    </div>
  );
}