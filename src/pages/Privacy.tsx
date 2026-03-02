import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>
              We may collect and process the following data about you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number, address).</li>
              <li>Business details (company name, job title).</li>
              <li>Technical data (IP address, browser type, operating system).</li>
              <li>Communication history (emails, support tickets, contact form submissions).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. Purpose of Processing</h2>
            <p>
              We use your data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To communicate with you regarding your account or enquiries.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
              <li>To send marketing communications (where you have consented).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the termination of the service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p>
              Under the UK GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ("right to be forgotten").</li>
              <li>The right to restrict or object to processing.</li>
              <li>The right to data portability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users and improve your browsing experience. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">7. Security Measures</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data protection practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
            </p>
          </section>

          <div className="pt-10 border-t border-slate-200 text-sm text-slate-400">
            <p>Last Updated: March 2026</p>
            <p>{COMPANY_DETAILS.name} | Registered Office: {COMPANY_DETAILS.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
