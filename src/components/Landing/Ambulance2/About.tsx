import { Target, Heart, Users, Award, Shield } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback2';
import Header from '../../Shared/Header';
import Footer from '../../Shared/Footer';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We treat every patient with empathy, dignity, and respect.',
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'Committed to the highest standards of medical care and service.',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaborative approach ensuring the best outcomes for our patients.',
    },
    {
      icon: Award,
      title: 'Professionalism',
      description: 'Dedicated to maintaining the highest level of medical expertise.',
    },
  ];

  const milestones = [
    { year: '2005', event: 'Founded Ambons Ambulance Service' },
    { year: '2010', event: 'Expanded to 24/7 emergency services' },
    { year: '2015', event: 'Introduced critical care transport units' },
    { year: '2020', event: 'Achieved 15,000+ successful emergency responses' },
    { year: '2024', event: 'Expanded fleet and added advanced life support vehicles' },
  ];

  return (
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ambons</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Providing professional emergency medical services with compassion and excellence since 2005
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1722974180453-305758503804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMHBhcmFtZWRpY3N8ZW58MXx8fHwxNzY4MjkxNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Medical Team"
                  className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                />
              </div>
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-red-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To provide rapid, professional, and compassionate emergency medical services that
                    save lives and improve health outcomes. We are committed to being the most trusted
                    ambulance service in our community through excellence in patient care, continuous
                    training, and state-of-the-art equipment.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-red-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be the leading emergency medical service provider, recognized for exceptional
                    patient care, innovation in medical response, and unwavering dedication to
                    community health and safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg mb-6 mx-auto">
                    <value.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in our history</p>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">By the Numbers</h2>
              <p className="text-xl">Our commitment to excellence in numbers</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15,000+</div>
                <div className="text-lg">Emergency Responses</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg">Medical Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">20</div>
                <div className="text-lg">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">99%</div>
                <div className="text-lg">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
