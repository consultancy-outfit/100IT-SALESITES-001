import React from 'react';

const COMPANY_NAME = "SeeAbility Oxfordshire South Support Service";

export default function Terms() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>
        
        <div className="prose prose-slate max-w-none">
          <h3>1. Introduction</h3>
          <p>
            These Terms and Conditions govern the provision of IT services by {COMPANY_NAME} ("we", "us", "our") to the client ("you"). By engaging our services, you agree to be bound by these terms.
          </p>

          <h3>2. Services</h3>
          <p>
            We will provide the IT services as described in the relevant Service Agreement or Statement of Work. We aim to provide services with reasonable skill and care, in accordance with industry standards.
          </p>

          <h3>3. Fees and Payment</h3>
          <p>
            3.1. All fees are quoted in Great British Pounds (£) and are exclusive of VAT, which will be charged at the prevailing rate.<br/>
            3.2. Invoices are payable within 30 days of the invoice date unless otherwise agreed in writing.<br/>
            3.3. We reserve the right to charge interest on overdue amounts at a rate of 8% above the Bank of England base rate.
          </p>

          <h3>4. Client Obligations</h3>
          <p>
            You agree to provide us with access to your premises, systems, and data as reasonably required for us to perform the services. You are responsible for ensuring you have valid licenses for all software you use.
          </p>

          <h3>5. Intellectual Property</h3>
          <p>
            All intellectual property rights in any materials provided by us remain our property. Upon full payment, we grant you a non-exclusive license to use such materials for your internal business purposes.
          </p>

          <h3>6. Confidentiality</h3>
          <p>
            Both parties agree to keep confidential all information obtained from the other party that is marked confidential or would reasonably be considered confidential.
          </p>

          <h3>7. Limitation of Liability</h3>
          <p>
            7.1. Nothing in these terms excludes our liability for death or personal injury caused by negligence or for fraud.<br/>
            7.2. Our total liability to you in contract, tort (including negligence), or otherwise shall be limited to the total fees paid by you in the 12 months preceding the claim.<br/>
            7.3. We shall not be liable for any indirect or consequential loss, including loss of profit or data.
          </p>

          <h3>8. Data Protection</h3>
          <p>
            Both parties agree to comply with their respective obligations under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h3>9. Termination</h3>
          <p>
            Either party may terminate the agreement by giving the notice period specified in the Service Agreement. We may terminate immediately if you fail to pay invoices or commit a material breach of these terms.
          </p>

          <h3>10. Governing Law</h3>
          <p>
            These terms shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.
          </p>

          <h3>11. Company Information</h3>
          <p>
            <strong>Company Name:</strong> {COMPANY_NAME}<br/>
            <strong>Registered Office:</strong> N/A<br/>
            <strong>Company Registration Number:</strong> N/A<br/>
            <strong>Email:</strong> N/A
          </p>
        </div>
      </div>
    </div>
  );
}
