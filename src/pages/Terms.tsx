import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Terms = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Terms and Conditions</h1>
        <p className="text-zinc-500 mb-12 italic text-sm">Last Updated: February 27, 2026</p>

        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the Oaklands Respite website and our IT services. By accessing our website or engaging our services, you agree to be bound by these terms. Oaklands Respite is a trading name of Oaklands Respite Ltd, registered in England and Wales (Company No: {COMPANY_DETAILS.crn}).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Services</h2>
            <p>
              Oaklands Respite provides managed IT support, cybersecurity, cloud infrastructure, and consulting services. The specific scope of services will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) provided to each client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Payment Terms</h2>
            <p>
              All fees are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing UK rate. Payment for monthly managed services is due in advance via Direct Debit or bank transfer. Project-based work requires a 50% deposit before commencement, with the balance due upon completion. Late payments may incur interest at a rate of 8% above the Bank of England base rate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all intellectual property rights in materials created by Oaklands Respite during the provision of services shall remain the property of Oaklands Respite. Clients are granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all non-public information obtained from the other party during the course of our business relationship. This obligation survives the termination of any service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by English law, Oaklands Respite shall not be liable for any indirect, consequential, or special damages, including loss of profits or data. Our total liability for any claim arising out of our services shall be limited to the total fees paid by the client in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="pt-12 border-t border-zinc-100">
            <h2 className="text-xl font-bold text-zinc-900 mb-4">Contact Information</h2>
            <p className="text-sm">
              Registered Office: {COMPANY_DETAILS.address}<br />
              Email: {COMPANY_DETAILS.email}<br />
              Phone: {COMPANY_DETAILS.phone}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
