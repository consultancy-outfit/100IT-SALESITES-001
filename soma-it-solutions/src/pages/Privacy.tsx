import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
        <p className="text-lg font-medium">
          Last Updated: {new Date().toLocaleDateString('en-GB')}
        </p>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>
            {COMPANY_DETAILS.name} is committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. This policy outlines how we collect, use, and protect your data in compliance with the UK General Data Protection Regulation (UK GDPR).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Data Collected</h2>
          <p>We may collect the following types of personal data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (name, email address, phone number)</li>
            <li>Professional information (job title, company name)</li>
            <li>Technical data (IP address, browser type, usage patterns)</li>
            <li>Financial information for billing purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
          <p>We process your data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and manage our IT services</li>
            <li>To communicate with you regarding your account or enquiries</li>
            <li>To comply with legal and regulatory obligations</li>
            <li>To improve our website and service offerings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
          <p>
            We will retain your personal data only for as long as is necessary for the purposes set out in this policy, or as required by law (typically 6 years for financial records).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
          <p>Under the UK GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access your personal data</li>
            <li>The right to rectification of inaccurate data</li>
            <li>The right to erasure ('right to be forgotten')</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security Measures</h2>
          <p>
            We implement robust technical and organizational measures to protect your data, including encryption, firewalls, and regular security audits.
          </p>
        </section>

        <section className="pt-8 border-t border-slate-200">
          <p className="text-sm font-bold text-slate-900 uppercase">Contact Our Data Protection Officer:</p>
          <p className="text-sm">
            Email: dpo@soma-healthcare-it.co.uk<br />
            Address: {COMPANY_DETAILS.address}
          </p>
        </section>
      </div>
    </div>
  );
}
