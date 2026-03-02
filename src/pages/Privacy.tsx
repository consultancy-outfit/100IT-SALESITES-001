import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Privacy = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and business address.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and usage data when you visit our website.</li>
              <li><strong>Service Data:</strong> Information provided during the course of delivering IT services.</li>
              <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purpose of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To process enquiries and provide quotes.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
              <li>To send relevant business updates (where consented).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the end of the contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate data.</li>
              <li><strong>Erasure:</strong> Request that we delete your data in certain circumstances.</li>
              <li><strong>Restriction:</strong> Request that we restrict processing of your data.</li>
              <li><strong>Portability:</strong> Request the transfer of your data to another provider.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and partners who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data protection practices, please contact our Data Protection Officer at:<br />
              Email: {COMPANY_DETAILS.email}<br />
              Address: {COMPANY_DETAILS.address}
            </p>
          </section>

          <p className="text-sm text-slate-400 pt-8 border-t border-slate-100">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
