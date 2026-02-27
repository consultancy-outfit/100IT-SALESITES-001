/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { Terms, Privacy } from './pages/Legal';
import { ROUTES } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PRICING} element={<Pricing />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.TERMS} element={<Terms />} />
          <Route path={ROUTES.PRIVACY} element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

