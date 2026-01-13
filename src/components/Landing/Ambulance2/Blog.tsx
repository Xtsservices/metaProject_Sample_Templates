import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback2';
import Header from '../../Shared/Header';
import Footer from '../../Shared/Footer';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Heart Attack Warning Signs',
      excerpt: 'Learn to recognize the critical symptoms that could save a life. Quick recognition and response can make all the difference.',
      image: 'https://images.unsplash.com/photo-1624004015322-a94d3aBQzePjxmN5pZ/MgKCEKXKWGX=',
      author: 'Dr. Sarah Johnson',
      date: 'January 10, 2026',
      readTime: '5 min read',
      category: 'Health Tips',
    },
    {
      id: 2,
      title: 'What to Expect During Emergency Transport',
      excerpt: 'A detailed guide on what happens when you call for an ambulance, from dispatch to hospital arrival.',
      image: 'https://images.unsplash.com/photo-1721411480070-fcb558776d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJ1bGFuY2UlMjBlbWVyZ2VuY3klMjBtZWRpY2FsfGVufDF8fHx8MTc2ODE5NDU4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Michael Chen',
      date: 'January 8, 2026',
      readTime: '7 min read',
      category: 'Emergency Services',
    },
    {
      id: 3,
      title: 'CPR Basics: Everyone Should Know',
      excerpt: 'Simple steps that can help you save a life in an emergency situation before professional help arrives.',
      image: 'https://images.unsplash.com/photo-1722974180453-305758503804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMHBhcmFtZWRpY3N8ZW58MXx8fHwxNzY4MjkxNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Emily Rodriguez',
      date: 'January 5, 2026',
      readTime: '6 min read',
      category: 'First Aid',
    },
    {
      id: 4,
      title: 'Preparing Your Home for Medical Emergencies',
      excerpt: 'Essential tips for making your home emergency-ready and ensuring quick access for emergency responders.',
      image: 'https://images.unsplash.com/photo-1624004015322-a94d3a4eff39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGVtZXJnZW5jeSUyMHJvb218ZW58MXx8fHwxNzY4Mjg4MDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Dr. James Wilson',
      date: 'January 3, 2026',
      readTime: '4 min read',
      category: 'Safety',
    },
    {
      id: 5,
      title: 'Managing Stroke Symptoms: Act F.A.S.T.',
      excerpt: 'Understanding the F.A.S.T. method for recognizing stroke symptoms and why every second counts.',
      image: 'https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODIyOTE2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Dr. Sarah Johnson',
      date: 'December 28, 2025',
      readTime: '5 min read',
      category: 'Health Tips',
    },
    {
      id: 6,
      title: 'The Importance of Regular Medical Check-ups',
      excerpt: 'How preventive care and regular check-ups can help avoid emergency situations and maintain good health.',
      image: 'https://images.unsplash.com/photo-1641723345378-a701b30b2d36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhlYWx0aGNhcmUlMjB3b3JrZXJ8ZW58MXx8fHwxNzY4MjkxNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Amanda Torres',
      date: 'December 25, 2025',
      readTime: '6 min read',
      category: 'Wellness',
    },
  ];

  const categories = ['All', 'Health Tips', 'Emergency Services', 'First Aid', 'Safety', 'Wellness'];

  return (
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Stay informed with the latest news, tips, and insights from our medical professionals
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    index === 0
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest health tips and emergency preparedness information delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
