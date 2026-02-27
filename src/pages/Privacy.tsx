import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Privacy = () => {
  return (
    <div className="pt-20">
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
            <p className="italic">Last Updated: February 27, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
              <p>
                {COMPANY_DETAILS.name} ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, process, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Data We Collect</h2>
              <p>We may collect and process the following data about you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> Name, job title, company name.</li>
                <li><strong>Contact Data:</strong> Email address, telephone number, business address.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, time zone setting, and operating system when you visit our website.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Purposes of Processing</h2>
              <p>We use your data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and manage the IT services you have requested.</li>
                <li>To respond to enquiries made via our contact forms.</li>
                <li>To comply with legal and regulatory obligations.</li>
                <li>To improve our website and service offerings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 6 years after the termination of a contract.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Your Rights</h2>
              <p>Under the UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> The right to request a copy of the data we hold about you.</li>
                <li><strong>Rectification:</strong> The right to correct inaccurate data.</li>
                <li><strong>Erasure:</strong> The right to request that we delete your data in certain circumstances.</li>
                <li><strong>Object:</strong> The right to object to our processing of your data.</li>
                <li><strong>Portability:</strong> The right to request the transfer of your data to another provider.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Contact</h2>
              <p>
                If you have any questions about this privacy policy or our data protection practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
              </p>
            </section>

            <div className="pt-12 border-t border-zinc-200">
              <h3 className="font-bold text-zinc-900 mb-4">Company Details:</h3>
              <p>{COMPANY_DETAILS.name}</p>
              <p>{COMPANY_DETAILS.address}</p>
              <p>Company Registration Number: {COMPANY_DETAILS.crn}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
