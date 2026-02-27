import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Privacy = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Overview</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Data We Collect</h2>
            <p>We may collect the following types of data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data: Name, job title.</li>
              <li>Contact Data: Email address, phone number, business address.</li>
              <li>Technical Data: IP address, browser type, usage data from our website.</li>
              <li>Service Data: Details of IT systems and infrastructure required for support.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Purposes of Processing</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage IT services.</li>
              <li>Respond to enquiries and provide quotes.</li>
              <li>Maintain security and prevent fraud.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, this is 6 years following the end of a contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ('right to be forgotten').</li>
              <li>The right to restrict processing.</li>
              <li>The right to data portability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to improve user experience and analyse traffic. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Security</h2>
            <p>
              We implement industry-standard security measures, including encryption and secure access controls, to protect your data from unauthorised access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this policy or our data practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
