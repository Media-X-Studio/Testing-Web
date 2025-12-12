import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DigitalTransformationPage } from './pages/DigitalTransformationPage';
import { EVisaPage } from './pages/solutions/EVisaPage';
import { CustomersPage } from './pages/CustomersPage';
import { ContactPage } from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/digital-transformation" element={<DigitalTransformationPage />} />
            <Route path="/solutions/evisa" element={<EVisaPage />} />
            <Route path="/solutions/national-id" element={<EVisaPage />} />
            <Route path="/solutions/training" element={<EVisaPage />} />
            <Route path="/solutions/tracking" element={<EVisaPage />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformationPage />} />
            <Route path="/services/cybersecurity" element={<DigitalTransformationPage />} />
            <Route path="/services/software-development" element={<DigitalTransformationPage />} />
            <Route path="/services/infrastructure" element={<DigitalTransformationPage />} />
            <Route path="/services/testing" element={<DigitalTransformationPage />} />
            <Route path="/services/data-science" element={<DigitalTransformationPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}

export default App;