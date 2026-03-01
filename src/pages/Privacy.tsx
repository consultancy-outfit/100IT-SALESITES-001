import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Privacy = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-slate-500 mt-4 font-mono text-sm">Last Updated: March 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl prose prose-slate prose-brand">
            <div className="space-y-12 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p>
                  {COMPANY_DETAILS.name} is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
                <p>We may collect and process the following data about you:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Identity Data:</strong> Name, job title, and company name.</li>
                  <li><strong>Contact Data:</strong> Email address, phone number, and business address.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, and usage data from our website.</li>
                  <li><strong>Service Data:</strong> Information related to the IT services we provide to you.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Data</h2>
                <p>We use your data for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>To provide and manage our IT services.</li>
                  <li>To communicate with you regarding support tickets or enquiries.</li>
                  <li>To process payments and manage your account.</li>
                  <li>To comply with legal and regulatory obligations.</li>
                  <li>With your consent, to send you updates about our services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
                <p>
                  We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, this is for the duration of our business relationship plus 6 years for tax and legal purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
                <p>Under UK GDPR, you have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
                  <li><strong>Correction:</strong> Request that we correct inaccurate data.</li>
                  <li><strong>Erasure:</strong> Request that we delete your data (the "right to be forgotten").</li>
                  <li><strong>Restriction:</strong> Request that we limit how we use your data.</li>
                  <li><strong>Portability:</strong> Request a transfer of your data to another provider.</li>
                  <li><strong>Objection:</strong> Object to our processing of your data for direct marketing.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Security Measures</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and partners who have a business need to know.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cookies</h2>
                <p>
                  Our website uses cookies to distinguish you from other users and improve your experience. You can set your browser to refuse all or some browser cookies, but this may affect the functionality of our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at:
                  <br />
                  <strong>Email:</strong> {COMPANY_DETAILS.email}
                  <br />
                  <strong>Address:</strong> {COMPANY_DETAILS.address}
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
