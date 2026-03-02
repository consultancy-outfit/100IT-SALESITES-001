import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Terms() {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales under company registration number {COMPANY_DETAILS.crn}. Our registered office is at {COMPANY_DETAILS.address}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services</h2>
            <p>
              We provide IT support, cybersecurity, cloud infrastructure, and consultancy services. The specific scope of services will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) provided to the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
            <p>
              All prices are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate (currently 20%). Monthly support fees are payable in advance via Direct Debit or bank transfer. Project-based work requires a 50% deposit upon commencement, with the balance due upon completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p>
              All intellectual property rights in any materials, software, or documentation created by us during the provision of services shall remain our property unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary information disclosed during the term of the agreement. This includes technical data, business plans, and client information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {COMPANY_DETAILS.name} shall not be liable for any indirect, incidental, or consequential damages, including loss of profits or data, arising out of the use of our services. Our total liability shall be limited to the amount paid by the client for the services in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
