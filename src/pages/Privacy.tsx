import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Privacy() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Overview</h2>
            <p>{COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following types of data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number, business address)</li>
              <li>Technical data (IP address, browser type, device information)</li>
              <li>Usage data (how you use our website and services)</li>
              <li>Marketing preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage our IT services</li>
              <li>Communicate with you regarding your account or enquiries</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the termination of the contract.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure ('right to be forgotten')</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings. For more information, please request our full Cookie Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security Measures</h2>
            <p>We implement robust technical and organisational measures to protect your data, including encryption, firewalls, and regular security audits. Our staff are trained in data protection best practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
