import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Terms = () => {
  return (
    <div className="pt-20">
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-900 mb-8">Terms and Conditions</h1>
          <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
            <p className="italic">Last Updated: February 27, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
              <p>
                These Terms and Conditions govern the use of IT services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services, you agree to be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Service Provision</h2>
              <p>
                We provide managed IT services, cybersecurity, cloud solutions, and consultancy as detailed in our service level agreements (SLA). All services are provided with reasonable care and skill in accordance with industry standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All fees are quoted in Pounds Sterling (GBP) and exclude VAT unless otherwise stated.</li>
                <li>Monthly managed service fees are payable in advance via Direct Debit.</li>
                <li>Project-based work requires a 50% deposit before commencement, with the balance due upon completion.</li>
                <li>Late payments may incur interest at a rate of 8% above the Bank of England base rate.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
              <p>
                All intellectual property rights in materials created by us during the provision of services remain our property unless otherwise agreed in writing. The client is granted a non-exclusive, non-transferable licence to use such materials for their internal business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any proprietary information disclosed during the term of the agreement. This obligation survives the termination of the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
              <p>
                Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <div className="pt-12 border-t border-zinc-200">
              <h3 className="font-bold text-zinc-900 mb-4">Company Details:</h3>
              <p>{COMPANY_DETAILS.name}</p>
              <p>{COMPANY_DETAILS.address}</p>
              <p>Company Registration Number: {COMPANY_DETAILS.crn}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
