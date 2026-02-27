import { COMPANY_DETAILS } from '../constants';

export default function Terms() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-indigo">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <p className="text-sm text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
          <p className="text-slate-700 mb-4">
            These Terms and Conditions govern the provision of IT services by {COMPANY_DETAILS.name} ("we", "us", "our") to the client ("you", "your"). By engaging our services, you agree to be bound by these terms.
          </p>
          <p className="text-slate-700">
            <strong>Company Details:</strong><br />
            {COMPANY_DETAILS.name}<br />
            Registered Office: {COMPANY_DETAILS.address}<br />
            Company Registration Number: {COMPANY_DETAILS.crn}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Services</h2>
          <p className="text-slate-700 mb-4">
            We shall provide the IT services as specified in the agreed proposal or Service Level Agreement (SLA). We reserve the right to modify or improve our service delivery methods provided such changes do not materially degrade the service quality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Payment Terms</h2>
          <p className="text-slate-700 mb-4">
            All fees are quoted in Pounds Sterling (£) and are exclusive of Value Added Tax (VAT), which will be charged at the prevailing UK rate.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Invoices for managed services are issued monthly in advance.</li>
            <li>Project work may require a deposit, with the balance due upon completion.</li>
            <li>Payment is due strictly within 30 days of the invoice date.</li>
            <li>We reserve the right to charge statutory interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Intellectual Property</h2>
          <p className="text-slate-700 mb-4">
            Unless otherwise agreed in writing, all intellectual property rights arising from the services provided (including custom scripts, configurations, and documentation) remain the property of {COMPANY_DETAILS.name}. You are granted a non-exclusive, non-transferable license to use these deliverables solely for your internal business operations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Confidentiality</h2>
          <p className="text-slate-700 mb-4">
            Both parties agree to keep strictly confidential all technical, commercial, and financial information obtained from the other party during the course of the engagement. This obligation survives the termination of any agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Limitation of Liability</h2>
          <p className="text-slate-700 mb-4">
            Nothing in these terms limits liability for death or personal injury caused by negligence, or for fraud.
          </p>
          <p className="text-slate-700 mb-4">
            Subject to the above, our total aggregate liability to you in respect of all losses arising under or in connection with the contract shall not exceed 100% of the total fees paid by you to us in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, loss of profit, loss of business, or loss of data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Governing Law</h2>
          <p className="text-slate-700 mb-4">
            These Terms and Conditions and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the law of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.
          </p>
        </section>
      </div>
    </div>
  );
}
