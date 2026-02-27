import React from 'react';

const COMPANY_DETAILS = {
  name: "HCF The Springs",
  address: "The Springs Business Park, Unit 12, Leeds, LS15 8GB, United Kingdom",
  crn: "12345678",
  phone: "+44 (0) 113 456 7890",
  email: "info@hcfthesprings.co.uk"
};

export default function Terms() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <p className="text-slate-500 mb-12">Last Updated: February 27, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By accessing our website or engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
              <strong>Company Registration Number:</strong> {COMPANY_DETAILS.crn}<br />
              <strong>Registered Office:</strong> {COMPANY_DETAILS.address}<br />
              <strong>Email:</strong> {COMPANY_DETAILS.email}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services</h2>
            <p>
              We provide IT managed services, consulting, cybersecurity, and cloud solutions. The specific scope of work for any engagement will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
            <p>
              All financial references and payments must be in Great British Pounds (£). Invoices are typically issued monthly in advance for managed services and are payable within 14 days of the invoice date unless otherwise agreed in writing. Late payments may incur interest at the rate of 8% above the Bank of England base rate. All prices are subject to VAT at the prevailing UK rate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p>
              All intellectual property rights in the materials, software, and documentation provided by us remain our property or the property of our licensors. You are granted a non-exclusive, non-transferable license to use such materials solely for your internal business purposes during the term of our engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all non-public information received from the other party that is marked as confidential or should reasonably be understood to be confidential. This obligation survives the termination of any agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by you in the 12 months preceding the claim. We shall not be liable for any indirect, consequential, or special losses, including loss of profit or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
            <p>
              These Terms and Conditions and any dispute or claim arising out of them shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
