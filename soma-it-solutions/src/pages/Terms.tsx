import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>
            These Terms and Conditions govern the provision of IT services by {COMPANY_DETAILS.name} ("the Company", "we", "us") to its clients ("the Client", "you"). By engaging our services, you agree to be bound by these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
          <p>
            The specific IT services to be provided will be outlined in a separate Service Level Agreement (SLA) or Statement of Work (SOW). We reserve the right to amend the scope of services with prior written notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
          <p>
            All fees are quoted in British Pounds (£/GBP) and are exclusive of VAT unless otherwise stated. Invoices are payable within 14 days of the invoice date. Late payments may incur interest at a rate of 8% above the Bank of England base rate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
          <p>
            Unless otherwise agreed in writing, all intellectual property rights in any software, documentation, or other materials created by the Company in the course of providing the services shall remain the property of the Company.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential all non-public information received from the other party during the term of the engagement. This obligation shall survive the termination of the agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, the Company's total liability for any claim arising out of or in connection with the services shall be limited to the total fees paid by the Client for the services in the 12 months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section className="pt-8 border-t border-slate-200">
          <p className="text-sm font-bold text-slate-900 uppercase">Company Information:</p>
          <p className="text-sm">
            {COMPANY_DETAILS.name}<br />
            Registered Office: {COMPANY_DETAILS.address}<br />
            CRN: {COMPANY_DETAILS.crn}<br />
            Email: {COMPANY_DETAILS.email}
          </p>
        </section>
      </div>
    </div>
  );
}
