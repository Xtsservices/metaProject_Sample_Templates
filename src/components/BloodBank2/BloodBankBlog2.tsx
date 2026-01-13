// src/components/bloodbank/BloodBankBlog.tsx
import BloodBankHeader from '../../components/BloodBank2/BloodBankHeader';
import BloodBankFooter from '../../components/BloodBank2/BloodBankFooter';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "Why Regular Blood Donation Matters",
    excerpt: "Discover the incredible health benefits of donating blood regularly and how it helps save lives.",
    author: "Dr. Ramesh Kumar",
    date: "January 10, 2026",
    category: "Health Benefits",
  },
  {
    title: "Understanding Blood Groups & Compatibility",
    excerpt: "A complete guide to blood types, who can donate to whom, and why universal donors are so important.",
    author: "Dr. Lakshmi Priya",
    date: "January 5, 2026",
    category: "Education",
  },
  // Add more posts as needed
];

export default function BloodBankBlog2() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <BloodBankHeader />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blood Bank Blog</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Latest updates, health tips, donor stories & blood donation awareness
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post, i) => (
                <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                  <div className="h-56 bg-gray-200" /> {/* Placeholder - replace with real images */}
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-red-600 bg-red-50 px-4 py-1 rounded-full">
                        {post.category}
                      </span>
                      <a href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2">
                        Read More <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BloodBankFooter />
    </div>
  );
}