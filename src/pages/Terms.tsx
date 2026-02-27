import { COMPANY_DETAILS } from '../constants/config';

export default function Terms() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). 
              By engaging our services or using our website, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
              <strong>Company Registration Number (CRN):</strong> {COMPANY_DETAILS.crn}<br />
              <strong>Registered Office:</strong> {COMPANY_DETAILS.address}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Services and Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All service fees are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate.</li>
              <li>Payment terms are strictly 30 days from the date of invoice unless otherwise agreed in writing.</li>
              <li>We reserve the right to suspend services in the event of non-payment.</li>
              <li>Managed service contracts typically carry a minimum term of 12 months.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
            <p>
              All intellectual property rights in materials produced by us in the course of providing services shall remain our property 
              unless otherwise agreed. The client is granted a non-exclusive license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the 
              term of the engagement. This obligation survives the termination of any contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {COMPANY_DETAILS.name} shall not be liable for any indirect, consequential, 
              or special damages, including loss of profits or data, arising out of the provision of services. Our total liability 
              is limited to the fees paid by the client in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be 
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <p className="text-sm text-slate-400 pt-8 border-t border-slate-100">
            Last Updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
}
