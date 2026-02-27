import React from 'react';

const COMPANY_DETAILS = {
  name: "Support services for disabled children",
  address: "124 City Road, London, EC1V 2NX, United Kingdom",
  crn: "12345678",
  email: "contact@supportservicesfordisabledchildren.co.uk"
};

export default function Terms() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <p className="text-slate-500 mb-12">Last updated: February 27, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the services provided by <strong>{COMPANY_DETAILS.name}</strong> ("the Company", "we", "us", "our"), a company registered in England and Wales under Company Registration Number {COMPANY_DETAILS.crn}. By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Services</h2>
            <p>
              We provide IT support, cybersecurity, cloud migration, and related technology services as described on our website and in specific service level agreements (SLAs). All services are provided with reasonable care and skill in accordance with UK industry standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Payment Terms</h2>
            <p>
              All fees are quoted in Pounds Sterling (GBP) and are subject to VAT at the prevailing UK rate. Monthly support fees are payable in advance via Direct Debit or bank transfer. Project-based work requires a 50% deposit unless otherwise agreed in writing. Late payments may incur interest at the rate of 8% above the Bank of England base rate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise agreed, all intellectual property rights in any software, documentation, or materials created by us during the provision of services shall remain our property. The client is granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of all sensitive information disclosed during the term of the agreement. This obligation survives the termination of the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by English law, our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <p className="text-sm">
              For any questions regarding these terms, please contact us at <strong>{COMPANY_DETAILS.email}</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
