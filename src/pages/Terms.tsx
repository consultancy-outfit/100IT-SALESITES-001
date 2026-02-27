import { COMPANY_DETAILS } from "../constants";

export default function Terms() {
  return (
    <div className="bg-white py-24">
      <div className="section-padding max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-12">Terms & Conditions</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <p className="text-sm font-bold text-slate-400">Last Updated: February 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services or using our website, you agree to be bound by these terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales. 
              <br /><strong>CRN:</strong> {COMPANY_DETAILS.crn}
              <br /><strong>Registered Office:</strong> {COMPANY_DETAILS.address}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. Services & Fees</h2>
            <p>
              All service descriptions and pricing are as stated on our website or in a formal proposal. All fees are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing UK rate unless otherwise stated.
            </p>
            <p>
              Payment terms are strictly 14 days from the date of invoice unless otherwise agreed in writing. We reserve the right to suspend services in the event of non-payment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">4. Intellectual Property</h2>
            <p>
              All intellectual property rights in the materials, software, and documentation provided by us remain the property of {COMPANY_DETAILS.name} or its licensors. You are granted a limited, non-exclusive license to use these materials solely for your internal business purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is designated as confidential or which ought reasonably to be treated as confidential. This obligation survives the termination of any service agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by English law, {COMPANY_DETAILS.name} shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities. Our total liability for any claim shall not exceed the total fees paid by you in the 12 months preceding the claim.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">7. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the English courts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
