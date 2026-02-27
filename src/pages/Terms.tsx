import React from 'react';
import { COMPANY_DETAILS } from '../components/Layout';

export default function Terms() {
  return (
    <div className="bg-white py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Last Updated: February 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
            <p>Welcome to Jackson Gardens. These Terms and Conditions govern your use of our website and the IT services provided by Jackson Gardens ("we", "us", "our"). By accessing our website or engaging our services, you agree to be bound by these terms.</p>
            <p><strong>Company Name:</strong> {COMPANY_DETAILS.name}</p>
            <p><strong>Registered Office:</strong> {COMPANY_DETAILS.address}</p>
            <p><strong>Company Registration Number (CRN):</strong> {COMPANY_DETAILS.crn}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">2. Services</h2>
            <p>We provide a range of IT services including managed support, cybersecurity, cloud migration, and consultancy. The specific scope of services will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) for each client engagement.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">3. Payment Terms</h2>
            <p>All financial transactions are conducted in British Pounds Sterling (£). Unless otherwise agreed in writing:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Managed services are billed monthly in advance.</li>
              <li>Project-based work requires a 50% deposit before commencement.</li>
              <li>Invoices are payable within 14 days of the invoice date.</li>
              <li>All prices quoted are exclusive of VAT at the prevailing UK rate (currently 20%).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">4. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and software, is the property of Jackson Gardens or its content suppliers and is protected by UK and international copyright laws.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">5. Confidentiality</h2>
            <p>We acknowledge that in the course of providing services, we may have access to confidential information. We agree to maintain the confidentiality of such information and not disclose it to any third party without your prior written consent, except as required by law.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by English law, Jackson Gardens shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, revenue, or data, arising out of or in connection with our services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">7. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the English courts.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
