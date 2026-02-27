import React from 'react';
import { Section } from './components/Layout';
import { COMPANY_DETAILS } from './constants';

const Terms = () => {
  return (
    <div className="pt-20">
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="font-bold">Last Updated: February 27, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                These Terms and Conditions govern the use of IT services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"), a company registered in England and Wales under Company Registration Number {COMPANY_DETAILS.crn}, with its registered office at {COMPANY_DETAILS.address}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
              <p>
                We agree to provide IT services as specified in the signed Service Level Agreement (SLA) or Quote provided to the Client. All services are subject to these terms unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All prices are quoted in Great British Pounds (£) and exclude VAT unless stated otherwise.</li>
                <li>Invoices are payable within 14 days of the invoice date.</li>
                <li>Recurring managed services are billed monthly in advance.</li>
                <li>Late payments may incur interest at a rate of 8% above the Bank of England base rate.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
              <p>
                All intellectual property rights in materials created by us during the provision of services remain our property unless specifically transferred in writing upon full payment of all relevant fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, our total liability for any claim arising under these terms shall not exceed the total fees paid by the Client in the 12 months preceding the claim. We are not liable for any indirect or consequential loss, including loss of profits or data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Terms;
