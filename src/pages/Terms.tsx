import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Terms() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us"). 
              By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Details</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
              Registered Office: {COMPANY_DETAILS.address}<br />
              Company Registration Number: {COMPANY_DETAILS.crn}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services and Fees</h2>
            <p>
              All fees for services are quoted in Pounds Sterling (GBP) and are subject to VAT at the prevailing rate unless otherwise stated. 
              Payment terms are strictly 30 days from the date of invoice unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              All intellectual property rights in materials produced by the Company during the course of providing services shall remain the property of the Company until all fees have been paid in full, at which point ownership shall transfer to the Client, subject to any third-party licenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any sensitive business information disclosed during the term of the agreement. 
              This obligation shall survive the termination of the agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              The Company's total liability for any claim arising out of or in connection with the services provided shall be limited to the total fees paid by the Client for those services in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of England and Wales. 
              The courts of England and Wales shall have exclusive jurisdiction over any disputes.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
