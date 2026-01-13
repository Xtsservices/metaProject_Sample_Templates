import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-2">Ambons Ambulance</h4>
            <p className="text-sm text-gray-300">Professional emergency medical services — available 24/7.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <div className="flex flex-col space-y-1 text-sm">
              <Link to="/ambulance2" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/ambulance2/patients" className="text-gray-300 hover:text-white">Patients</Link>
              <Link to="/ambulance2/clinicians" className="text-gray-300 hover:text-white">Clinicians</Link>
              <Link to="/ambulance2/contact" className="text-gray-300 hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-300">911 (Emergency)</p>
            <p className="text-sm text-gray-300">info@ambons.com</p>
            <p className="text-sm text-gray-300">123 Medical Center Drive</p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ambons Ambulance Service — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
