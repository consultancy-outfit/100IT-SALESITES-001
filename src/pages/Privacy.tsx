import React from 'react';

const COMPANY_DETAILS = {
  name: "Support services for disabled children",
  address: "124 City Road, London, EC1V 2NX, United Kingdom",
  crn: "12345678",
  email: "contact@supportservicesfordisabledchildren.co.uk"
};

export default function Privacy() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: February 27, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p>
              <strong>{COMPANY_DETAILS.name}</strong> ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email address, phone number, company name).</li>
              <li>Technical data (IP address, browser type, operating system).</li>
              <li>Usage data (how you use our website and services).</li>
              <li>Communication data (records of our correspondence with you).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Data</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To respond to your enquiries and provide support.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
              <li>To send you marketing communications (where you have consented).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the termination of the service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Your Rights</h2>
            <p>Under the UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> The right to request a copy of the data we hold about you.</li>
              <li><strong>Rectification:</strong> The right to correct inaccurate data.</li>
              <li><strong>Erasure:</strong> The right to request that we delete your data.</li>
              <li><strong>Restriction:</strong> The right to request that we limit the processing of your data.</li>
              <li><strong>Portability:</strong> The right to request the transfer of your data to another provider.</li>
              <li><strong>Objection:</strong> The right to object to our processing of your data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users and to provide a better browsing experience. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and partners who have a business need to know.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <p className="text-sm">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection Officer at <strong>{COMPANY_DETAILS.email}</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
