import { COMPANY_DETAILS } from '../components/Footer';

export default function Terms() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us"). 
              By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales. <br />
              Registered Office: {COMPANY_DETAILS.address} <br />
              Company Registration Number: {COMPANY_DETAILS.crn}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services</h2>
            <p>
              We provide IT support, cybersecurity, cloud services, and consultancy as detailed in our service agreements. 
              Specific service levels (SLAs) will be defined in individual client contracts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
            <p>
              All financial references and invoices are in Pounds Sterling (£/GBP). 
              Invoices are subject to VAT at the prevailing UK rate (currently 20%). 
              Standard payment terms are 14 days from the date of invoice unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p>
              All intellectual property rights in materials created by the Company during the provision of services 
              remain the property of the Company until full payment is received, at which point a non-exclusive 
              licence is granted to the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of all sensitive business information shared during 
              the course of the engagement. This obligation survives the termination of any agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by English law, our liability for any claim arising out of our services 
              shall be limited to the total fees paid by the client in the 12 months preceding the claim. 
              We are not liable for indirect or consequential losses, including loss of profit or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
