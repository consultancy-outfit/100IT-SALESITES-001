import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Privacy() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <p className="text-sm italic">Last Updated: February 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your information in compliance with UK GDPR and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details (name, email, phone number, business address)</li>
              <li>Business information (company name, job title)</li>
              <li>Technical data (IP address, browser type, usage patterns on our website)</li>
              <li>Communication records between you and our support team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purpose of Processing</h2>
            <p>We process your data for the following reasons:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services</li>
              <li>To respond to enquiries and provide technical support</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To improve our website and service offerings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Standard retention for contract data is 7 years post-termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure ('right to be forgotten')</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users and provide a better browsing experience. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security Measures</h2>
            <p>
              We implement robust technical and organisational measures to protect your data, including encryption, firewalls, and regular security audits. Access to personal data is restricted to authorised personnel only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at:
              <br />
              Email: {COMPANY_DETAILS.email}
              <br />
              Address: {COMPANY_DETAILS.address}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
