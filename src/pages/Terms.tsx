import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Terms = () => {
  return (
    <div className="bg-white py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
              Registered Office: {COMPANY_DETAILS.address}<br />
              Company Registration Number: {COMPANY_DETAILS.crn}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Services</h2>
            <p>
              The Company provides IT support, consultancy, and managed technology services. The specific scope of services will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) provided to the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Payment Terms</h2>
            <p>
              All fees are quoted in Pounds Sterling (£) and are subject to VAT at the prevailing UK rate. Unless otherwise agreed in writing, invoices are payable within 14 days of the invoice date. Late payments may incur interest at the rate prescribed by the Late Payment of Commercial Debts (Interest) Act 1998.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Intellectual Property</h2>
            <p>
              All intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company unless otherwise agreed in writing. The Client is granted a non-exclusive, non-transferable licence to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as confidential. This obligation survives the termination of any service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the Company's total liability to the Client for any claim arising out of or in connection with the services shall be limited to the total fees paid by the Client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
