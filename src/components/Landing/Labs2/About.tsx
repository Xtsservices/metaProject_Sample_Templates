import { Target, Eye, Heart, Award } from 'lucide-react';
import { Labs2Layout } from './Layout';
import { ImageWithFallback } from '../../figma/ImagewithFallback';

export function About() {
  const values = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Compassion',
      description: 'We treat every patient with empathy, respect, and dignity.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in medical care and service.',
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Integrity',
      description: 'We maintain honesty and transparency in all our interactions.',
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: 'Innovation',
      description: 'We embrace advanced technology to improve patient outcomes.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1728474372689-c3072b79806e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzY4MjczMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Director of Cardiology',
      image: 'https://images.unsplash.com/photo-1758205307849-56d762128dbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGNsaW5pY3xlbnwxfHx8fDE3NjgyODE0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Pediatrics',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwY2FyZXxlbnwxfHx8fDE3NjgyODE0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <Labs2Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Limpid Healthcare</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare services with compassion, excellence, and innovation.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2010, Limpid Healthcare has been at the forefront of medical excellence, serving our community with dedication and compassion. What started as a small clinic has grown into a comprehensive healthcare facility, equipped with state-of-the-art technology and staffed by highly qualified medical professionals.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our journey has been marked by a commitment to patient-centered care, continuous innovation, and a deep understanding that behind every diagnosis is a person who deserves respect, empathy, and the best possible care.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve thousands of patients annually, offering a wide range of medical services from routine checkups to complex surgical procedures, all delivered with the same level of care and professionalism that has defined us since day one.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2ODI4MTQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hospital building"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality healthcare services that promote wellness, prevent disease, and restore health. We are committed to treating each patient with compassion, respect, and dignity while utilizing the latest medical advances and technology.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Eye className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading healthcare provider in the region, recognized for our clinical excellence, patient satisfaction, and innovative approach to medicine. We envision a healthier community where everyone has access to quality healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the care we provide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals leading our organization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Be a part of our mission to provide exceptional healthcare to our community.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Explore Career Opportunities
          </button>
        </div>
      </section>
    </Labs2Layout>
  );
}
