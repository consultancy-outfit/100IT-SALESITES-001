import React from 'react';
import { COMPANY_DETAILS } from '../constants/company';

export default function Terms() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions ("Terms") govern the relationship between {COMPANY_DETAILS.name} ("the Company", "we", "us", "our") and the client ("the Client", "you", "your") for the provision of IT services. By engaging our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Details</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
              <strong>Registered Office:</strong> {COMPANY_DETAILS.address}<br />
              <strong>Company Registration Number (CRN):</strong> {COMPANY_DETAILS.crn}<br />
              <strong>VAT Number:</strong> {COMPANY_DETAILS.vat}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services</h2>
            <p>
              The specific services to be provided will be detailed in a separate Service Level Agreement (SLA) or Statement of Work (SOW). We will perform the services with reasonable care and skill in accordance with industry standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
            <p>
              All fees are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate. Invoices are payable within 30 days of the invoice date unless otherwise agreed in writing. We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p>
              Unless otherwise agreed, all intellectual property rights in any materials created by us during the provision of the services shall remain our property. The Client is granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as confidential. This obligation survives the termination of the agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p>
              Our total liability for any claim arising out of or in connection with the services shall be limited to the total fees paid by the Client for the services in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <p className="text-sm italic">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
