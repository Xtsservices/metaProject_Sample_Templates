// src/pages/pharmacy/PharmacyLanding.tsx
import PharmacyHeader from '../../components/pharmacy2/PharmacyHeader2';
import PharmacyFooter from '../../components/pharmacy2/PharmacyFooter2';
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  User, 
  ArrowRight, 
  Truck, 
  Shield, 
  Headphones, 
  Clock,
  Pill,
  HeartPulse,
  Baby,
  Thermometer,
  Droplet,
  Sparkles
} from 'lucide-react';

export default function PharmacyLanding() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PharmacyHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-50 to-emerald-100">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-medium">
                  #1 Trusted Pharmacy
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Trusted <span className="text-emerald-700">Online Pharmacy</span> for Every Need
                </h1>

                <p className="text-lg text-gray-600 max-w-xl">
                  Get your medicines delivered to your doorstep with quality assurance and professional care.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-emerald-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-emerald-800 transition font-medium shadow-md">
                    Shop Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-xl hover:bg-emerald-50 transition font-medium">
                    Learn More
                  </button>
                </div>

                <div className="flex flex-wrap gap-10 pt-4">
                  <div>
                    <div className="text-4xl font-bold text-emerald-700">500+</div>
                    <div className="text-gray-600">Products</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-emerald-700">50k+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-emerald-700">24/7</div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091358783-a212ec293ff3?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80"
                  alt="Pharmacist woman"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Popular Categories</h2>
              <button className="text-emerald-700 hover:underline font-medium">View All →</button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Medicines", icon: Pill, color: "blue" },
                { name: "Wellness", icon: HeartPulse, color: "pink" },
                { name: "Baby Care", icon: Baby, color: "purple" },
                { name: "Medical Devices", icon: Thermometer, color: "red" },
                { name: "Personal Care", icon: Droplet, color: "cyan" },
                { name: "Beauty", icon: Sparkles, color: "amber" },
              ].map((cat) => (
                <button
                  key={cat.name}
                  className="flex flex-col items-center gap-4 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50 hover:bg-gray-100 group"
                >
                  <div className={`bg-${cat.color}-100 text-${cat.color}-600 p-5 rounded-full group-hover:scale-110 transition-transform`}>
                    <cat.icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <button className="text-emerald-700 hover:underline font-medium">See All →</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100 group"
                >
                  <div className="relative aspect-square bg-gray-50 p-6">
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {i === 0 ? "Best Seller" : i === 2 ? "New" : ""}
                    </span>
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      -{20 + i * 5}%
                    </span>
                    <img
                      src="https://images.unsplash.com/photo-1631669969504-f35518bf96ba?w=800"
                      alt="Product"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="font-medium text-gray-900 line-clamp-2 min-h-[3rem]">
                      {i === 0 ? "Vitamin C 1000mg - Immune Support" : "Omega-3 Fish Oil 1200mg"}
                    </h3>
                    <div className="flex items-center gap-1">
                      {Array(5)
                        .fill(0)
                        .map((_, idx) => (
                          <svg
                            key={idx}
                            className={`w-4 h-4 ${idx < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 .587l3.668 7.431 8.167 1.19-5.916 5.769 1.396 8.136L12 19.897l-7.315 3.846 1.396-8.136L.165 9.208l8.167-1.19z" />
                          </svg>
                        ))}
                      <span className="text-sm text-gray-500 ml-1">(4.{8 - i})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-emerald-700">$2{9 + i * 5}.99</span>
                      <span className="text-sm text-gray-400 line-through">$3{9 + i * 5}.99</span>
                    </div>
                    <button className="w-full bg-emerald-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-800 transition">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits / Trust badges */}
        <section className="py-16 bg-emerald-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { icon: Truck, title: "Free Delivery", desc: "On orders over $50" },
                { icon: Shield, title: "Secure Payment", desc: "100% protected transactions" },
                { icon: Headphones, title: "24/7 Support", desc: "Dedicated customer service" },
                { icon: Clock, title: "Fast Processing", desc: "Same day dispatch" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="bg-white/15 p-4 rounded-xl">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-emerald-100 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PharmacyFooter />
    </div>
  );
}