// src/components/LandingPage.tsx

import { useNavigate } from 'react-router-dom';
import { Shield, Pill, Stethoscope, FlaskConical, Droplet, Ambulance, Building2 } from 'lucide-react';
import MetadevLogo from '../assets/MetadevLogo.jpg';
export default function LandingPage() {
  const navigate = useNavigate();

  const portals = [
    {
      title: 'Admin',
      icon: Shield,
      description: 'Manage your healthcare system',
      path: '/dashboard',
      gradient: 'from-purple-600 to-purple-800',
      textColor: 'text-purple-700'
    },
    {
      title: 'Pharmacy',
      icon: Pill,
      description: 'Browse and order medications',
      path: '/pharmacy',
      gradient: 'from-teal-600 to-teal-800',
      textColor: 'text-teal-700'
    },
    {
      title: 'Pharmacy 2',
      icon: Pill,
      description: 'Alternate pharmacy portal',
      path: '/pharmacy2',
      gradient: 'from-teal-500 to-teal-700',
      textColor: 'text-teal-600'
    },
    {
      title: 'Doctor',
      icon: Stethoscope,
      description: 'Patient care and consultations',
      path: '/doctor',
      gradient: 'from-blue-600 to-blue-800',
      textColor: 'text-blue-700'
    },
    {
      title: 'Doctor 2',
      icon: Stethoscope,
      description: 'Alternate doctor portal',
      path: '/DoctorLanding2',
      gradient: 'from-blue-500 to-blue-700',
      textColor: 'text-blue-600'
    },
    {
      title: 'Labs',
      icon: FlaskConical,
      description: 'Test results and diagnostics',
      path: '/labs',
      gradient: 'from-green-600 to-green-800',
      textColor: 'text-green-700'
    },
    {
      title: 'Labs2',
      icon: FlaskConical,
      description: 'Alternate labs portal',
      path: '/labs2',
      gradient: 'from-emerald-600 to-emerald-800',
      textColor: 'text-emerald-700'
    },
    {
      title: 'Labs3',
      icon: FlaskConical,
      description: 'Alternate labs portal',
      path: '/labs3',
      gradient: 'from-emerald-600 to-emerald-800',
      textColor: 'text-emerald-700'
    },
    {
      title: 'Blood Bank',
      icon: Droplet,
      description: 'Blood inventory management',
      path: '/bloodbank',
      gradient: 'from-red-600 to-red-800',
      textColor: 'text-red-700'
    },
    {
      title: 'Blood Bank 2',
      icon: Droplet,
      description: 'Alternate blood bank portal',
      path: '/bloodBank2',
      gradient: 'from-rose-600 to-rose-800',
      textColor: 'text-rose-700'
    },
    {
      title: 'Ambulance',
      icon: Ambulance,
      description: 'Emergency services dispatch',
      path: '/ambulance',
      gradient: 'from-orange-600 to-orange-800',
      textColor: 'text-orange-700'
    },
    {
      title: 'Ambulance2',
      icon: Ambulance,
      description: 'Alternate ambulance portal',
      path: '/ambulance2',
      gradient: 'from-rose-600 to-rose-800',
      textColor: 'text-rose-700'
    },
    {
      title: 'Hospital',
      icon: Building2,
      description: 'Hospital management system',
      path: '/hospital',
      gradient: 'from-indigo-600 to-indigo-800',
      textColor: 'text-indigo-700'
    },
    {
      title: 'Hospital 2',
      icon: Building2,
      description: 'Alternate hospital portal',
      path: '/hospitalLanding2',
      gradient: 'from-indigo-500 to-indigo-700',
      textColor: 'text-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-3">
            Welcome
          </h1>
          <p className="text-gray-400 text-lg">
            Choose your portal to continue
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portals.map((portal) => (
            <div
              key={portal.path}
              onClick={() => navigate(portal.path)}
              className={`bg-gradient-to-br ${portal.gradient} rounded-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                  <portal.icon size={48} className="text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-white">{portal.title}</h2>
                
                <p className="text-white/80 text-sm">
                  {portal.description}
                </p>
                
                <button className={`mt-4 px-6 py-2 bg-white ${portal.textColor} rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/90 hover:shadow-lg`}>
                  Open Portal
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          <p>© 2024 Healthcare Management System</p>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2">
            <p className="text-xs text-gray-500">Powered by MetaDev</p>
            <img 
              src={MetadevLogo}
              alt="MetaDev Logo"
              className="h-16 w-auto"
            />
          </div>
      </div>
    </div>
  );
}