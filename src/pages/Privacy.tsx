import React from 'react';

const COMPANY_DETAILS = {
  name: "HCF The Springs",
  address: "The Springs Business Park, Unit 12, Leeds, LS15 8GB, United Kingdom",
  crn: "12345678",
  phone: "+44 (0) 113 456 7890",
  email: "info@hcfthesprings.co.uk"
};

export default function Privacy() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last Updated: February 27, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number, company name).</li>
              <li>Technical data (IP address, browser type, operating system).</li>
              <li>Usage data (how you use our website and services).</li>
              <li>Marketing and communications preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To communicate with you regarding enquiries or support requests.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
              <li>To send marketing communications where you have consented to receive them.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the end of the business relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
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

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security Measures</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees, agents, and contractors who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Officer at:<br />
              <strong>Email:</strong> {COMPANY_DETAILS.email}<br />
              <strong>Address:</strong> {COMPANY_DETAILS.address}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
