import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import HospitalLanding from './components/Landing/Hospital/Landing'
import PharmacyHome from './components/pharmacy/PharmacyHome'
import PharmacyAbout from './components/pharmacy/PharmacyAbout';
import PharmacyContact from './components/pharmacy/PharmacyContact';
import PharmacyLanding from './components/pharmacy2/PharmacyLanding';
import PharmacyAbout2 from './components/pharmacy2/PharmacyAbout2';
import PharmacyContact2 from './components/pharmacy2/PharmacyContact2';
import BloodBankHome from './components/BloodBank/BloodBankHome';
import HospitalLanding2 from './components/Hospital2/HospitalLanding2';
// import BloodBankAbout from './components/BloodBank/BloodBankAbout';
// import AboutUs from './components/pharmacy/AboutUs'
import DoctorLanding2 from './components/Doctor2/DoctorLanding2';
import BloodBankHome2 from './components/BloodBank2/BloodBankHome2';
import BloodBankAbout2 from './components/BloodBank2/BloodBankAbout2';
import BloodBankDonate2 from './components/BloodBank2/BloodBankDonate2';
import BloodBankContact2 from './components/BloodBank2/BloodBankContact2';
import BloodBankBlog2 from './components/BloodBank2/BloodBankBlog2';
import BloodBankSearchBlood2 from './components/BloodBank2/BloodBankSearchBlood2';
import Layout from './components/Layout'
import PharmacyDashboard from './components/dashboards/Dashboard'
import Dashboard2 from './components/dashboards/Dashboard2'
import Dashboard3 from './components/dashboards/Dashboard3'
import Products from './components/products/Products'
import Sales from './components/sales/Sales'
import Orders from './components/orders/Orders'
import Payments from './components/payments/Payments'
import Support from './components/support/Support'
import Invoice from './components/Invoice'
import InvoiceList from './components/InvoiceList'
import LabsLanding from './components/Landing/Labs/LabsLanding'
import { Home as Labs2Home } from './components/Landing/Labs2/Home'
import { About as Labs2About } from './components/Landing/Labs2/About'
import { Patients as Labs2Patients } from './components/Landing/Labs2/Patients'
import { Pages as Labs2Pages } from './components/Landing/Labs2/Pages'
import { Contact as Labs2Contact } from './components/Landing/Labs2/Contact'
import { Clinicians as Labs2Clinicians } from './components/Landing/Labs2/Clinicians'
import { Blog as Labs2Blog } from './components/Landing/Labs2/Blog'
import AmbulanceHome from './components/Landing/Ambulance/Home'
import AmbulanceServices from './components/Landing/Ambulance/Services'
import AmbulanceTeam from './components/Landing/Ambulance/Team'
import AmbulanceContact from './components/Landing/Ambulance/Contact'
import AmbulanceAbout from './components/Landing/Ambulance/About'
import { HomePage as Ambulance2Home } from './components/Landing/Ambulance2/Home'
import { PatientsPage as Ambulance2Patients } from './components/Landing/Ambulance2/Patients'
import { PagesPage as Ambulance2Pages } from './components/Landing/Ambulance2/Pages'
import { ContactPage as Ambulance2Contact } from './components/Landing/Ambulance2/Contact'
import { CliniciansPage as Ambulance2Clinicians } from './components/Landing/Ambulance2/Clinicians'
import { BlogPage as Ambulance2Blog } from './components/Landing/Ambulance2/Blog'
import { AboutPage as Ambulance2About } from './components/Landing/Ambulance2/About'
// --- NEW: Doctor landing & pages ---
import DoctorHome from './components/Landing/Doctor/Home3'
import DoctorServices from './components/Landing/Doctor/Services3'
import DoctorAbout from './components/Landing/Doctor/About3'
import DoctorContact from './components/Landing/Doctor/Contact3'         // new
import DoctorAppointment from './components/Landing/Doctor/Appointment3' // new
import './App.css'
import Header from './components/Header'



