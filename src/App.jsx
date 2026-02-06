import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import FamilyDashboard from './pages/FamilyDashboard';
import CaregiverDashboard from './pages/CaregiverDashboard';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public routes with Navbar and Footer */}
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Home />
            <Footer />
          </div>
        } />
        <Route path="/services" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Services />
            <Footer />
          </div>
        } />
        <Route path="/contact" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/signup" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <SignUp />
            <Footer />
          </div>
        } />
        <Route path="/login" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Login />
          </div>
        } />
        
        {/* Dashboard routes (no Navbar/Footer) */}
        <Route path="/dashboard/family" element={<FamilyDashboard />} />
        <Route path="/dashboard/caregiver" element={<CaregiverDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;