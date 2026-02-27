import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Terms: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-900 mb-12">Terms and Conditions</h1>
          <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
            <p className="text-sm text-zinc-400">Last Updated: February 27, 2026</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">1. Introduction</h2>
              <p>
                These Terms and Conditions govern your use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services, you agree to be bound by these terms.
              </p>
              <p>
                {COMPANY_DETAILS.name} is a company registered in England and Wales with company registration number {COMPANY_DETAILS.crn}. Our registered office is at {COMPANY_DETAILS.address}.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">2. Services</h2>
              <p>
                We provide various IT services as detailed in our service agreements. The specific scope, duration, and fees for these services will be outlined in a separate Statement of Work (SOW) or Service Level Agreement (SLA).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">3. Payment Terms</h2>
              <p>
                All fees are quoted in Pounds Sterling (GBP) and are subject to VAT at the prevailing UK rate. Unless otherwise agreed in writing, invoices are payable within 30 days of the invoice date. We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">4. Intellectual Property</h2>
              <p>
                All intellectual property rights in any materials, software, or documentation created by us in the course of providing the services shall remain our property unless otherwise agreed in writing. You are granted a non-exclusive, non-transferable licence to use such materials solely for your internal business purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">5. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which by its nature should be considered confidential. This obligation shall survive the termination of any agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by you for the services in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900">7. Governing Law</h2>
              <p>
                These Terms and Conditions and any dispute or claim arising out of them shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction to settle any such dispute or claim.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
