import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Privacy = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

        <div className="prose prose-indigo max-w-none space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number, business address).</li>
              <li>Technical data (IP address, browser type, usage patterns on our website).</li>
              <li>Professional information (job title, company name).</li>
              <li>Communication history between you and our team.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Purposes of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your enquiries and provide requested quotes.</li>
              <li>To deliver and manage our IT services to you.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ('right to be forgotten').</li>
              <li>The right to restrict or object to processing.</li>
              <li>The right to data portability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users and provide a better experience. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Security Measures</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and partners who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data protection practices, please contact us at:<br />
              Email: {COMPANY_DETAILS.email}<br />
              Address: {COMPANY_DETAILS.address}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
