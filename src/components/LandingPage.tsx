// src/components/LandingPage.tsx

import { useNavigate } from 'react-router-dom';
import { Shield, Pill } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            Welcome
          </h1>
          <p className="text-gray-400 text-lg">
            Choose your portal to continue
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Admin Card */}
          <div
            onClick={() => navigate('/dashboard')}
            className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-12 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="p-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                <Shield size={64} className="text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-white">Admin</h2>
              
              <p className="text-white/80 text-lg">
                Access the complete admin dashboard to manage your pharmacy system
              </p>
              
              <button className="mt-6 px-8 py-3 bg-white text-purple-700 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/90 hover:shadow-lg">
                Open Dashboard
              </button>
            </div>
          </div>

          {/* Pharmacy Card */}
          <div
            onClick={() => navigate('/pharmacy')}
            className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-12 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="p-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                <Pill size={64} className="text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-white">Pharmacy</h2>
              
              <p className="text-white/80 text-lg">
                Browse products, place orders, and manage your pharmacy needs
              </p>
              
              <button className="mt-6 px-8 py-3 bg-white text-teal-700 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/90 hover:shadow-lg">
                Visit Store
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>© 2024 Pharmacy Management System</p>
        </div>
      </div>
    </div>
  );
}