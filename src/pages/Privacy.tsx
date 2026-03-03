import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Privacy = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-zinc-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Data Collection</h2>
            <p>
              We collect personal data that you provide to us, including your name, email address, phone number, and company details when you contact us or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Processing Purposes</h2>
            <p>
              We process your data to provide our services, respond to inquiries, manage accounts, and comply with legal obligations. We may also use your data for marketing purposes if you have consented to this.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Data Retention</h2>
            <p>
              We retain personal data for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Subject Rights</h2>
            <p>
              Under UK GDPR, you have the right to access, rectify, or erase your personal data. You also have the right to restrict or object to processing and the right to data portability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience and analyze traffic. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Security Measures</h2>
            <p>
              We implement robust technical and organisational measures to protect your data from unauthorised access, loss, or disclosure.
            </p>
          </section>

          <div className="pt-8 border-t border-zinc-200">
            <p className="text-sm font-bold text-zinc-900">Data Controller Details:</p>
            <p className="text-sm">Company Name: {COMPANY_DETAILS.name}</p>
            <p className="text-sm">Email: {COMPANY_DETAILS.email}</p>
            <p className="text-sm">Address: {COMPANY_DETAILS.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
