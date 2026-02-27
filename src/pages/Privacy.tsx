import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export function Privacy() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or engage our services. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Business information (company name, job title)</li>
              <li>Technical information (IP address, browser type) when you visit our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Respond to your enquiries and provide support</li>
              <li>Send technical notices, updates, and security alerts</li>
              <li>Comply with legal obligations, including GDPR</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">3. Data Retention</h2>
            <p>
              We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">4. Your Rights</h2>
            <p>
              Under the UK GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure ('right to be forgotten')</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">5. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">6. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
            </p>
          </section>

          <div className="pt-12 border-t border-slate-100">
            <p className="text-sm font-bold uppercase tracking-widest mb-4">Company Details</p>
            <p className="text-sm">{COMPANY_DETAILS.name}</p>
            <p className="text-sm">Registered Office: {COMPANY_DETAILS.address}</p>
            <p className="text-sm">CRN: {COMPANY_DETAILS.crn}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
