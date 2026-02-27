import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Terms = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-zinc-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the services provided by {COMPANY_DETAILS.name}. By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Services</h2>
            <p>
              We provide IT support, consultancy, and managed services as described on our website and in individual service level agreements (SLAs). We reserve the right to modify or discontinue services with appropriate notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Payment Terms</h2>
            <p>
              All fees are quoted in British Pounds (GBP) and exclude VAT unless otherwise stated. Invoices are payable within 30 days of issue. Late payments may incur interest charges in accordance with UK law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
            <p>
              All intellectual property rights in materials created by us during the provision of services remain our property unless otherwise agreed in writing. Clients are granted a non-exclusive license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained during the course of the engagement that is marked as confidential or would reasonably be considered confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
            <p>
              Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client in the 12 months preceding the claim. We are not liable for indirect or consequential losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <div className="pt-8 border-t border-zinc-200">
            <p className="text-sm font-bold text-zinc-900">Company Details:</p>
            <p className="text-sm">Company Name: {COMPANY_DETAILS.name}</p>
            <p className="text-sm">CRN: {COMPANY_DETAILS.crn}</p>
            <p className="text-sm">Registered Office: {COMPANY_DETAILS.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
