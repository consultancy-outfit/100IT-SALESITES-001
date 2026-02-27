import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Terms = () => {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 mb-8">Terms and Conditions</h1>
      <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
          <p>
            These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} IT Services Ltd ("the Company", "we", "us", "our"). By engaging our services, you agree to be bound by these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Company Details</h2>
          <p>
            {COMPANY_DETAILS.name} IT Services Ltd is a company registered in England and Wales.<br />
            Registered Office: {COMPANY_DETAILS.address}<br />
            Company Registration Number: {COMPANY_DETAILS.crn}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Services</h2>
          <p>
            We provide managed IT support, cyber security, cloud infrastructure, and consultancy services as detailed in individual Service Level Agreements (SLAs) or Statements of Work (SoW).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Payment Terms</h2>
          <p>
            All prices are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing UK rate (currently 20%). Invoices are issued monthly and are payable within 14 days of the invoice date unless otherwise agreed in writing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Intellectual Property</h2>
          <p>
            All intellectual property rights in materials created by us during the provision of services shall remain our property until full payment is received, at which point a non-exclusive license is granted to the client.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential all information obtained during the course of the engagement that is marked as confidential or would reasonably be considered confidential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Limitation of Liability</h2>
          <p>
            Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
