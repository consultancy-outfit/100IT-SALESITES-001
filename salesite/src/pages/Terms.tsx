import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Terms() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us"). By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
              Registered Office: {COMPANY_DETAILS.address}<br />
              Company Registration Number (CRN): {COMPANY_DETAILS.crn}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
            <p>
              All fees are quoted in Pounds Sterling (GBP) and are subject to VAT at the prevailing rate. Invoices are payable within 14 days of the invoice date unless otherwise agreed in writing. Late payments may incur interest at a rate of 8% above the Bank of England base rate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise agreed, all intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company until all fees are paid in full, at which point a non-exclusive license is granted to the Client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of all proprietary or sensitive information disclosed during the term of the agreement. This obligation survives the termination of services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the Company's total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the Client in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <p className="text-sm italic pt-8 border-t border-slate-100">
            Last updated: February 27, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
