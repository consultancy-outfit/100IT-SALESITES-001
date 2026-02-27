import React from 'react';
import { Section } from './components/Layout';
import { COMPANY_DETAILS } from './constants';

const Privacy = () => {
  return (
    <div className="pt-20">
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="font-bold">Last Updated: February 27, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Overview</h2>
              <p>
                {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email, phone number, business address).</li>
                <li>Business details (company name, job title).</li>
                <li>Technical data (IP address, browser type, usage patterns via cookies).</li>
                <li>Communication history between you and our support team.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purpose of Processing</h2>
              <p>We process your data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and manage IT services.</li>
                <li>Respond to enquiries and provide technical support.</li>
                <li>Comply with legal and regulatory obligations.</li>
                <li>Improve our website and service offerings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 6 years following the termination of a contract.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction or erasure of your data.</li>
                <li>Object to or restrict processing.</li>
                <li>Request data portability.</li>
                <li>Withdraw consent at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Security Measures</h2>
              <p>
                We implement robust technical and organisational measures to secure your data, including encryption, firewalls, multi-factor authentication, and regular security audits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this policy or our data practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email} or write to us at our registered office.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Privacy;
