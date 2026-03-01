import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

import HomePage from './pages/HomePage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import AboutUsPage from './pages/AboutUsPage.tsx';
import PricingPage from './pages/PricingPage.tsx';
import ContactUsPage from './pages/ContactUsPage.tsx';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
);
