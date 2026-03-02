/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<RouteWrapper><Services /></RouteWrapper>} />
          <Route path="/about" element={<RouteWrapper><About /></RouteWrapper>} />
          <Route path="/pricing" element={<RouteWrapper><Pricing /></RouteWrapper>} />
          <Route path="/contact" element={<RouteWrapper><Contact /></RouteWrapper>} />
          <Route path="/terms" element={<RouteWrapper><Terms /></RouteWrapper>} />
          <Route path="/privacy" element={<RouteWrapper><Privacy /></RouteWrapper>} />
          <Route path="/cookies" element={<RouteWrapper><Cookies /></RouteWrapper>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function RouteWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{children}</>;
}
