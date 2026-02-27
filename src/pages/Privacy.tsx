import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Privacy: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-900 mb-12">Privacy Policy</h1>
          <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
            <p className="text-sm text-zinc-400">Last Updated: February 27, 2026</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">1. Introduction</h2>
              <p>
                {COMPANY_DETAILS.name} is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">2. Data We Collect</h2>
              <p>We may collect and process the following data about you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email, phone number, business address).</li>
                <li>Professional information (job title, company name).</li>
                <li>Technical data (IP address, browser type, usage data from our website).</li>
                <li>Information provided in contact forms or during service engagement.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">3. Purposes of Processing</h2>
              <p>We use your data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and manage our IT services.</li>
                <li>To respond to enquiries and provide customer support.</li>
                <li>To comply with legal and regulatory obligations.</li>
                <li>To improve our website and service offerings.</li>
                <li>To send marketing communications (where you have consented to receive them).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">4. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">5. Your Rights</h2>
              <p>Under the UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal data.</li>
                <li>The right to rectification of inaccurate data.</li>
                <li>The right to erasure ('right to be forgotten').</li>
                <li>The right to restrict processing.</li>
                <li>The right to data portability.</li>
                <li>The right to object to processing.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">6. Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users and provide a better experience. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">7. Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data protection practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
