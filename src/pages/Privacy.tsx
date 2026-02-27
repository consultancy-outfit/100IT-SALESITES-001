import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-display font-bold text-navy-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Introduction</h2>
          <p>
            Blessday House ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, process, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Data We Collect</h2>
          <p>We may collect and process the following data about you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identity Data: Name, job title, company name.</li>
            <li>Contact Data: Email address, phone number, business address.</li>
            <li>Technical Data: IP address, browser type, operating system, and usage data from our website.</li>
            <li>Communication Data: Records of correspondence if you contact us.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">3. How We Use Your Data</h2>
          <p>We use your data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and manage our IT services to you.</li>
            <li>To respond to enquiries and provide customer support.</li>
            <li>To comply with legal and regulatory obligations.</li>
            <li>To improve our website and service offerings.</li>
            <li>To send marketing communications (where you have consented to receive them).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, this is for the duration of our business relationship plus 6 years for tax and legal purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Your Rights</h2>
          <p>Under the UK GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access your personal data.</li>
            <li>The right to rectification of inaccurate data.</li>
            <li>The right to erasure ('right to be forgotten').</li>
            <li>The right to restrict processing.</li>
            <li>The right to data portability.</li>
            <li>The right to object to processing.</li>
          </ul>
          <p className="mt-4">To exercise any of these rights, please contact us at info@blessdayhouse.co.uk.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Cookies</h2>
          <p>
            Our website uses cookies to distinguish you from other users and to provide a better browsing experience. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Data Security</h2>
          <p>
            We have implemented appropriate technical and organisational security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. This includes encryption, firewalls, and secure access controls.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Contact Details</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Officer:</p>
          <ul className="list-none space-y-1 mt-2">
            <li><strong>Email:</strong> info@blessdayhouse.co.uk</li>
            <li><strong>Address:</strong> N/A</li>
          </ul>
        </section>

        <section className="pt-8 border-t border-slate-200">
          <p className="text-sm italic">Last updated: February 2026</p>
        </section>
      </div>
    </div>
  );
}
