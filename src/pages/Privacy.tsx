import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Privacy: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500">Last Updated: February 27, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                <strong>{COMPANY_DETAILS.name}</strong> ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and safeguard your personal data in compliance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the Data Protection Act 2018.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Data We Collect</h2>
              <p>We may collect and process the following data about you:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Identity Data:</strong> Name, job title, company name.</li>
                <li><strong>Contact Data:</strong> Email address, phone number, business address.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage data from our website.</li>
                <li><strong>Transaction Data:</strong> Details about services you have purchased from us.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. How We Use Your Data</h2>
              <p>We use your data for the following purposes:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To provide and manage the IT services you have requested.</li>
                <li>To process payments and manage your account.</li>
                <li>To communicate with you regarding service updates or technical support.</li>
                <li>To comply with legal and regulatory obligations.</li>
                <li>With your consent, to send you information about other services we think may interest you.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">4. Legal Basis for Processing</h2>
              <p>Under UK GDPR, we rely on the following legal bases:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Contractual Necessity:</strong> To fulfill our agreement with you.</li>
                <li><strong>Legal Obligation:</strong> To comply with UK law.</li>
                <li><strong>Legitimate Interests:</strong> For the effective management and improvement of our business.</li>
                <li><strong>Consent:</strong> Where you have explicitly agreed to receive marketing communications.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Standard retention for client records is 6 years following the termination of the contract.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">6. Your Rights</h2>
              <p>Under UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data.</li>
                <li><strong>Erasure:</strong> Request deletion of your data (the "right to be forgotten").</li>
                <li><strong>Restriction:</strong> Request that we limit the processing of your data.</li>
                <li><strong>Portability:</strong> Request transfer of your data to another provider.</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests or direct marketing.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">7. Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users and improve your experience. You can manage your cookie preferences through your browser settings. For more information, please see our Cookie Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">8. Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and third parties who have a business need to know.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our data protection practices, please contact our Data Protection Officer at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> {COMPANY_DETAILS.email}<br />
                <strong>Address:</strong> {COMPANY_DETAILS.address}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
