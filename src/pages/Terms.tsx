import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-stone-900 mb-8">Terms and Conditions</h1>
      <div className="prose prose-stone max-w-none space-y-8 text-stone-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Introduction</h2>
          <p>
            These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} Ltd ("the Company"), a company registered in England and Wales with company registration number {COMPANY_DETAILS.crn} and registered office at {COMPANY_DETAILS.address}.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Services</h2>
          <p>
            The Company provides IT services, including but not limited to managed IT support, cybersecurity, cloud migration, and consultancy. The specific scope of services will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) agreed upon with the client.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">3. Payment Terms</h2>
          <p>
            All prices are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate. Invoices are payable within 14 days of the invoice date unless otherwise specified in writing. Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Intellectual Property</h2>
          <p>
            All intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company until full payment has been received. Upon full payment, the client is granted a non-exclusive, non-transferable licence to use the materials for their internal business purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">5. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential all information obtained from the other party that is designated as confidential or which by its nature should be considered confidential. This obligation shall survive the termination of any agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">6. Limitation of Liability</h2>
          <p>
            The Company's total liability for any claim arising out of or in connection with the services shall be limited to the total fees paid by the client for the services in the 12 months preceding the claim. The Company shall not be liable for any indirect or consequential loss, including loss of profits or data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">7. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section className="pt-8 border-t border-stone-200">
          <p className="text-sm italic">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
