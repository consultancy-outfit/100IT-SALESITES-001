import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-stone-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-stone max-w-none space-y-8 text-stone-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Information We Collect</h2>
          <p>
            {COMPANY_DETAILS.name} Ltd ("we", "us", "our") collects personal data from clients and website visitors to provide and improve our IT services. This data may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact details (email, phone number, address)</li>
            <li>Company information and job title</li>
            <li>Technical information (IP address, browser type, device info)</li>
            <li>Communication history and support ticket data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Purpose of Processing</h2>
          <p>
            We process your data for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and manage IT support services</li>
            <li>To communicate with you regarding your account or enquiries</li>
            <li>To comply with legal and regulatory obligations (e.g., UK GDPR)</li>
            <li>To improve our website and service offerings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">3. Data Retention</h2>
          <p>
            We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years following the termination of a contract.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Your Rights</h2>
          <p>
            Under the UK GDPR, you have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access your personal data</li>
            <li>The right to rectification of inaccurate data</li>
            <li>The right to erasure ('right to be forgotten')</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">5. Cookies</h2>
          <p>
            Our website uses cookies to enhance user experience and analyse traffic. You can manage your cookie preferences through your browser settings. For more information, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">6. Security Measures</h2>
          <p>
            We implement robust technical and organisational measures to protect your data, including encryption, firewalls, and secure access controls. Our staff receive regular data protection training.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="font-bold text-stone-900">
            {COMPANY_DETAILS.name} Ltd<br />
            {COMPANY_DETAILS.address}<br />
            Email: {COMPANY_DETAILS.email}
          </p>
        </section>

        <section className="pt-8 border-t border-stone-200">
          <p className="text-sm italic">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
