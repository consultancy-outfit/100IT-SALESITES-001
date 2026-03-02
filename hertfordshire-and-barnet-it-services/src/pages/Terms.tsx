import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Terms = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the services provided by {COMPANY_DETAILS.legalName} ("the Company", "we", "us", "our"). 
              By engaging our services, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Services</h2>
            <p>
              The Company provides IT services including managed support, cloud solutions, cyber security, and consultancy. 
              The specific scope of services will be defined in a Service Level Agreement (SLA) or Statement of Work (SOW) provided to the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Payment Terms</h2>
            <p>
              All fees are quoted in Pounds Sterling (£) and are exclusive of VAT unless otherwise stated. 
              Invoices are issued monthly and are payable within 14 days of the invoice date. 
              Late payments may incur interest at a rate of 8% above the Bank of England base rate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
            <p>
              All intellectual property rights in any materials, software, or documentation created by the Company in the course of providing services 
              shall remain the property of the Company unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or 
              which ought reasonably to be treated as confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the Company's total liability for any claim arising out of or in connection with our services 
              shall be limited to the total fees paid by the client in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of England and Wales. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
