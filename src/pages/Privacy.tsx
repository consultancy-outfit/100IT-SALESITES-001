import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Overview</h2>
            <p>
              Walfinch Eastbourne ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, process, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number, business address).</li>
              <li>Professional information (job title, company name).</li>
              <li>Technical data (IP address, browser type, usage patterns via cookies).</li>
              <li>Communication history (emails, support tickets, meeting notes).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purpose of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage IT services and support.</li>
              <li>To communicate with you regarding your account or enquiries.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
              <li>To send marketing communications (where you have consented).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Standard retention for client data is 7 years following the termination of the contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ('right to be forgotten').</li>
              <li>The right to restrict or object to processing.</li>
              <li>The right to data portability.</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, please contact our Data Protection Officer at info@walfincheastbourne.co.uk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users and provide a better browsing experience. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security Measures</h2>
            <p>
              We implement robust technical and organizational measures to protect your data, including encryption, firewalls, and secure access controls. Our staff undergo regular data protection training.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact:<br />
              Data Protection Officer<br />
              Walfinch Eastbourne<br />
              Unit 4, Eastbourne Business Park, Eastbourne, BN23 6PW<br />
              Email: info@walfincheastbourne.co.uk
            </p>
          </section>

          <p className="text-sm text-slate-400 pt-8 border-t border-slate-100">
            Last Updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
