import React from 'react';

const COMPANY_DETAILS = {
  name: "Sense supported living services Lincolnshire",
  address: "[Address To Be Confirmed]",
  crn: "[CRN To Be Confirmed]",
  phone: "[Phone To Be Confirmed]",
  email: "[Email To Be Confirmed]"
};

const Terms = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <p className="text-slate-500 mb-12">Last Updated: March 2024</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the provision of IT services and the use of the website by clients of {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services or using our website, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
              <strong>Registered Office:</strong> {COMPANY_DETAILS.address}<br />
              <strong>Company Registration Number (CRN):</strong> {COMPANY_DETAILS.crn}<br />
              <strong>Official Email:</strong> {COMPANY_DETAILS.email}
            </p>
          </section>

          <section id="payment">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Fees and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All fees are quoted in Pounds Sterling (GBP £) and are subject to VAT at the prevailing UK rate.</li>
              <li>Managed service invoices are issued monthly in advance and are due for payment within 14 days of the invoice date.</li>
              <li>Project-based work requires a 50% deposit before commencement, with the balance due upon completion.</li>
              <li>Late payments may incur interest at a rate of 8% above the Bank of England base rate, as per the Late Payment of Commercial Debts (Interest) Act 1998.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              All intellectual property rights in the materials, software, and documentation provided by us remain our property or the property of our licensors. Clients are granted a non-exclusive, non-transferable licence to use such materials solely for their internal business purposes during the term of the agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as such. This obligation survives the termination of any service agreement.
            </p>
          </section>

          <section id="liability">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client in the 12 months preceding the claim. We shall not be liable for any indirect, consequential, or special losses, including loss of profit or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Termination</h2>
            <p>
              Either party may terminate a managed service agreement by providing 90 days' written notice. We reserve the right to suspend or terminate services immediately if fees remain unpaid or if these terms are breached.
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
};

export default Terms;
