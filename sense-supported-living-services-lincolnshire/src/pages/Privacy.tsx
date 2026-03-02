import React from 'react';

const COMPANY_DETAILS = {
  name: "Sense supported living services Lincolnshire",
  address: "[Address To Be Confirmed]",
  crn: "[CRN To Be Confirmed]",
  phone: "[Phone To Be Confirmed]",
  email: "[Email To Be Confirmed]"
};

const Privacy = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last Updated: March 2024</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section id="gdpr">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, work email, phone number, and job title.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and operating system when you visit our website.</li>
              <li><strong>Communication Data:</strong> Records of correspondence if you contact us.</li>
              <li><strong>Service Data:</strong> Information required to provide IT support and managed services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage the IT services you have requested.</li>
              <li>To respond to enquiries and provide technical support.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service delivery.</li>
              <li>To send professional communications regarding service updates or relevant IT news (where permitted).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Legal Basis for Processing</h2>
            <p>We process data based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contractual Necessity:</strong> To fulfil our service agreement with you.</li>
              <li><strong>Legal Obligation:</strong> To comply with UK law.</li>
              <li><strong>Legitimate Interests:</strong> For the effective management and security of our business.</li>
              <li><strong>Consent:</strong> Where you have explicitly agreed to receive marketing communications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client records are kept for 7 years after the termination of the contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ('right to be forgotten').</li>
              <li>The right to restrict or object to processing.</li>
              <li>The right to data portability.</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, please contact us at {COMPANY_DETAILS.email}.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users and improve your experience. You can manage your cookie preferences through your browser settings. For more details, please request our full Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security Measures</h2>
            <p>
              We implement industry-standard security measures, including encryption, firewalls, and secure access controls, to protect your data from unauthorised access, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this policy or our data practices, please contact our Data Protection Officer at:<br />
              <strong>Email:</strong> {COMPANY_DETAILS.email}<br />
              <strong>Address:</strong> {COMPANY_DETAILS.address}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
