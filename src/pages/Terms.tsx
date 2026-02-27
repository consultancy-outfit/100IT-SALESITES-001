import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Terms = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              These terms and conditions govern your use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us"). By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Company Details</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales. <br />
              Registered Office: {COMPANY_DETAILS.address} <br />
              Company Registration Number: {COMPANY_DETAILS.crn}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Payment Terms</h2>
            <p>
              All fees are quoted in Pounds Sterling (GBP) and are subject to VAT at the prevailing rate. Invoices are payable within 14 days of the invoice date unless otherwise agreed in writing. Late payments may incur interest at a rate of 8% above the Bank of England base rate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
            <p>
              All intellectual property rights in materials created by us during the provision of services shall remain our property until full payment has been received, at which point a non-exclusive license is granted to the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as such.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
            <p>
              Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Governing Law</h2>
            <p>
              These terms and conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
