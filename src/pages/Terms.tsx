import { COMPANY_DETAILS } from "../constants";

export function Terms() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p className="font-bold">Last Updated: March 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"), a company registered in England and Wales under company number {COMPANY_DETAILS.crn}, with its registered office at {COMPANY_DETAILS.address}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
            <p>
              The Company provides IT services including but not limited to managed support, cybersecurity, cloud solutions, and consultancy. The specific scope of services will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) agreed upon with the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
            <p>
              All prices are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate unless otherwise stated. Invoices are payable within 14 days of the date of issue unless alternative terms are agreed in writing. We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              All intellectual property rights in any materials, software, or documentation created by the Company during the provision of services remain the property of the Company unless otherwise agreed in writing. The client is granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all non-public information disclosed by the other party during the course of the business relationship. This obligation survives the termination of any agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the Company's total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client for the specific service in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms, please contact us at {COMPANY_DETAILS.email} or by post at our registered office address.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
