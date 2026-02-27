import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const PrivacyPage = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-12 italic">Last updated: February 27, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              <strong>{COMPANY_DETAILS.name}</strong> ("we", "us", or "our") is committed to protecting and respecting your privacy. This policy explains how we collect, process, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data: Name, job title, and company name.</li>
              <li>Contact Data: Email address, phone number, and business address.</li>
              <li>Technical Data: IP address, browser type, and usage data from our website.</li>
              <li>Communication Data: Records of correspondence when you contact us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage the IT services you have requested.</li>
              <li>To respond to inquiries and provide technical support.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Standard retention for client records is 7 years following the termination of a contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p>Under the UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ("the right to be forgotten").</li>
              <li>The right to restrict or object to processing.</li>
              <li>The right to data portability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users and improve your experience. You can set your browser to refuse all or some browser cookies, but this may affect the functionality of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees and partners who have a business need to know.
            </p>
          </section>

          <section className="pt-12 border-t border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Our Data Protection Lead</h3>
            <p>If you have any questions about this privacy policy or our data protection practices, please contact us at:</p>
            <ul className="space-y-2 text-sm mt-4">
              <li><strong>Email:</strong> {COMPANY_DETAILS.email}</li>
              <li><strong>Address:</strong> {COMPANY_DETAILS.address}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
