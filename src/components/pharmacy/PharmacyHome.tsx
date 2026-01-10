// src/pages/pharmacy/PharmacyHome.tsx
import { useState } from 'react';
import { 
  ChevronRight, Star, Clock, Shield, Award, Download, Smartphone 
} from 'lucide-react';
import PharmacyHeader from '../../components/pharmacy/PharmacyHeader';
import PharmacyFooter from '../../components/pharmacy/PharmacyFooter';

// Types
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  discount?: number;
  rating: number;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

// Sample Data
const categories: Category[] = [
  { id: '1', name: 'Vitamins', icon: '💊' },
  { id: '2', name: 'Medicine', icon: '💉' },
  { id: '3', name: 'Supplements', icon: '🧪' },
  { id: '4', name: 'Baby Care', icon: '👶' },
  { id: '5', name: 'Skin Care', icon: '🧴' },
  { id: '6', name: 'Personal Care', icon: '🪥' },
  { id: '7', name: 'Health Devices', icon: '🩺' },
  { id: '8', name: 'First Aid', icon: '🏥' },
];

const products: Product[] = [
  { id: '1', name: 'Vitamin C 1000mg', price: 24.99, originalPrice: 34.99, image: '💊', category: 'Vitamins', discount: 29, rating: 4.5 },
  { id: '2', name: 'Pain Relief Tablets', price: 12.99, image: '💊', category: 'Medicine', rating: 4.8 },
  { id: '3', name: 'Omega-3 Fish Oil', price: 29.99, originalPrice: 39.99, image: '🧪', category: 'Supplements', discount: 25, rating: 4.6 },
  { id: '4', name: 'Baby Lotion 200ml', price: 9.99, image: '🧴', category: 'Baby Care', rating: 4.7 },
  { id: '5', name: 'Face Moisturizer', price: 19.99, image: '🧴', category: 'Skin Care', rating: 4.4 },
  { id: '6', name: 'Hand Sanitizer', price: 6.99, image: '🧴', category: 'Personal Care', rating: 4.9 },
  { id: '7', name: 'Digital Thermometer', price: 14.99, image: '🌡️', category: 'Health Devices', rating: 4.5 },
  { id: '8', name: 'First Aid Kit', price: 34.99, image: '🏥', category: 'First Aid', rating: 4.8 },
];

export default function PharmacyHome() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (productId: string) => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PharmacyHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/80 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80" 
              alt="Pharmacy Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Your Trusted Online Pharmacy for Every Need
              </h1>
              <p className="text-teal-100 text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
                Get quality medicines and healthcare products delivered to your doorstep. Fast, reliable, and secure.
              </p>
              <button className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-lg font-semibold hover:bg-yellow-500 shadow-lg text-lg transform hover:scale-105 transition">
                Shop Now
              </button>
              <div className="flex items-center justify-center space-x-8 mt-12">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-white font-medium text-lg">100% Secure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-white font-medium text-lg">Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer border border-gray-200 hover:border-teal-500"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-sm font-semibold text-gray-800">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <button className="text-teal-600 font-semibold flex items-center hover:text-teal-700">
                View All <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition relative"
                >
                  {product.discount && (
                    <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 absolute m-2 rounded z-10">
                      {product.discount}% OFF
                    </div>
                  )}
                  <div className="p-6 flex justify-center items-center h-48 bg-gray-50">
                    <span className="text-6xl">{product.image}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-2">({product.rating})</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-bold text-teal-600">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enjoy 10% off</h3>
                  <p className="text-gray-700 mb-4">your first order</p>
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
                    Shop Now
                  </button>
                </div>
                <div className="text-6xl">🎉</div>
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Amazing back to</h3>
                  <p className="text-gray-700 mb-4">school offer</p>
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
                    Shop Now
                  </button>
                </div>
                <div className="text-6xl">🎒</div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Excellence */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Medical Excellence</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round the clock customer support for all your needs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
                <p className="text-gray-600">100% secure and encrypted payment methods</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Products</h3>
                <p className="text-gray-600">Certified and authentic healthcare products</p>
              </div>
            </div>
          </div>
        </section>

        {/* Download App Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-4">Download Our Mobile App</h2>
                <p className="text-teal-100 mb-6">
                  Get the best shopping experience with our mobile app. Order medicines on the go!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-900">
                    <Download className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </button>
                  <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-900">
                    <Smartphone className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="w-48 h-96 bg-gradient-to-b from-teal-400 to-blue-400 rounded-3xl flex items-center justify-center">
                    <span className="text-6xl">📱</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PharmacyFooter />
    </div>
  );
}