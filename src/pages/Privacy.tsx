import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, process, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data: Name, job title.</li>
              <li>Contact Data: Email address, phone number, business address.</li>
              <li>Technical Data: IP address, browser type, and usage data via cookies.</li>
              <li>Service Data: Details of services you have enquired about or purchased.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Data</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage the services you request.</li>
              <li>To communicate with you regarding enquiries or support tickets.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Legal Basis for Processing</h2>
            <p>We process your data under the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contractual Necessity: To perform the contract we have with you.</li>
              <li>Legitimate Interests: For business administration and marketing (where permitted).</li>
              <li>Legal Obligation: To comply with UK law.</li>
              <li>Consent: Where you have explicitly agreed to processing (e.g., for marketing).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ("right to be forgotten").</li>
              <li>The right to restrict or object to processing.</li>
              <li>The right to data portability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security</h2>
            <p>
              We implement robust technical and organizational measures to protect your data against unauthorized access, loss, or destruction. This includes encryption, firewalls, and secure access controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this policy or our data practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
