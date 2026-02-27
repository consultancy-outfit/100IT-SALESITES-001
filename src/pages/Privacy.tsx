import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Privacy = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
        <p className="text-zinc-500 mb-12 italic text-sm">Last Updated: February 27, 2026</p>

        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              Oaklands Respite ("we", "us", or "our") is committed to protecting and respecting your privacy. This policy explains how we collect, process, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data: Name, job title.</li>
              <li>Contact Data: Email address, phone number, business address.</li>
              <li>Technical Data: IP address, browser type, time zone setting, and operating system.</li>
              <li>Usage Data: Information about how you use our website and services.</li>
              <li>Marketing Data: Your preferences in receiving marketing from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. How We Use Your Data</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services to you.</li>
              <li>To respond to enquiries and provide technical support.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
              <li>To send you relevant business updates (with your consent).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the end of the business relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Your Rights</h2>
            <p>Under the UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ("right to be forgotten").</li>
              <li>The right to restrict processing.</li>
              <li>The right to data portability.</li>
              <li>The right to object to processing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and partners who have a business need to know.
            </p>
          </section>

          <section className="pt-12 border-t border-zinc-100">
            <h2 className="text-xl font-bold text-zinc-900 mb-4">Contact Our Data Protection Officer</h2>
            <p className="text-sm">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:<br />
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
