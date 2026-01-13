// src/components/bloodbank/BloodBankSearchBlood.tsx
import BloodBankHeader from '../../components/BloodBank2/BloodBankHeader';
import BloodBankFooter from '../../components/BloodBank2/BloodBankFooter';
import { useState } from 'react';
import { Search, MapPin, Phone, Mail, Clock, Droplet, AlertCircle } from 'lucide-react';

export default function BloodBankSearchBlood2() {
  const [searchParams, setSearchParams] = useState({
    bloodType: '',
    location: '',
    urgency: 'routine'
  });

  // Sample data - in real project this would come from API/database
  const bloodBanks = [
    {
      name: 'Main Blood Center - Tanuku',
      location: 'Tanuku Town',
      phone: '+91 98765 43210',
      email: 'main@bloodbank.org',
      hours: '24/7 Emergency Service',
      available: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      stockStatus: 'High'
    },
    {
      name: 'Govt Hospital Blood Bank',
      location: 'Near Govt Hospital, Tanuku',
      phone: '+91 88888 12345',
      email: 'govt@bloodbank.org',
      hours: '8:00 AM - 8:00 PM',
      available: ['A+', 'O+', 'B+', 'AB+'],
      stockStatus: 'Medium'
    },
    {
      name: 'Private Hospital Blood Bank',
      location: 'Eluru Road, Tanuku',
      phone: '+91 99999 98765',
      email: 'private@bloodbank.org',
      hours: '24/7',
      available: ['O-', 'A-', 'B-', 'AB-'],
      stockStatus: 'Low - Urgent Need'
    }
  ];

  const handleChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value
    });
  };

  const filteredBanks = bloodBanks.filter(bank => {
    if (searchParams.bloodType && !bank.available.includes(searchParams.bloodType)) {
      return false;
    }
    if (searchParams.location && !bank.location.toLowerCase().includes(searchParams.location.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <BloodBankHeader />

      <main className="flex-grow">
        {/* Hero / Page Title */}
        <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Search Blood Availability
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Find the nearest blood bank with your required blood group
            </p>
          </div>
        </section>

        {/* Search Form */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Find Blood Near You
              </h2>

              <form className="grid md:grid-cols-3 gap-6">
                {/* Blood Type */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    Blood Group
                  </label>
                  <div className="relative">
                    <Droplet className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="bloodType"
                      value={searchParams.bloodType}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    >
                      <option value="">All Blood Groups</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={searchParams.location}
                      onChange={handleChange}
                      placeholder="e.g. Tanuku, Eluru..."
                      className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={() => { /* You can add real search/filter logic here */ }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-3"
                  >
                    <Search className="w-6 h-6" />
                    SEARCH BLOOD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Available Blood Banks
            </h2>

            {filteredBanks.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBanks.map((bank, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                  >
                    <div className="bg-red-600 text-white p-6">
                      <h3 className="text-2xl font-bold">{bank.name}</h3>
                      <p className="mt-2 opacity-90">{bank.location}</p>
                    </div>

                    <div className="p-6 space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {bank.available.map(type => (
                          <span
                            key={type}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${
                              searchParams.bloodType === type
                                ? 'bg-red-600 text-white'
                                : 'bg-red-50 text-red-700'
                            }`}
                          >
                            {type}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-4 text-gray-700 text-sm">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-red-600" />
                          <span>{bank.hours}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-red-600" />
                          <span>{bank.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-red-600" />
                          <span>{bank.email}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                          bank.stockStatus === 'High' ? 'bg-green-100 text-green-700' :
                          bank.stockStatus === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          Stock: {bank.stockStatus}
                        </span>
                      </div>

                      <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition mt-4">
                        Request Blood
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Results Found
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Try changing the blood group or location. We're constantly updating availability.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Urgent Blood Requirement?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              For immediate emergency needs, please call our 24×7 helpline directly.
            </p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center bg-white text-red-700 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-lg"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Emergency: +91 98765 43210
            </a>
          </div>
        </section>
      </main>

      <BloodBankFooter />
    </div>
  );
}