function App() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Router>
      <Routes>
        {/* Landing Page - Role Selection (No Layout) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/labs" element={<LabsLanding />} />
        <Route path="/labs2" element={<Labs2Home />} />
        <Route path="/labs2/about" element={<Labs2About />} />
        <Route path="/labs2/patients" element={<Labs2Patients />} />
        <Route path="/labs2/pages" element={<Labs2Pages />} />
        <Route path="/labs2/contact" element={<Labs2Contact />} />
        <Route path="/labs2/clinicians" element={<Labs2Clinicians />} />
        <Route path="/labs2/blog" element={<Labs2Blog />} />
        <Route path="/hospital" element={<HospitalLanding />} />

        {/* Ambulance (existing) */}
        <Route path="/ambulance">
          <Route index element={<AmbulanceHome />} />
          <Route path="/ambulance/services" element={<AmbulanceServices />} />
          <Route path="/ambulance/team" element={<AmbulanceTeam />} />
          <Route path="/ambulance/contact" element={<AmbulanceContact />} />
          <Route path="/ambulance/about" element={<AmbulanceAbout />} />
        </Route>

        {/* Ambulance2 (new) */}
        <Route path="/ambulance2">
          <Route index element={<Ambulance2Home />} />
          <Route path="/ambulance2/patients" element={<Ambulance2Patients />} />
          <Route path="/ambulance2/pages" element={<Ambulance2Pages />} />
          <Route path="/ambulance2/contact" element={<Ambulance2Contact />} />
          <Route path="/ambulance2/clinicians" element={<Ambulance2Clinicians />} />
          <Route path="/ambulance2/blog" element={<Ambulance2Blog />} />
          <Route path="/ambulance2/about" element={<Ambulance2About />} />
        </Route>

        {/* Pharmacy (existing) */}
        <Route path="/pharmacy">
          <Route index element={<PharmacyHome />} />
          <Route path="/pharmacy/about-us" element={<PharmacyAbout />} />
         <Route path="/pharmacy/contact" element={<PharmacyContact />} />
        </Route>
        <Route path="/pharmacy2" element={<PharmacyLanding />} />
        <Route path="/pharmacy2/About" element={<PharmacyAbout2 />} />
        <Route path="/pharmacy2/contact" element={<PharmacyContact2/>} />
        

        {/* --- NEW: Doctor landing (mirror ambulance style) --- */}
        <Route path="/doctor">
          <Route index element={<DoctorHome />} />
          <Route path="/doctor/services" element={<DoctorServices />} />
          <Route path="/doctor/about" element={<DoctorAbout />} />
          <Route path="/doctor/contact" element={<DoctorContact />} />
          <Route path="/doctor/appointment" element={<DoctorAppointment />} />
          {/* add more if needed */}
        </Route>
        <Route path="/bloodbank" >
        <Route index  element={<BloodBankHome/>} />
        {/* <Route path="/bloodbank/about" element={<BloodBankAbout />} /> */}
        </Route>
        <Route path="/bloodBank2" element={<BloodBankHome2 />} />
        <Route path="/bloodBank2/about" element={<BloodBankAbout2 />} />
        <Route path="/bloodBank2/Donate" element={<BloodBankDonate2 />} />
        <Route path="/bloodBank2/contact" element={<BloodBankContact2 />} />
        {/* <Route path="/bloodBank2/contact" element={<BloodBankContact2 />} /> */}
        <Route path="/bloodBank2/Blog" element={<BloodBankBlog2 />} />
        <Route path="/bloodBank2/search" element={<BloodBankSearchBlood2/>} />

        <Route path="/DoctorLanding2" element={<DoctorLanding2/>} />
        <Route path="/hospitalLanding2" element={<HospitalLanding2/>} />

        {/* All Dashboard Routes with Layout */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/dashboard" element={<PharmacyDashboard />} />
              <Route path="/dashboard2" element={<Dashboard2 />} />
              <Route path="/dashboard3" element={<Dashboard3 />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/invoices" element={<Invoice />} />
              <Route path="/invoice-list" element={<InvoiceList />} />
              <Route path="/support" element={<Support />} />
              <Route path="/users" element={<div className="p-6"><h1 className="text-2xl font-bold">Users Page</h1></div>} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/reports" element={<div className="p-6"><h1 className="text-2xl font-bold">Reports Page</h1></div>} />
              <Route path="/settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings Page</h1></div>} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App