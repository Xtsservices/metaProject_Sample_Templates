import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import HospitalLanding from './components/Landing/Hospital/Landing'
import PharmacyHome from './components/pharmacy/PharmacyHome'
import PharmacyAbout from './components/pharmacy/PharmacyAbout';
import PharmacyContact from './components/pharmacy/PharmacyContact';
import BloodBankHome from './components/BloodBank/BloodBankHome';
// import BloodBankAbout from './components/BloodBank/BloodBankAbout';
// import AboutUs from './components/pharmacy/AboutUs'
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
import AmbulanceHome from './components/Landing/Ambulance/Home'
import AmbulanceServices from './components/Landing/Ambulance/Services'
import AmbulanceTeam from './components/Landing/Ambulance/Team'
import AmbulanceContact from './components/Landing/Ambulance/Contact'
import AmbulanceAbout from './components/Landing/Ambulance/About'

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
        <Route path="/hospital" element={<HospitalLanding />} />

        {/* Ambulance (existing) */}
        <Route path="/ambulance">
          <Route index element={<AmbulanceHome />} />
          <Route path="/ambulance/services" element={<AmbulanceServices />} />
          <Route path="/ambulance/team" element={<AmbulanceTeam />} />
          <Route path="/ambulance/contact" element={<AmbulanceContact />} />
          <Route path="/ambulance/about" element={<AmbulanceAbout />} />
        </Route>

        {/* Pharmacy (existing) */}
        <Route path="/pharmacy">
          <Route index element={<PharmacyHome />} />
          <Route path="/pharmacy/about-us" element={<PharmacyAbout />} />
         <Route path="/pharmacy/contact" element={<PharmacyContact />} />
        </Route>

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