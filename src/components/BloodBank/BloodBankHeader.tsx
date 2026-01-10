// // src/components/bloodbank/BloodBankHeader.tsx
// import { useState } from 'react';
// import { ShoppingCart, Search, Menu, X } from 'lucide-react';

// export default function BloodBankHeader() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Function for smooth scroll when clicking anchor links
//   const scrollToSection = (id: string) => {
//     setMobileMenuOpen(false); // close mobile menu
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between py-4">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
//               LB
//             </div>
//             <span className="text-xl font-bold text-gray-800">LifeBlood</span>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <button
//               onClick={() => scrollToSection('home')}
//               className="text-gray-700 hover:text-red-600 font-medium bg-transparent border-none cursor-pointer"
//             >
//               Home
//             </button>
//             <button
//               onClick={() => scrollToSection('about')}
//               className="text-gray-700 hover:text-red-600 font-medium bg-transparent border-none cursor-pointer"
//             >
//               About Us
//             </button>
//             {/* Add more when you have sections */}
//             {/* <button onClick={() => scrollToSection('donate')}>Donate Blood</button> */}
//             <button
//               onClick={() => scrollToSection('footer')}
//               className="text-gray-700 hover:text-red-600 font-medium bg-transparent border-none cursor-pointer"
//             >
//               Contact Us
//             </button>
//           </nav>

//           {/* Search Bar - Desktop */}
//           <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-80">
//             <Search className="w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-transparent ml-2 outline-none w-full"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center space-x-4">
//             <button className="relative">
//               <ShoppingCart className="w-6 h-6 text-gray-700" />
//             </button>
//             <button className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
//               Login
//             </button>
//             <button
//               className="md:hidden"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden py-4 border-t">
//             <nav className="flex flex-col space-y-3">
//               <button
//                 onClick={() => scrollToSection('home')}
//                 className="text-gray-700 hover:text-red-600 font-medium bg-transparent border-none cursor-pointer text-left"
//               >
//                 Home
//               </button>
//               <button
//                 onClick={() => scrollToSection('about')}
//                 className="text-gray-700 hover:text-red-600 font-medium bg-transparent border-none cursor-pointer text-left"
//               >
//                 About Us
//               </button>
//               <button
//                 onClick={() => scrollToSection('footer')}
//                 className="text-gray-700 hover:text-red-600 font-medium bg-transparent border-none cursor-pointer text-left"
//               >
//                 Contact Us
//               </button>
//             </nav>

//             {/* Mobile Search */}
//             <div className="mt-4 flex items-center bg-gray-100 rounded-lg px-4 py-2">
//               <Search className="w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="bg-transparent ml-2 outline-none w-full"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }