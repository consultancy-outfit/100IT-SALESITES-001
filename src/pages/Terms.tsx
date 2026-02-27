import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Terms = () => {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="text-sm italic">Last Updated: February 27, 2026</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the website and services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us"). By accessing our website or engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales. <br />
              Registered Office: {COMPANY_DETAILS.address} <br />
              Company Registration Number (CRN): {COMPANY_DETAILS.crn}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Services and Quotations</h2>
            <p>
              All services provided are subject to a formal Service Level Agreement (SLA) or Statement of Work (SOW). Quotations are valid for 30 days from the date of issue unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All financial transactions are conducted in Pounds Sterling (GBP).</li>
              <li>Invoices are subject to VAT at the prevailing UK rate.</li>
              <li>Standard payment terms are 14 days from the date of invoice unless otherwise agreed in writing.</li>
              <li>We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of {COMPANY_DETAILS.name} or its content suppliers and is protected by UK and international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is identified as confidential or which ought reasonably to be considered confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {COMPANY_DETAILS.name} shall not be liable for any indirect, incidental, or consequential damages, including loss of profits or data, arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
