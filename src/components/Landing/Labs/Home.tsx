import React from 'react';
import { Clock, Users, Beaker, Microscope, FlaskConical, TestTube, ChevronRight, Quote } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-16 h-16" />,
      title: 'Get Your Results in 1h',
      description: 'The modern world is in a continuous movement and people everywhere are looking for quick, safe means'
    },
    {
      icon: <FlaskConical className="w-16 h-16" />,
      title: 'Helpful Test Tips',
      description: 'The modern world is in a continuous movement and people everywhere are looking for quick, safe means'
    },
    {
      icon: <TestTube className="w-16 h-16" />,
      title: 'Tests at Home',
      description: 'The modern world is in a continuous movement and people everywhere are looking for quick, safe means'
    }
  ];

  const services = [
    { title: 'Medical research', description: 'ullamcorper suscipit lobortis nisl ut aliquip ex' },
    { title: 'Medical research', description: 'Quickly maximize timely deliverable.' },
    { title: 'Extramural Funding', description: 'ullamcorper suscipit commodo non habent' },
    { title: 'Blood Resources Program', description: 'ullamcorper suscipit commodo non habent' }
  ];

  const testimonials = [
    {
      text: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.',
      author: 'Valtteri Erkin',
      role: 'Web-Designer'
    },
    {
      text: 'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverable.',
      author: 'Anar Norwood',
      role: 'Web-Designer'
    },
    {
      text: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality.',
      author: 'Kory Junior',
      role: 'Developer'
    }
  ];

  const blogPosts = [
    { title: 'Title of Single Post with Image I', image: '🔬' },
    { title: 'title of single post with image II', image: '🧪' },
    { title: 'Title of single post with link', image: '🔍' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Beaker className="w-10 h-10 text-teal-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Diagnostic Laboratory</h1>
                <p className="text-xs text-gray-500">WordPress Theme</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/labs" className="text-gray-600 hover:text-teal-600 transition">Labs</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">About Us</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">Services</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">Gallery</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">Blog</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-700 text-white py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our Work Is More<br />Than Research
            </h2>
            <p className="text-xl mb-8 text-teal-100">
              All the medical and laboratory supplies for clinical diagnostics and research
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-teal-500">
              <div className="text-teal-600 mb-4">
                <Clock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Opening Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday – Friday 9.00-18.00</p>
                <p>Saturday 9.00-14.00</p>
              </div>
              <a href="#" className="text-teal-600 font-semibold mt-4 inline-block hover:text-teal-700">
                Read more
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-cyan-500">
              <div className="text-cyan-600 mb-4">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Professionals Area</h3>
              <p className="text-gray-600 mb-4">
                Collaboratively build backward compatible relationships …
              </p>
              <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-700">
                Read more
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500">
              <div className="text-blue-600 mb-4">
                <Microscope className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Patient Area</h3>
              <p className="text-gray-600 mb-4">
                Collaboratively build backward compatible relationships …
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How it works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mb-6 text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Invest in Future */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">We invest in the future</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverable. Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo non habent claritatem insitamconsequat duis autem facilisis at vero eros
              </p>
              <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition font-semibold">
                Read More
              </button>
              <div className="grid grid-cols-2 gap-6 mt-12">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-gray-800 mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-lg h-64 flex items-center justify-center text-6xl">
                🔬
              </div>
              <div className="bg-gradient-to-br from-cyan-200 to-blue-200 rounded-lg h-64 flex items-center justify-center text-6xl">
                🧪
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <Quote className="w-12 h-12 text-teal-300 mb-4" />
                <p className="text-teal-50 mb-6 italic leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-teal-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">View the Latest News</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhie euismod tincidunt ut laoreet dolore magna aliquam erat
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition">
                <div className="bg-gradient-to-br from-teal-400 to-cyan-500 h-48 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition">
                    {post.title}
                  </h3>
                  <a href="#" className="text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Read More <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Beaker className="w-8 h-8 text-teal-500" />
                <span className="text-xl font-bold">Laboratory</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.
              </p>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
                Get in Touch
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Business Hours</h3>
              <div className="space-y-4 text-gray-400 text-sm">
                <div>
                  <p className="font-semibold text-white mb-2">Opening Days:</p>
                  <p>Monday – Friday : 9am to 20 pm</p>
                  <p>Saturday : 9am to 17 pm</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Vacations:</p>
                  <p>All Sunday Days</p>
                  <p>All Official Holidays</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Practice Areas</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-teal-500 transition">Our Services</a></li>
                <li><a href="#" className="hover:text-teal-500 transition">Online Results</a></li>
                <li><a href="#" className="hover:text-teal-500 transition">Our Store</a></li>
                <li><a href="#" className="hover:text-teal-500 transition">Test diagnostic</a></li>
                <li><a href="#" className="hover:text-teal-500 transition">Shoplifting</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Don't miss to subscribe to our news feeds, kindly fill the form below.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-teal-500"
                />
                <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Laboratory All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition">Contact Us</a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition">About Us</a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition">Home</a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition">Blog</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;