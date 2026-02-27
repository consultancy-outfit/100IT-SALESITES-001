import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Privacy = () => {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="text-sm italic">Last Updated: February 27, 2026</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details (name, email, phone number, business address).</li>
              <li>Technical data (IP address, browser type, usage patterns via cookies).</li>
              <li>Professional information (job title, company name).</li>
              <li>Communication history between you and {COMPANY_DETAILS.name}.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Purpose of Processing</h2>
            <p>We process your data for the following reasons:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To respond to enquiries and provide quotations.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and user experience.</li>
              <li>With your consent, to send marketing communications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ('right to be forgotten').</li>
              <li>The right to restrict or object to processing.</li>
              <li>The right to data portability.</li>
            </ul>
            <p className="mt-4">To exercise these rights, please contact us at {COMPANY_DETAILS.email}.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and partners who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data protection practices, please contact our Data Protection Officer at: <br />
              Email: {COMPANY_DETAILS.email} <br />
              Address: {COMPANY_DETAILS.address}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
