import React from 'react';

export default function Doctors() {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Chief Cardiologist',
      bio: 'Caring For The Health And Well Being Of You And Your Family'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Internal Medicine',
      bio: 'Caring For The Health And Well Being Of You And Your Family'
    },
    {
      name: 'Dr. Emily Roberts',
      specialty: 'Emergency Medicine',
      bio: 'Caring For The Health And Well Being Of You And Your Family'
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic Surgeon',
      bio: 'Caring For The Health And Well Being Of You And Your Family'
    },
    {
      name: 'Dr. Lisa Anderson',
      specialty: 'Pediatrician',
      bio: 'Caring For The Health And Well Being Of You And Your Family'
    },
    {
      name: 'Dr. David Martinez',
      specialty: 'Dentist',
      bio: 'Caring For The Health And Well Being Of You And Your Family'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Our Doctors</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet our highly qualified and experienced medical professionals
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="bg-gradient-to-r from-red-600 to-red-500 h-40 flex items-center justify-center">
                <div className="text-6xl">👨‍⚕️</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-red-600 font-semibold mb-3">{doctor.specialty}</p>
                <p className="text-gray-600">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            See All Doctors
          </button>
        </div>
      </div>
    </section>
  );
}
