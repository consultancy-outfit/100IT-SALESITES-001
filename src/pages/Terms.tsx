import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export function Terms() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">2. Services</h2>
            <p>
              We provide IT support, consultancy, cloud solutions, and cyber security services. The specific scope of work will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">3. Payment Terms</h2>
            <p>
              All prices are quoted in Great British Pounds (£) and are subject to VAT at the prevailing rate. Invoices are payable within 14 days of the invoice date unless otherwise agreed in writing. Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">4. Intellectual Property</h2>
            <p>
              All intellectual property rights in materials created by us during the provision of services remain our property unless explicitly transferred in writing. You are granted a non-exclusive license to use such materials for your internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained during the course of the engagement that is marked as confidential or would reasonably be considered confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">6. Limitation of Liability</h2>
            <p>
              Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by you for the specific service giving rise to the claim in the 12 months preceding the event. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <div className="pt-12 border-t border-slate-100">
            <p className="text-sm font-bold uppercase tracking-widest mb-4">Company Details</p>
            <p className="text-sm">{COMPANY_DETAILS.name}</p>
            <p className="text-sm">Registered Office: {COMPANY_DETAILS.address}</p>
            <p className="text-sm">CRN: {COMPANY_DETAILS.crn}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
