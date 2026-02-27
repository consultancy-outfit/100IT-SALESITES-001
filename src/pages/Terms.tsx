import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Terms: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Terms & Conditions</h1>
          <p className="text-slate-500">Last Updated: February 27, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                These terms and conditions ("Terms") govern the provision of IT services by <strong>{COMPANY_DETAILS.name}</strong> ("the Company", "we", "us", "our") to the client ("the Client", "you"). By engaging our services or using our website, you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Company Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Company Name:</strong> {COMPANY_DETAILS.name}</li>
                <li><strong>Registered Office:</strong> {COMPANY_DETAILS.address}</li>
                <li><strong>Company Registration Number:</strong> {COMPANY_DETAILS.crn}</li>
                <li><strong>Governing Law:</strong> England and Wales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. Services</h2>
              <p>
                The specific IT services to be provided will be detailed in a separate Service Level Agreement (SLA) or Statement of Work (SOW). We reserve the right to modify or discontinue any service with appropriate notice as defined in the SLA.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">4. Payment Terms</h2>
              <p>
                All fees are quoted in <strong>Great British Pounds (GBP/£)</strong> and are exclusive of VAT unless otherwise stated.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Invoices for managed services are issued monthly in advance.</li>
                <li>Payment is due within 14 days of the invoice date.</li>
                <li>We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
              <p>
                All intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company unless otherwise agreed in writing. The Client is granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">6. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the term of the engagement. This obligation survives the termination of the agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, the Company's total liability for any claim arising out of or in connection with the services shall be limited to the total fees paid by the Client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">8. Termination</h2>
              <p>
                Either party may terminate the agreement by providing 30 days' written notice, subject to any minimum term specified in the SLA. Immediate termination may occur in the event of a material breach of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
