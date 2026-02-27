import { COMPANY_DETAILS } from "../constants";

export default function Terms() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <p className="text-slate-500 mb-12 italic">Last Updated: February 27, 2026</p>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
            <p>
              The scope of IT services, support levels, and deliverables will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) signed by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All fees are quoted in Pounds Sterling (GBP) and are subject to VAT at the prevailing rate.</li>
              <li>Monthly support fees are payable in advance via Direct Debit or Standing Order.</li>
              <li>Project-based work requires a 50% deposit before commencement, with the balance due upon completion.</li>
              <li>Invoices are due within 14 days of the invoice date unless otherwise agreed in writing.</li>
              <li>Late payments may incur interest at a rate of 8% above the Bank of England base rate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              All intellectual property rights in tools, scripts, and methodologies used by the Company remain our property. Any custom software or configurations developed specifically for the Client will be licensed to the Client upon full payment of all relevant fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep all business, technical, and financial information received from the other party strictly confidential during and after the term of the agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the Company's total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the Client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <p className="font-bold text-slate-900">Company Details:</p>
            <p>{COMPANY_DETAILS.name}</p>
            <p>Registered Office: {COMPANY_DETAILS.address}</p>
            <p>Company Registration Number: {COMPANY_DETAILS.crn}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
