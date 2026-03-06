import { COMPANY_DETAILS } from '../constants';

export const Terms = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-slate-400">Last updated: February 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-2xl font-bold mb-6">1. Introduction</h2>
          <p className="mb-6">
            These Terms and Conditions govern your use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", or "our"). By engaging our services or using our website, you agree to comply with and be bound by these terms.
          </p>

          <h2 className="text-2xl font-bold mb-6">2. Company Details</h2>
          <p className="mb-6">
            {COMPANY_DETAILS.name} is a company registered in Scotland with Company Registration Number {COMPANY_DETAILS.crn}. Our registered office is located at {COMPANY_DETAILS.address}.
          </p>

          <h2 className="text-2xl font-bold mb-6">3. Services & Quotations</h2>
          <p className="mb-6">
            All services provided are subject to a formal proposal or Service Level Agreement (SLA). Quotations are valid for 30 days from the date of issue. We reserve the right to amend pricing if the scope of work changes significantly.
          </p>

          <h2 className="text-2xl font-bold mb-6">4. Payment Terms</h2>
          <p className="mb-6">
            All financial references are in Pounds Sterling (£). Invoices are payable within 14 days of the invoice date unless otherwise specified in your SLA. Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998. All prices are subject to VAT at the prevailing UK rate.
          </p>

          <h2 className="text-2xl font-bold mb-6">5. Intellectual Property</h2>
          <p className="mb-6">
            Unless otherwise agreed in writing, all intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company until full payment is received, at which point a non-exclusive license is granted to the client.
          </p>

          <h2 className="text-2xl font-bold mb-6">6. Confidentiality</h2>
          <p className="mb-6">
            Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the course of the business relationship. This obligation survives the termination of any agreement.
          </p>

          <h2 className="text-2xl font-bold mb-6">7. Limitation of Liability</h2>
          <p className="mb-6">
            To the maximum extent permitted by law, the Company's total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client for the specific service giving rise to the claim in the 12 months preceding the event.
          </p>

          <h2 className="text-2xl font-bold mb-6">8. Governing Law</h2>
          <p className="mb-6">
            These terms shall be governed by and construed in accordance with the laws of Scotland. Any disputes arising shall be subject to the exclusive jurisdiction of the Scottish courts.
          </p>
        </div>
      </section>
    </div>
  );
};
