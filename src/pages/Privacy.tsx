import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Privacy = () => {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Overview</h2>
          <p>
            {COMPANY_DETAILS.name} IT Services Ltd is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your information in compliance with the UK General Data Protection Regulation (UK GDPR).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Data Controller</h2>
          <p>
            {COMPANY_DETAILS.name} IT Services Ltd is the data controller for the personal data we process.<br />
            Address: {COMPANY_DETAILS.address}<br />
            Email: {COMPANY_DETAILS.email}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Types of Data Collected</h2>
          <p>We may collect and process the following types of personal data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (name, email, phone number, business address)</li>
            <li>Professional information (job title, company name)</li>
            <li>Technical data (IP address, browser type, usage patterns on our website)</li>
            <li>Communication records (emails, meeting notes)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Purposes of Processing</h2>
          <p>We process your data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and manage our IT services</li>
            <li>To communicate with you regarding your account or enquiries</li>
            <li>To comply with legal and regulatory obligations</li>
            <li>To improve our website and service offerings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including any legal, accounting, or reporting requirements. Typically, this is 7 years following the end of a client relationship.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Your Rights</h2>
          <p>Under the UK GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access your personal data</li>
            <li>The right to rectification of inaccurate data</li>
            <li>The right to erasure ('right to be forgotten')</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object to processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings. For more details, please see our Cookie Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Security Measures</h2>
          <p>
            We implement robust technical and organisational measures to protect your data, including encryption, secure access controls, and regular security audits.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
