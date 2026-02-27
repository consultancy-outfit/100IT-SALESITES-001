import React from 'react';
import { COMPANY_DETAILS } from '../components/Layout';

export default function Privacy() {
  return (
    <div className="bg-white py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Last Updated: February 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
            <p>Jackson Gardens is committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, and protect your information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">2. Data We Collect</h2>
            <p>We may collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and business address.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and usage data when you visit our website.</li>
              <li><strong>Business Data:</strong> Information related to your IT infrastructure and requirements.</li>
              <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">3. Purpose of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To respond to enquiries and provide customer support.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">4. Data Retention</h2>
            <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the termination of a contract.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">5. Your Rights</h2>
            <p>Under the UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ('right to be forgotten').</li>
              <li>The right to restrict processing.</li>
              <li>The right to data portability.</li>
              <li>The right to object to processing.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">6. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings. For more information, please see our full Cookie Policy.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">7. Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and third parties who have a business need to know.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data protection practices, please contact our Data Protection Officer at:</p>
            <p><strong>Email:</strong> {COMPANY_DETAILS.email}</p>
            <p><strong>Address:</strong> {COMPANY_DETAILS.address}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
