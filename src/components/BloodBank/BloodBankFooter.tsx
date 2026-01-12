// // src/components/bloodbank/BloodBankFooter.tsx
// import { Droplet, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

// export default function BloodBankFooter() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-16">
//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-4 gap-12">
//           {/* Brand & Description */}
//           <div>
//             <div className="flex items-center space-x-3 mb-6">
//               <Droplet className="h-10 w-10 text-red-600" />
//               <span className="text-2xl font-bold text-white">LifeBlood</span>
//             </div>
//             <p className="text-gray-400 mb-8">
//               Saving lives one donation at a time. Join us in making a real difference.
//             </p>
//             <div className="flex space-x-6">
//               <Facebook className="h-7 w-7 hover:text-white transition cursor-pointer" />
//               <Instagram className="h-7 w-7 hover:text-white transition cursor-pointer" />
//               <Youtube className="h-7 w-7 hover:text-white transition cursor-pointer" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
//             <ul className="space-y-4">
//               <li><a href="#about" className="hover:text-white transition">About Us</a></li>
//               <li><a href="#donate" className="hover:text-white transition">Donate Blood</a></li>
//               <li><a href="#involved" className="hover:text-white transition">Get Involved</a></li>
//               <li><a href="#mission" className="hover:text-white transition">Our Mission</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
//             <ul className="space-y-5">
//               <li className="flex items-start space-x-4">
//                 <Phone className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
//                 <span>+1 (234) 567 89 00</span>
//               </li>
//               <li className="flex items-start space-x-4">
//                 <Mail className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
//                 <span>blood.center@email.com</span>
//               </li>
//               <li className="flex items-start space-x-4">
//                 <Clock className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
//                 <span>9:00 – 18:00<br/>Monday – Friday</span>
//               </li>
//             </ul>
//           </div>

//           {/* Locations */}
//           <div>
//             <h3 className="text-white font-bold text-lg mb-6">Donation Locations</h3>
//             <ul className="space-y-4 text-sm">
//               <li>1425 Maple Drive, Denver, CO</li>
//               <li>6789 Cedar Lane, San Diego, CA</li>
//               <li>230 Oak Street, Boston, MA</li>
//               <li>4567 Willow Avenue, Austin, TX</li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
//           © {new Date().getFullYear()} LifeBlood. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }   