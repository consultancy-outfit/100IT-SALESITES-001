import React from 'react';
import { COMPANY_DETAILS } from '../constants/company';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data: Name, job title.</li>
              <li>Contact Data: Email address, phone number, business address.</li>
              <li>Technical Data: IP address, browser type, time zone setting, and other technology on the devices you use to access this website.</li>
              <li>Usage Data: Information about how you use our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Data</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services to you.</li>
              <li>To process your enquiries and provide quotes.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
              <li>With your consent, to send you marketing communications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Legal Basis for Processing</h2>
            <p>We process your data under the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Performance of a contract with you.</li>
              <li>Compliance with a legal obligation.</li>
              <li>Our legitimate interests (e.g., business development and service improvement).</li>
              <li>Your explicit consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, this is 6 years following the end of our business relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ('right to be forgotten').</li>
              <li>The right to restrict processing.</li>
              <li>The right to data portability.</li>
              <li>The right to object to processing.</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, please contact us at {COMPANY_DETAILS.email}.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Lead at:<br />
              <strong>Email:</strong> {COMPANY_DETAILS.email}<br />
              <strong>Address:</strong> {COMPANY_DETAILS.address}
            </p>
          </section>

          <section>
            <p className="text-sm italic">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
