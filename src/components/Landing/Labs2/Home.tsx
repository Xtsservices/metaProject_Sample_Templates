import { Heart, Users, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImagewithFallback';
import { Labs2Layout } from './Layout';
import { Link } from 'react-router-dom';

export function Home() {
  const services = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Cardiology',
      description: 'Expert heart care with state-of-the-art technology and compassionate specialists.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Pediatrics',
      description: 'Comprehensive healthcare for children from infancy through adolescence.',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Neurology',
      description: 'Advanced neurological care for brain and nervous system conditions.',
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency care with highly trained medical professionals.',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Doctors' },
    { number: '10K+', label: 'Happy Patients' },
    { number: '25+', label: 'Awards Won' },
  ];

  return (
    <Labs2Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your Health, Our Priority
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Experience exceptional healthcare with compassionate professionals dedicated to your well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/labs2/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/labs2/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1728474372689-c3072b79806e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzY4MjczMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Medical professionals"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services tailored to meet your needs with advanced medical technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjgyMjE0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Medical technology"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Limpid Healthcare?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We combine cutting-edge medical technology with compassionate care to provide the best possible healthcare experience.
              </p>
              <ul className="space-y-4">
                {[
                  'Experienced and certified medical professionals',
                  'State-of-the-art medical equipment',
                  'Patient-centered approach to care',
                  'Comprehensive range of medical services',
                  '24/7 emergency care availability',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/labs2/about"
                className="inline-flex items-center gap-2 mt-8 text-blue-600 font-semibold hover:gap-4 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: COVID19 Testing & Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">COVID19 Testing Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing solutions for accurate, timely detection and prevention, ensuring public health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Get My Result</div>
              <p className="text-gray-600 mb-4">Receive secure, easy access to your COVID19 test results.</p>
              <Link to="/labs2/contact" className="text-blue-600 font-medium">Learn More →</Link>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Find A Location</div>
              <p className="text-gray-600 mb-4">Locate nearest collection points for fast and convenient testing.</p>
              <Link to="/labs2/pages" className="text-blue-600 font-medium">Find A Location →</Link>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">24×7 Customer Support</div>
              <p className="text-gray-600 mb-4">Round-the-clock assistance for test booking and result queries.</p>
              <Link to="/labs2/contact" className="text-blue-600 font-medium">Contact Support →</Link>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 text-center mb-12">
            <div>
              <div className="text-4xl font-bold text-blue-600">3K+</div>
              <div className="text-gray-600">Tests & Patients Served in 2024</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">70%</div>
              <div className="text-gray-600">Client Satisfaction Rate for Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">1K+</div>
              <div className="text-gray-600">Free Patient Visits Done Each Month</div>
            </div>
          </div>

          {/* About mini */}
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <div className="md:flex md:gap-8 items-center">
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold mb-3">Limpid Clinical Pathology Laboratories</h3>
                <p className="text-gray-600 mb-4">
                  Limpid Clinical Pathology Laboratories has been a trusted leader in diagnostic services,
                  “Excellence in Sub-Specialty Pathology”. Our team comprises experienced pathologists, laboratory scientists,
                  and support staff who work collaboratively to provide a seamless, patient-centered experience.
                </p>
                <Link to="/labs2/about" className="text-blue-600 font-semibold">More About Us →</Link>
              </div>
              <div className="md:flex-1 grid grid-cols-2 gap-4 mt-6 md:mt-0">
                <ImageWithFallback src="https://via.placeholder.com/320x180" alt="Image570" className="rounded-lg" />
                <ImageWithFallback src="https://via.placeholder.com/320x180" alt="Lead by passionate experts" className="rounded-lg" />
                <ImageWithFallback src="https://via.placeholder.com/320x180" alt="97% satisfaction rate" className="rounded-lg" />
                <ImageWithFallback src="https://via.placeholder.com/320x180" alt="Affordable health packages" className="rounded-lg" />
              </div>
            </div>
          </div>

          {/* Popular Services */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Popular Laboratory Test Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {['Complete Blood Count', 'Lipid Profile', 'COVID19 PCR', 'Thyroid Panel', 'Liver Function', 'Diabetes Panel'].map((s, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="font-semibold text-gray-900 mb-2">{s}</div>
                  <p className="text-sm text-gray-600">Accurate, fast, and reliable testing.</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Experience */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h4 className="text-xl font-bold mb-2">Laboratories technology solutions for the most complex conditions</h4>
              <p className="text-gray-600 mb-4">Lead by passionate experts — world class laboratory support and advanced diagnostics.</p>
              <div className="inline-flex items-center gap-6">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div>
                  <div className="font-semibold">Years Of Experience</div>
                  <div className="text-sm text-gray-600">World class Laboratory support</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Lab Test Booking Made Simple</h4>
              <p className="text-gray-600 mb-4">The Doccure - Easy Way To Book Lab Tests Online</p>
              <Link to="/labs2/pages" className="text-blue-600 font-semibold">Read More →</Link>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">From Sample to Results — Our Process Explained</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-xl font-bold text-blue-600 mb-2">01</div>
                <div className="font-semibold">Request your test kit</div>
                <p className="text-sm text-gray-600 mt-2">Place orders via our secure Physician Portal.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-xl font-bold text-blue-600 mb-2">02</div>
                <div className="font-semibold">Sample Collection</div>
                <p className="text-sm text-gray-600 mt-2">Choose home collection or visit a collection point.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-xl font-bold text-blue-600 mb-2">03</div>
                <div className="font-semibold">Analysis and Review</div>
                <p className="text-sm text-gray-600 mt-2">Skilled pathologists analyze samples with latest tech.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-xl font-bold text-blue-600 mb-2">04</div>
                <div className="font-semibold">Follow-Up and Support</div>
                <p className="text-sm text-gray-600 mt-2">Our team helps with results and next steps.</p>
              </div>
            </div>
          </div>

          {/* Collection Points */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Your Nearest Collection Point for Fast, Easy Testing</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <ImageWithFallback src="https://via.placeholder.com/480x240" alt={`Collection ${i}`} className="rounded mb-4" />
                  <div className="font-semibold">Melbourne, AUS</div>
                  <div className="text-sm text-gray-600">100 Smith Street Collingwood VIC 3065 AU</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link to="/labs2/pages" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">View Collection Points</Link>
            </div>
          </div>

          {/* Video & Packages */}
          <div className="md:flex md:gap-8 items-center mb-8">
            <div className="md:flex-1">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8 text-center">
                <div className="text-xl font-bold mb-2">Behind the Scenes</div>
                <p className="text-gray-200 mb-4">How Our Lab Ensures Accurate Results</p>
                <button className="inline-flex items-center gap-3 bg-white text-blue-800 px-6 py-3 rounded-lg">
                  Play Video
                </button>
              </div>
            </div>
            <div className="md:flex-1">
              <h4 className="text-xl font-bold mb-2">Explore Our Top-Tier Packages</h4>
              <p className="text-gray-600 mb-4">Personalized wellness packages designed for you.</p>
              <Link to="/labs2/pages" className="text-blue-600 font-semibold">Explore Packages →</Link>
            </div>
          </div>

          {/* Blog Teasers */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Interesting Articles Updated Every Day</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/*
                { date: '29 Oct', title: 'Common Blood Tests and What They Reveal About Your Health' },
                { date: '29 Oct', title: 'The Importance of Regular Health Screenings at Every Age' },
                { date: '29 Oct', title: 'Understanding Your Lab Results — A Guide to Key Health Metrics' },
              */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <div className="text-sm text-gray-500 mb-2">29 Oct</div>
                  <div className="font-semibold mb-2">Common Blood Tests and What They Reveal About Your Health</div>
                  <Link to="/labs2/blog" className="text-blue-600">Read More</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule an appointment with our expert clinicians today and take the first step towards better health.
          </p>
          <Link
            to="/labs2/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </Labs2Layout>
  );
}
