// src/pages/pharmacy/PharmacyAbout.tsx
import PharmacyHeader from '../../components/pharmacy2/PharmacyHeader2';
import PharmacyFooter from '../../components/pharmacy2/PharmacyFooter2';
import { 
  HeartPulse, Shield, Truck, Award, Users, 
  Clock, CheckCircle, ArrowRight 
} from 'lucide-react';

export default function PharmacyAbout2() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PharmacyHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About PharmaStore
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Your trusted partner in health and wellness — delivering quality medicines with care since 2018
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-medium">
                  Our Journey
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Bringing Healthcare Closer to You
                </h2>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Founded in 2018, PharmaStore was born from a simple belief: <strong>everyone deserves access to quality medicines and healthcare products</strong> — delivered conveniently, reliably, and with genuine care.
                  </p>
                  
                  <p>
                    What started as a small local pharmacy has grown into one of the most trusted online pharmacies in the region, serving thousands of families with fast delivery, authentic products, and 24/7 support.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1587854691338-9e8b3e5e9f2d?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80"
                  alt="Pharmacist team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything we do is guided by these principles
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Authenticity Guaranteed",
                  desc: "100% genuine medicines sourced directly from licensed manufacturers and distributors."
                },
                {
                  icon: Truck,
                  title: "Lightning Fast Delivery",
                  desc: "Same-day delivery in select areas and next-day across most locations."
                },
                {
                  icon: HeartPulse,
                  title: "Customer First",
                  desc: "Your health and satisfaction are our top priority — always."
                },
                {
                  icon: Award,
                  title: "Quality & Safety",
                  desc: "Every product goes through strict quality checks and is stored in temperature-controlled environments."
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  desc: "Our pharmacists and support team are available round the clock for your queries."
                },
                {
                  icon: Users,
                  title: "Community Trust",
                  desc: "Trusted by 50,000+ happy customers and growing every day."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full mb-6">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="inline-block bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-medium">
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Making Healthcare Simple, Safe & Accessible
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We exist to bridge the gap between patients and quality healthcare by providing authentic medicines, health products, and expert guidance — delivered right to your doorstep with complete transparency and care.
                </p>
              </div>

              <div className="space-y-8">
                <div className="inline-block bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-medium">
                  Our Vision
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  A Healthier Tomorrow for Every Home
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We dream of a future where no one has to compromise on health due to distance, availability, or affordability. A future where quality healthcare is just a click away — for every family, everywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience Hassle-Free Healthcare?
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Join thousands of happy customers who trust PharmaStore for all their health needs.
            </p>
            <a
              href="/pharmacy"
              className="inline-flex items-center bg-emerald-700 text-white px-10 py-5 rounded-xl text-lg font-medium hover:bg-emerald-800 transition shadow-lg"
            >
              Start Shopping Now
              <ArrowRight className="ml-3 w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <PharmacyFooter />
    </div>
  );
}