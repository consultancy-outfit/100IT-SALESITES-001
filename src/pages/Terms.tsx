import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Terms = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Terms and Conditions</h1>
          <p className="text-slate-500 mt-4 font-mono text-sm">Last Updated: March 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl prose prose-slate prose-brand">
            <div className="space-y-12 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p>
                  These Terms and Conditions govern the use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services or using our website, you agree to comply with and be bound by these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Information</h2>
                <p>
                  {COMPANY_DETAILS.name} is a company registered in England and Wales.
                  <br />
                  <strong>Registered Office:</strong> {COMPANY_DETAILS.address}
                  <br />
                  <strong>Company Registration Number:</strong> {COMPANY_DETAILS.crn}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services</h2>
                <p>
                  The Company provides IT support, cloud solutions, cybersecurity, and consultancy services. The specific scope of work, service levels, and deliverables will be outlined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) provided to the client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
                <p>
                  All prices are quoted in British Pounds (GBP) and are subject to VAT at the prevailing rate unless otherwise stated.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Managed service invoices are issued monthly in advance.</li>
                  <li>Project-based work may require a deposit before commencement.</li>
                  <li>Payment is due within 14 days of the invoice date unless otherwise agreed in writing.</li>
                  <li>We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
                <p>
                  All intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company until full payment is received, at which point a non-exclusive license is granted to the client for their internal business use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
                <p>
                  Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as such. This obligation survives the termination of any service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities. Our total liability for any claim arising out of our services shall not exceed the total fees paid by the client in the 12 months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
