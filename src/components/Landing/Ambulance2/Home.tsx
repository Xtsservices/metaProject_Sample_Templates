import { Link } from 'react-router-dom';
import { Phone, Clock, Shield, Heart, Users, Award, Ambulance, Stethoscope } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback2';
import Header from '../../Shared/Header';
import Footer from '../../Shared/Footer';

export function HomePage() {
  const services = [
    {
      icon: Ambulance,
      title: 'Emergency Response',
      description: 'Rapid response to emergency calls with advanced life support equipment.',
    },
    {
      icon: Heart,
      title: 'Critical Care Transport',
      description: 'Specialized transport for critical patients requiring intensive monitoring.',
    },
    {
      icon: Stethoscope,
      title: 'Medical Transport',
      description: 'Safe and comfortable non-emergency medical transportation services.',
    },
    {
      icon: Shield,
      title: 'Event Medical Coverage',
      description: 'Professional medical standby services for events and gatherings.',
    },
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Around-the-clock emergency medical services',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly trained paramedics and EMTs',
    },
    {
      icon: Award,
      title: 'Certified Service',
      description: 'Fully licensed and accredited ambulance service',
    },
  ];

  const stats = [
    { number: '15K+', label: 'Lives Saved' },
    { number: '24/7', label: 'Available' },
    { number: '50+', label: 'Medical Staff' },
    { number: '< 8 min', label: 'Avg Response Time' },
  ];

  return (
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Professional Ambulance Service You Can Trust
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Providing rapid emergency medical response and critical care transportation with
                  state-of-the-art equipment and highly trained professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:911"
                    className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call 911 Now
                  </a>
                  <Link
                    to="/contact"
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1721411480070-fcb558776d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJ1bGFuY2UlMjBlbWVyZ2VuY3klMjBtZWRpY2FsfGVufDF8fHx8MTc2ODE5NDU4NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ambulance Service"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Ambons?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We are committed to providing the highest quality emergency medical services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg mb-6">
                    <feature.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive emergency medical and transportation services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-red-600 transition-colors"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-red-600 rounded-lg mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Emergency Medical Assistance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team is ready to respond 24/7 to any medical emergency. Don't hesitate to call.
            </p>
            <a
              href="tel:911"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Emergency: 911
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
