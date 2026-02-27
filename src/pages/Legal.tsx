import React from 'react';
import { COMPANY_DETAILS } from '@/src/constants';

export function Terms() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} Ltd ("the Company"). By engaging our services, you agree to be bound by these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Services</h2>
            <p>The Company provides IT managed services, cybersecurity, and consultancy as defined in the specific Service Level Agreement (SLA) or Statement of Work (SOW) provided to the Client.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
            <p>All fees are quoted in Great British Pounds (£) and are subject to VAT at the prevailing rate. Invoices are payable within 30 days of the invoice date unless otherwise specified in writing.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>All intellectual property rights in materials created by the Company during the provision of services remain the property of the Company until all fees are paid in full, at which point a non-exclusive license is granted to the Client.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>Both parties agree to keep confidential all sensitive information obtained during the course of the engagement. This obligation survives the termination of any agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>The Company's total liability for any claim arising out of or in connection with the services shall be limited to the total fees paid by the Client in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <div className="pt-8 border-t border-slate-100 text-sm italic">
            <p>Last Updated: {new Date().toLocaleDateString('en-GB')}</p>
            <p>Registered Office: {COMPANY_DETAILS.address}</p>
            <p>Company Registration Number: {COMPANY_DETAILS.crn}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Privacy() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Data Controller</h2>
            <p>{COMPANY_DETAILS.name} Ltd is the data controller for the personal information we collect. We are committed to protecting your privacy in accordance with the UK GDPR and the Data Protection Act 2018.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact details (name, email, phone number)</li>
              <li>Professional information (job title, company name)</li>
              <li>Technical data (IP address, browser type via cookies)</li>
              <li>Communication history with our support team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
            <p>We process your data to provide IT services, manage your account, improve our website, and comply with legal obligations. Our legal basis for processing is typically the performance of a contract or legitimate interests.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including any legal, accounting, or reporting requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the right to access, correct, or erase your personal data. You also have the right to object to processing and the right to data portability. To exercise these rights, contact us at {COMPANY_DETAILS.email}.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Security Measures</h2>
            <p>We implement robust technical and organisational measures to protect your data, including encryption, access controls, and regular security audits.</p>
          </section>

          <div className="pt-8 border-t border-slate-100 text-sm italic">
            <p>Last Updated: {new Date().toLocaleDateString('en-GB')}</p>
            <p>Contact: {COMPANY_DETAILS.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
