import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Terms() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services, you agree to comply with and be bound by these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
              Company Registration Number: {COMPANY_DETAILS.crn}<br />
              Registered Office: {COMPANY_DETAILS.address}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services</h2>
            <p>We provide IT managed services, cybersecurity, cloud solutions, and consultancy. The specific scope of work will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) for each client.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
            <p>All prices are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate. Invoices are typically issued monthly in advance and are payable within 30 days of the invoice date unless otherwise agreed in writing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p>All intellectual property rights in materials created by us during the provision of services remain our property until full payment is received, at which point a non-exclusive license is granted to the client for their internal use.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of all proprietary information disclosed during the term of the agreement and for a period of five years thereafter.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
