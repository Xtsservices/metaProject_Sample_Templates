import { useState } from 'react';
import { Search, Heart, Activity, Droplets, Wind, Stethoscope, Radio, Zap, ChevronDown } from 'lucide-react';

export default function BookATest() {
  const [activeTab, setActiveTab] = useState<'laboratory' | 'radiology'>('laboratory');
  const [selectedOrgan, setSelectedOrgan] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const laboratoryOrgans = [
    {
      id: 'diabetes',
      name: 'Diabetes',
      icon: Heart,
      color: 'from-red-400 to-red-600',
      tests: [
        { name: 'Fasting Plasma Glucose', price: 120 },
        { name: 'Glycated Hemoglobin (HbA1c)', price: 600 },
        { name: 'Post Lunch Glucose', price: 120 },
        { name: 'Random Plasma Glucose', price: 120 },
        { name: 'Glucose Tolerance Test', price: 350 }
      ]
    },
    {
      id: 'heart',
      name: 'Heart',
      icon: Heart,
      color: 'from-red-500 to-red-700',
      tests: [
        { name: 'Lipid Profile', price: 690 },
        { name: 'Cardiac Profile', price: 1200 },
        { name: 'Troponin Test', price: 800 },
        { name: 'BNP Test', price: 900 },
        { name: 'Homocysteine', price: 1100 }
      ]
    },
    {
      id: 'liver',
      name: 'Liver',
      icon: Activity,
      color: 'from-orange-400 to-orange-600',
      tests: [
        { name: 'Liver Function Test (LFT-A)', price: 690 },
        { name: 'Viral Hepatitis Panel', price: 1500 },
        { name: 'Liver Enzymes', price: 550 },
        { name: 'Bilirubin Test', price: 300 },
        { name: 'Hepatitis B & C Profile', price: 1200 }
      ]
    },
    {
      id: 'kidney',
      name: 'Kidney',
      icon: Droplets,
      color: 'from-blue-400 to-blue-600',
      tests: [
        { name: 'Kidney Function Test', price: 450 },
        { name: 'Creatinine', price: 260 },
        { name: 'BUN Test', price: 300 },
        { name: 'Urinalysis', price: 270 },
        { name: 'Uric Acid', price: 240 }
      ]
    },
    {
      id: 'thyroid',
      name: 'Thyroid',
      icon: Wind,
      color: 'from-cyan-400 to-cyan-600',
      tests: [
        { name: 'Thyroid Profile', price: 670 },
        { name: 'TSH (Ultrasensitive)', price: 340 },
        { name: 'Free T3 & T4', price: 600 },
        { name: 'Thyroid Antibodies', price: 800 },
        { name: 'TPO Antibody', price: 650 }
      ]
    },
    {
      id: 'blood',
      name: 'Blood',
      icon: Stethoscope,
      color: 'from-amber-400 to-amber-600',
      tests: [
        { name: 'Complete Blood Picture (CBP)', price: 390 },
        { name: 'Haemogram', price: 500 },
        { name: 'Erythrocyte Sedimentation Rate (ESR)', price: 300 },
        { name: 'Blood Clotting Profile', price: 700 },
        { name: 'Peripheral Smear', price: 450 }
      ]
    },
    {
      id: 'pregnancy',
      name: 'Pregnancy',
      icon: Heart,
      color: 'from-pink-400 to-pink-600',
      tests: [
        { name: 'Beta HCG', price: 500 },
        { name: 'Pregnancy Profile', price: 1500 },
        { name: 'Quad Screen', price: 2000 },
        { name: 'AFP', price: 800 },
        { name: 'hCG Serial', price: 600 }
      ]
    },
    {
      id: 'cancer',
      name: 'Cancer Screening',
      icon: Radio,
      color: 'from-purple-400 to-purple-600',
      tests: [
        { name: 'PSA (Prostate)', price: 900 },
        { name: 'CEA (Tumor Marker)', price: 1000 },
        { name: 'CA-19.9', price: 1100 },
        { name: 'CA-125', price: 950 },
        { name: 'Tumor Marker Panel', price: 3000 }
      ]
    }
  ];

  const radiologyServices = [
    {
      id: 'ct-scan',
      name: 'CT Scan',
      icon: Radio,
      color: 'from-indigo-400 to-indigo-600',
      description: 'Multi-slice CT scanning for detailed imaging',
      price: 5000,
      types: ['Head CT', 'Chest CT', 'Abdomen CT', 'Pelvis CT', 'Whole Body CT']
    },
    {
      id: 'mri',
      name: 'MRI Scan',
      icon: Zap,
      color: 'from-violet-400 to-violet-600',
      description: 'Advanced magnetic resonance imaging',
      price: 6000,
      types: ['Brain MRI', 'Spine MRI', 'Cardiac MRI', 'Abdominal MRI', 'Joint MRI']
    },
    {
      id: 'ultrasound',
      name: 'Ultrasound',
      icon: Radio,
      color: 'from-pink-400 to-pink-600',
      description: 'High-resolution ultrasound with color Doppler',
      price: 1500,
      types: ['Abdominal US', 'Cardiac Echo', 'Vascular US', 'Obstetric US', 'Thyroid US']
    },
    {
      id: 'xray',
      name: 'X-Ray',
      icon: Radio,
      color: 'from-green-400 to-green-600',
      description: 'Digital X-ray imaging services',
      price: 300,
      types: ['Chest X-Ray', 'Skeletal X-Ray', 'Spinal X-Ray', 'Dental X-Ray', 'Full Body']
    },
    {
      id: 'pet-ct',
      name: 'PET-CT',
      icon: Radio,
      color: 'from-red-400 to-red-600',
      description: 'Combined positron emission tomography',
      price: 15000,
      types: ['Oncology PET-CT', 'Neurology PET-CT', 'Cardiology PET-CT']
    },
    {
      id: 'mri-3t',
      name: '3T MRI',
      icon: Zap,
      color: 'from-blue-400 to-blue-600',
      description: 'Advanced 3 Tesla MRI imaging',
      price: 8000,
      types: ['High-Res Brain', 'Advanced Neuro', 'Cardiac 3T', 'Preclinical Research']
    }
  ];

  // Filter organs based on search
  const filteredOrgans = laboratoryOrgans.filter(organ =>
    organ.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    organ.tests.some(test => test.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Get tests for selected organ
  const selectedOrganData = laboratoryOrgans.find(o => o.id === selectedOrgan);
  const organTests = selectedOrganData?.tests || [];
  const filteredTests = organTests.filter(test =>
    test.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter radiology services
  const filteredServices = radiologyServices.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.types.some(type => type.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="book-test" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Diagnostic Test</h2>
          <p className="text-xl text-gray-600">Choose from laboratory tests or radiology services</p>
        </div>

        {/* Dropdown Menu */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-block">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg"
            >
              Book a Test
              <ChevronDown size={20} className={`transition transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu Items */}
            {showDropdown && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl z-50 min-w-64 border border-gray-200">
                <button
                  onClick={() => {
                    setActiveTab('laboratory');
                    setShowDropdown(false);
                    setSelectedOrgan(null);
                  }}
                  className="w-full text-left px-6 py-4 hover:bg-blue-50 font-semibold text-gray-900 border-b border-gray-100 transition flex items-center gap-3"
                >
                  <Heart size={20} className="text-red-600" />
                  Laboratory Services
                </button>
                <button
                  onClick={() => {
                    setActiveTab('radiology');
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-6 py-4 hover:bg-blue-50 font-semibold text-gray-900 transition flex items-center gap-3"
                >
                  <Radio size={20} className="text-indigo-600" />
                  Radiology Services
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search tests or services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-lg"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => {
              setActiveTab('laboratory');
              setSelectedOrgan(null);
            }}
            className={`px-8 py-3 rounded-lg font-semibold transition ${
              activeTab === 'laboratory'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
            }`}
          >
            Laboratory Tests
          </button>
          <button
            onClick={() => setActiveTab('radiology')}
            className={`px-8 py-3 rounded-lg font-semibold transition ${
              activeTab === 'radiology'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
            }`}
          >
            Radiology Services
          </button>
        </div>

        {/* Laboratory Tab */}
        {activeTab === 'laboratory' && (
          <div>
            {/* Organ Selection */}
            {!selectedOrgan ? (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Search by Organ/Body System</h3>
                  <p className="text-gray-600 mt-2">Select the organ to view available laboratory tests</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredOrgans.length > 0 ? (
                    filteredOrgans.map((organ) => {
                      const Icon = organ.icon;
                      return (
                        <button
                          key={organ.id}
                          onClick={() => setSelectedOrgan(organ.id)}
                          className="bg-white rounded-lg p-6 hover:shadow-lg transition cursor-pointer border border-gray-200 group"
                        >
                          <div className={`bg-gradient-to-br ${organ.color} p-6 rounded-lg text-white mb-4 flex justify-center group-hover:scale-110 transition transform`}>
                            <Icon size={40} />
                          </div>
                          <h4 className="font-semibold text-gray-900 text-center group-hover:text-blue-600 transition">
                            {organ.name}
                          </h4>
                        </button>
                      );
                    })
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-lg text-gray-600">No organs found matching your search.</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                {/* Tests List for Selected Organ */}
                <div className="mb-6">
                  <button
                    onClick={() => setSelectedOrgan(null)}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 mb-4"
                  >
                    ← Back to Organs
                  </button>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {laboratoryOrgans.find(o => o.id === selectedOrgan)?.name} Tests
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTests.length > 0 ? (
                    filteredTests.map((test, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition border border-gray-200"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-gray-900 flex-1">{test.name}</h4>
                          <span className="text-lg font-bold text-blue-600 ml-2">₹{test.price}</span>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium mt-4">
                          Book Now
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-lg text-gray-600">No tests found matching your search.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Radiology Tab */}
        {activeTab === 'radiology' && (
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Radiology Services</h3>
              <p className="text-gray-600 mt-2">Choose the imaging service you need</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.length > 0 ? (
                filteredServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group"
                    >
                      <div className={`bg-gradient-to-br ${service.color} p-8 text-white h-48 flex flex-col items-center justify-center group-hover:scale-105 transition transform`}>
                        <Icon size={48} className="mb-4" />
                        <h4 className="text-xl font-bold text-center">{service.name}</h4>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-blue-600">₹{service.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 font-semibold mb-3">Service Types:</p>
                        <ul className="space-y-2 mb-4">
                          {service.types.map((type, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                              {type}
                            </li>
                          ))}
                        </ul>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                          Book Now
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-600">No services found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing a Test?</h3>
          <p className="text-blue-100 mb-6">Our medical experts can help you select the right diagnostic test for your needs</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Consult with Expert
          </button>
        </div>
      </div>
    </section>
  );
}
