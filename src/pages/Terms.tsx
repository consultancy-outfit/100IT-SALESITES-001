import { COMPANY_DETAILS } from "../constants";

export default function Terms() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the website and services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By accessing our website or engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales. 
              <br />CRN: {COMPANY_DETAILS.crn}
              <br />Registered Office: {COMPANY_DETAILS.address}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services & Payments</h2>
            <p>
              All service descriptions and pricing on this website are for informational purposes. Formal engagement requires a signed Service Level Agreement (SLA).
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All financial references and payments are in Great British Pounds (£/GBP).</li>
              <li>Prices quoted are exclusive of VAT unless otherwise stated.</li>
              <li>Payment terms are strictly 30 days from the date of invoice unless otherwise agreed in writing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of {COMPANY_DETAILS.name} or its content suppliers and is protected by UK and international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client data and business information. Both parties agree not to disclose confidential information to third parties without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {COMPANY_DETAILS.name} shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
