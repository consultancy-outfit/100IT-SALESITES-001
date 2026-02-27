import React from 'react';
import { Layout } from '../components/Layout';
import { COMPANY_DETAILS } from '../constants';

const Terms = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-slate-400">Last updated: February 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"), a company registered in England and Wales under company number {COMPANY_DETAILS.crn}. Our registered office is at {COMPANY_DETAILS.address}.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Service Provision</h2>
              <p>
                We provide IT support, cybersecurity, cloud migration, and consultancy services as detailed in individual service level agreements (SLAs) or project proposals. All services are provided with reasonable skill and care in accordance with UK industry standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All prices are quoted in Great British Pounds (GBP).</li>
                <li>Invoices are subject to VAT at the prevailing UK rate unless otherwise stated.</li>
                <li>Monthly support fees are payable in advance via Direct Debit or bank transfer.</li>
                <li>Project-based work requires a 50% deposit before commencement, with the balance due upon completion.</li>
                <li>Late payments may incur interest at a rate of 8% above the Bank of England base rate.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
              <p>
                All intellectual property rights in materials created by us during the provision of services shall remain our property until full payment is received, at which point a non-exclusive, perpetual license is granted to the Client for their internal business use.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as such. This obligation survives the termination of any agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
              <p>
                Our total liability for any claim arising under these terms shall not exceed the total fees paid by the Client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
