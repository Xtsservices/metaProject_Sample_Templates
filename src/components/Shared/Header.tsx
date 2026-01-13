import { Link, NavLink } from 'react-router-dom';
import { Ambulance } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Ambulance className="w-6 h-6 text-red-600" />
            <span className="font-bold text-lg text-red-600">Ambons</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <NavLink to="/ambulance2" className={({isActive}) => isActive ? 'text-red-600 font-semibold' : 'text-gray-700'}>Home</NavLink>
            <NavLink to="/ambulance2/patients" className={({isActive}) => isActive ? 'text-red-600 font-semibold' : 'text-gray-700'}>Patients</NavLink>
            <NavLink to="/ambulance2/pages" className={({isActive}) => isActive ? 'text-red-600 font-semibold' : 'text-gray-700'}>Pages</NavLink>
            <NavLink to="/ambulance2/clinicians" className={({isActive}) => isActive ? 'text-red-600 font-semibold' : 'text-gray-700'}>Clinicians</NavLink>
            <NavLink to="/ambulance2/blog" className={({isActive}) => isActive ? 'text-red-600 font-semibold' : 'text-gray-700'}>Blog</NavLink>
            <NavLink to="/ambulance2/contact" className={({isActive}) => isActive ? 'text-red-600 font-semibold' : 'text-gray-700'}>Contact</NavLink>
            <NavLink to="/ambulance2/about" className={({isActive}) => isActive ? 'text-red-600 font-semibold' : 'text-gray-700'}>About</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
