import { COMPANY_DETAILS } from '../constants';

export const Privacy = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400">GDPR Compliant | Last updated: February 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-2xl font-bold mb-6">1. Overview</h2>
          <p className="mb-6">
            {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and safeguard your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2 className="text-2xl font-bold mb-6">2. Data We Collect</h2>
          <p className="mb-6">We may collect the following types of data:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Identity Data: Name, job title.</li>
            <li>Contact Data: Email address, phone number, business address.</li>
            <li>Technical Data: IP address, browser type, usage data via cookies.</li>
            <li>Financial Data: Payment details for processing invoices.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">3. Purposes of Processing</h2>
          <p className="mb-6">We process your data for the following reasons:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>To provide and manage our IT services.</li>
            <li>To respond to enquiries and provide quotations.</li>
            <li>To process payments and maintain business accounts.</li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">4. Data Retention</h2>
          <p className="mb-6">
            We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, business contact data is retained for 6 years following the end of a contract.
          </p>

          <h2 className="text-2xl font-bold mb-6">5. Your Rights</h2>
          <p className="mb-6">Under UK GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>The right to access your personal data.</li>
            <li>The right to rectification of inaccurate data.</li>
            <li>The right to erasure ('right to be forgotten').</li>
            <li>The right to restrict or object to processing.</li>
            <li>The right to data portability.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">6. Cookies</h2>
          <p className="mb-6">
            Our website uses cookies to enhance user experience and analyse traffic. You can manage your cookie preferences through your browser settings. For more details, please see our Cookie Policy.
          </p>

          <h2 className="text-2xl font-bold mb-6">7. Security</h2>
          <p className="mb-6">
            We implement robust technical and organisational measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. This includes encryption, firewalls, and secure access controls.
          </p>

          <h2 className="text-2xl font-bold mb-6">8. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this policy or our data practices, please contact our Data Protection Lead at {COMPANY_DETAILS.email}.
          </p>
        </div>
      </section>
    </div>
  );
};
