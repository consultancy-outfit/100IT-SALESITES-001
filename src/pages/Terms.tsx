import React from 'react';

const Terms = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of the services provided by Walfinch IT Solutions Ltd, trading as Walfinch Eastbourne ("the Company", "we", "us", "our"). By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Details</h2>
            <p>
              Walfinch Eastbourne is a trading name of Walfinch IT Solutions Ltd.<br />
              Registered Office: Unit 4, Eastbourne Business Park, Eastbourne, East Sussex, BN23 6PW<br />
              Company Registration Number: 12345678 (Registered in England & Wales)<br />
              VAT Number: GB 123 4567 89
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services</h2>
            <p>
              The scope of services will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW). We reserve the right to modify or discontinue services with appropriate notice as defined in the specific service contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All prices are quoted in Pounds Sterling (£ / GBP).</li>
              <li>Invoices are subject to VAT at the prevailing UK rate unless otherwise stated.</li>
              <li>Managed service invoices are payable monthly in advance via Direct Debit or BACS.</li>
              <li>Project-based invoices are payable as per the milestones defined in the SOW.</li>
              <li>Late payments may incur interest at a rate of 8% above the Bank of England base rate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p>
              All intellectual property rights in the materials provided by the Company shall remain the property of the Company or its licensors. Upon full payment, the Client is granted a non-exclusive, non-transferable license to use the deliverables for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all non-public information obtained during the course of the engagement. This obligation survives the termination of any service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by English law, the Company's total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the Client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
            <p>
              These Terms and Conditions and any dispute or claim arising out of them shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.
            </p>
          </section>

          <p className="text-sm text-slate-400 pt-8 border-t border-slate-100">
            Last Updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
