// src/components/bloodbank/BloodBankAbout.tsx
import BloodBankHeader from '../../components/BloodBank2/BloodBankHeader';
import BloodBankFooter from '../../components/BloodBank2/BloodBankFooter';
import { Heart, Target, Eye, Award, Users, CheckCircle } from 'lucide-react';

export default function BloodBankAbout2() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <BloodBankHeader />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Blood Bank</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Committed to saving lives through safe blood collection and distribution since 2010
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Journey</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Established in 2010, our blood bank began as a small community initiative with one goal — 
                  to ensure no patient suffers due to lack of blood.
                </p>
                <p className="text-lg text-gray-700">
                  Today we serve hundreds of hospitals, have thousands of regular donors, 
                  and have helped save more than 3 lakh lives through safe and timely blood supply.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800"
                  alt="Medical team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide safe, adequate and timely supply of quality blood and blood components 
                  to all patients in need, while promoting voluntary blood donation.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  A community where voluntary blood donation is a way of life, and no life is lost 
                  due to non-availability of safe blood.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Compassion", desc: "We care deeply about every life we touch" },
                { icon: CheckCircle, title: "Integrity", desc: "Honesty and transparency in everything we do" },
                { icon: Award, title: "Excellence", desc: "Highest standards in blood safety & service" },
              ].map((value, i) => (
                <div key={i} className="text-center bg-white p-10 rounded-2xl shadow-lg">
                  <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BloodBankFooter />
    </div>
  );
}