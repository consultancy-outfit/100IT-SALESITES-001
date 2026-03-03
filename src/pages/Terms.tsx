import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Terms() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Terms & Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Details</h2>
            <p>
              Company Name: {COMPANY_DETAILS.name}<br />
              Registered Office: {COMPANY_DETAILS.address}<br />
              Company Registration Number: {COMPANY_DETAILS.crn}<br />
              Governing Law: England and Wales
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services</h2>
            <p>
              We provide IT managed services, cyber security, cloud solutions, and consultancy as described in our service level agreements (SLAs). Specific project scopes and deliverables will be outlined in individual contracts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
            <p>
              All fees are quoted in Pounds Sterling (GBP) and are subject to VAT at the prevailing rate unless otherwise stated. Managed service fees are typically billed monthly in advance. Project-based work may require a deposit before commencement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all intellectual property rights in materials created by us during the provision of services remain our property. Clients are granted a non-exclusive license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all sensitive information obtained during the course of the engagement. This obligation survives the termination of any contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, our liability for any claim arising out of our services shall be limited to the total fees paid by the client in the 12 months preceding the claim. We are not liable for indirect or consequential losses, including loss of profit or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Termination</h2>
            <p>
              Termination notice periods are specified in individual service contracts. Typically, managed services require 90 days' written notice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
