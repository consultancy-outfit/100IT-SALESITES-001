import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Terms = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Terms and Conditions</h1>
        <p className="text-gray-500 mb-12">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

        <div className="prose prose-indigo max-w-none space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services or using our website, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
              Registered Office: {COMPANY_DETAILS.address}<br />
              Company Registration Number: {COMPANY_DETAILS.crn}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services</h2>
            <p>
              We provide various IT services, including but not limited to Managed IT Support, Cybersecurity, Cloud Migration, and IT Consultancy. The specific scope of services will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) for each client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <p>
              All prices are quoted in Great British Pounds (GBP £) and are exclusive of VAT at the prevailing rate unless otherwise stated. Payment for managed services is typically due monthly in advance via Direct Debit. Project-based work requires a 50% deposit upon commencement, with the balance due upon completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all intellectual property rights in materials created by us during the provision of services remain our property. Clients are granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all sensitive information disclosed during the course of the business relationship. This obligation survives the termination of any agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, our liability for any claim arising out of the provision of services shall be limited to the total fees paid by the client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of {COMPANY_DETAILS.governingLaw}. Any disputes shall be subject to the exclusive jurisdiction of the courts of {COMPANY_DETAILS.governingLaw}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
