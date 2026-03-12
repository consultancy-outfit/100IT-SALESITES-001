import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const TermsPage = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <p className="text-slate-500 mb-12 italic">Last updated: February 27, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of services provided by <strong>{COMPANY_DETAILS.name}</strong> ("the Company"), a company registered in England and Wales under company registration number <strong>{COMPANY_DETAILS.crn}</strong>, with its registered office at <strong>{COMPANY_DETAILS.address}</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
            <p>
              The Company provides IT support, cybersecurity, cloud solutions, and consultancy services as described on our website and in specific Service Level Agreements (SLAs). All services are provided subject to these terms and any specific contract signed between the Company and the Client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
            <p>
              All fees are quoted in Pounds Sterling (£) and are subject to VAT at the prevailing UK rate. Managed service fees are typically billed monthly in advance. Project-based fees may require a deposit before commencement. Payment is due within 14 days of the invoice date unless otherwise specified in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company. The Client is granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is designated as confidential or which by its nature should be treated as confidential. This obligation shall survive the termination of any agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              The Company shall not be liable for any indirect or consequential loss, including loss of profits, data, or business opportunity. Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the Client to the Company in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions and any dispute or claim arising out of them shall be governed by and construed in accordance with the laws of England and Wales. The parties irrevocably agree that the courts of England and Wales shall have exclusive jurisdiction.
            </p>
          </section>

          <section className="pt-12 border-t border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Company Details</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Company Name:</strong> {COMPANY_DETAILS.name}</li>
              <li><strong>Registered Address:</strong> {COMPANY_DETAILS.address}</li>
              <li><strong>CRN:</strong> {COMPANY_DETAILS.crn}</li>
              <li><strong>Email:</strong> {COMPANY_DETAILS.email}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
