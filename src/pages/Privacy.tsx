/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Privacy() {
  return (
    <div className="pt-20 pb-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate prose-indigo max-w-none space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>
            This Privacy Policy explains how {COMPANY_DETAILS.name} ("we", "us", "our") collects, uses, and protects your personal data when you visit our website or use our services. We are committed to protecting your privacy and ensuring that your personal data is processed in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Data We Collect</h2>
          <p>
            We may collect and process the following types of personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> Name, job title, company name.</li>
            <li><strong>Contact Data:</strong> Email address, phone number, business address.</li>
            <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
            <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and your communication preferences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
          <p>
            We use your personal data for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and manage our services to you.</li>
            <li>To respond to your enquiries and provide customer support.</li>
            <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
            <li>To improve our website, services, marketing, and client relationships.</li>
            <li>To comply with our legal and regulatory obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
          <p>
            Under the UK GDPR, you have the following rights in relation to your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right of Access:</strong> You have the right to request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You have the right to request that we correct any inaccurate or incomplete personal data.</li>
            <li><strong>Right to Erasure:</strong> You have the right to request that we delete your personal data in certain circumstances.</li>
            <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
            <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer your personal data to another organization.</li>
            <li><strong>Right to Object:</strong> You have the right to object to the processing of your personal data in certain circumstances.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
          <p>
            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them, please see our Cookie Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security Measures</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p>
            Email: {COMPANY_DETAILS.email}<br />
            Address: {COMPANY_DETAILS.address}
          </p>
        </section>
      </div>
    </div>
  );
}
