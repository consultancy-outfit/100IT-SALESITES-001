import React from 'react';
import { Layout } from '../components/Layout';
import { COMPANY_DETAILS } from '../constants';

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: February 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Overview</h2>
              <p>
                {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
              <p>We may collect and process the following types of data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identity Data: Name, job title, company name.</li>
                <li>Contact Data: Email address, phone number, business address.</li>
                <li>Technical Data: IP address, browser type, usage data from our website.</li>
                <li>Service Data: Details of IT systems and infrastructure required to provide support.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
              <p>We use your data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and manage IT support services.</li>
                <li>To communicate with you regarding service updates or enquiries.</li>
                <li>To comply with legal and regulatory obligations.</li>
                <li>To improve our website and service offerings.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years following the termination of a contract.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
              <p>Under UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right of access to your personal data.</li>
                <li>Right to rectification of inaccurate data.</li>
                <li>Right to erasure ("right to be forgotten").</li>
                <li>Right to restrict or object to processing.</li>
                <li>Right to data portability.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
              <p>
                Our website uses cookies to enhance user experience and analyse traffic. You can manage your cookie preferences through your browser settings. For more details, please see our Cookie Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data protection practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email} or by post at our registered office: {COMPANY_DETAILS.address}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
