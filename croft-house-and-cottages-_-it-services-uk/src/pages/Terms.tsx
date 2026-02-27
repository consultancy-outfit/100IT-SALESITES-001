import { COMPANY_DETAILS } from '../constants';

export default function Terms() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Introduction</h2>
            <p>These terms and conditions govern the use of IT services provided by {COMPANY_DETAILS.name} ("the Company"). By engaging our services, you agree to be bound by these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Services</h2>
            <p>The Company provides managed IT services, consultancy, and digital solutions as specified in the agreed Service Level Agreement (SLA) or Proposal. We reserve the right to modify our service offerings at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Payment Terms</h2>
            <p>All fees are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing UK rate. Invoices are payable within 14 days of issue unless otherwise agreed in writing. Late payments may incur interest at a rate of 8% above the Bank of England base rate.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Intellectual Property</h2>
            <p>Unless otherwise agreed, all intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company. The Client is granted a non-exclusive license to use such materials for their internal business purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Confidentiality</h2>
            <p>Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which by its nature should be treated as such.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, the Company's total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the Client in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Governing Law</h2>
            <p>These terms and conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <div className="pt-8 border-t border-slate-200 text-sm">
            <p>Last updated: February 2026</p>
            <p>{COMPANY_DETAILS.name} | Registered Office: {COMPANY_DETAILS.address} | CRN: {COMPANY_DETAILS.crn}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
