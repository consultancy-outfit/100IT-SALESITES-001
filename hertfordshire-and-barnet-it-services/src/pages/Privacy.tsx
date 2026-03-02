import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Privacy = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Information We Collect</h2>
            <p>
              We collect and process personal data including names, email addresses, phone numbers, and company details 
              when you contact us or engage our services. We also collect technical data such as IP addresses through cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Purpose of Processing</h2>
            <p>
              We process your data to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage IT services</li>
              <li>Respond to enquiries and provide support</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Improve our website and service offerings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Data Retention</h2>
            <p>
              We retain personal data for as long as necessary to fulfil the purposes for which it was collected, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Your Rights</h2>
            <p>
              Under the UK GDPR, you have rights including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure ('right to be forgotten')</li>
              <li>The right to restrict or object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good 
              experience when you browse our website and also allows us to improve our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Security Measures</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used, or accessed in an unauthorised way. We limit access to your personal data to those employees and 
              third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: 
              {COMPANY_DETAILS.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
