import React from 'react';
import { FileText, Heart, Stethoscope, Activity } from 'lucide-react';

export default function Blog() {
  const blogs = [
    {
      id: 1,
      icon: '❤️',
      color: 'from-red-400 to-red-500',
      title: 'TMT Test: What It Is, Procedure, and Why It Is Done?',
      category: 'Cardiology',
      excerpt: 'Racing hearts are not always a sign of excitement. Sometimes, the body tries to warn us in quiet ways.',
      date: 'Jan 15, 2024'
    },
    {
      id: 2,
      icon: '🩸',
      color: 'from-pink-400 to-pink-500',
      title: 'Understanding Your Blood Test Results',
      category: 'Pathology',
      excerpt: 'Learn how to interpret your blood test reports and what each parameter means for your health.',
      date: 'Jan 12, 2024'
    },
    {
      id: 3,
      icon: '✅',
      color: 'from-green-400 to-green-500',
      title: 'Why Regular Health Check-ups Matter',
      category: 'Wellness',
      excerpt: 'Preventive care is the best care. Discover why regular health check-ups are essential for early detection.',
      date: 'Jan 10, 2024'
    },
    {
      id: 4,
      icon: '🩺',
      color: 'from-blue-400 to-blue-500',
      title: 'Managing Diabetes Through Regular Testing',
      category: 'Diabetes Care',
      excerpt: 'Comprehensive guide to diabetes management through regular diagnostic tests and monitoring.',
      date: 'Jan 08, 2024'
    },
    {
      id: 5,
      icon: '⚙️',
      color: 'from-purple-400 to-purple-500',
      title: 'Thyroid Disorders: Detection and Management',
      category: 'Endocrinology',
      excerpt: 'Everything you need to know about thyroid testing, common disorders, and treatment options.',
      date: 'Jan 05, 2024'
    },
    {
      id: 6,
      icon: '👶',
      color: 'from-yellow-400 to-yellow-500',
      title: 'Prenatal Testing: Ensuring a Healthy Pregnancy',
      category: 'Women Health',
      excerpt: 'Guide to prenatal diagnostic tests that ensure the health and well-being of mother and baby.',
      date: 'Dec 28, 2023'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Health Blog & Resources</h2>
          <p className="text-xl text-gray-600">Stay informed with our diagnostic health insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
              <div className={`w-full h-48 bg-gradient-to-br ${blog.color} flex items-center justify-center`}>
                <span className="text-6xl">{blog.icon}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500">{blog.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
