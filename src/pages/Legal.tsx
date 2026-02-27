import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 mb-12 tracking-tight">{title}</h1>
      <div className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-li:text-zinc-600 prose-strong:text-zinc-900">
        {children}
      </div>
      <div className="mt-16 pt-8 border-t border-zinc-100">
        <p className="text-sm text-zinc-400">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
      </div>
    </div>
  </div>
);

export const Terms = () => (
  <LegalLayout title="Terms and Conditions">
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
      <p>
        These Terms and Conditions govern your use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services, you agree to be bound by these terms.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">2. Company Information</h2>
      <p>
        {COMPANY_DETAILS.name} is a company registered in England and Wales.
        <br />Registered Office: {COMPANY_DETAILS.address}
        <br />Company Registration Number: {COMPANY_DETAILS.crn}
        <br />VAT Number: {COMPANY_DETAILS.vat}
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">3. Services</h2>
      <p>
        We provide various IT services as detailed in individual Service Level Agreements (SLAs) or project proposals. We reserve the right to modify or discontinue any service with reasonable notice.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
      <p>
        All prices are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate.
      </p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Managed service invoices are issued monthly in advance.</li>
        <li>Project-based work requires a 50% deposit before commencement.</li>
        <li>Standard payment terms are 14 days from the date of invoice.</li>
        <li>Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
      <p>
        Unless otherwise agreed in writing, all intellectual property rights in materials created by us during the provision of services shall remain our property. The client is granted a non-exclusive license to use such materials for their internal business purposes.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
      <p>
        Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as such.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
      <p>
        Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client for the specific service giving rise to the claim in the 12 months preceding the claim.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
      <p>
        These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>
    </section>
  </LegalLayout>
);

export const Privacy = () => (
  <LegalLayout title="Privacy Policy">
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
      <p>
        {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and safeguard your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
      <p>We may collect and process the following types of personal data:</p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Identity Data: Name, job title.</li>
        <li>Contact Data: Email address, phone number, business address.</li>
        <li>Technical Data: IP address, browser type, usage data from our website.</li>
        <li>Transaction Data: Details about payments and services purchased.</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">3. Purposes of Processing</h2>
      <p>We use your data for the following purposes:</p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>To provide and manage our IT services.</li>
        <li>To communicate with you regarding support tickets or enquiries.</li>
        <li>To process payments and manage accounts.</li>
        <li>To comply with legal and regulatory obligations.</li>
        <li>To improve our website and service offerings.</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
      <p>
        We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
      <p>Under the UK GDPR, you have the following rights:</p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>The right to access your personal data.</li>
        <li>The right to rectification of inaccurate data.</li>
        <li>The right to erasure ('right to be forgotten').</li>
        <li>The right to restrict processing.</li>
        <li>The right to data portability.</li>
        <li>The right to object to processing.</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
      <p>
        Our website uses cookies to distinguish you from other users and improve your experience. You can set your browser to refuse all or some browser cookies, but this may affect the functionality of the site.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">7. Security</h2>
      <p>
        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and third parties who have a business need to know.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our data protection practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
      </p>
    </section>
  </LegalLayout>
);
