import { COMPANY_DETAILS } from '../constants';

const Terms = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">Terms and Conditions</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the website and services provided by 
              {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By accessing our website or 
              engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales. <br />
              Registered Office: {COMPANY_DETAILS.address} <br />
              Company Registration Number: {COMPANY_DETAILS.crn}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Services</h2>
            <p>
              We provide IT consultancy, managed services, and software development. The specific 
              scope of work for any engagement will be defined in a separate Statement of Work (SOW) 
              or Service Level Agreement (SLA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Payment Terms</h2>
            <p>
              All fees are quoted in Pounds Sterling (£) and are exclusive of VAT unless otherwise stated. 
              Invoices are payable within 30 days of the invoice date. We reserve the right to charge 
              interest on late payments in accordance with the Late Payment of Commercial Debts 
              (Interest) Act 1998.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all intellectual property rights in materials 
              created by us during the provision of services shall remain our property. Upon full 
              payment of all fees, we grant the client a non-exclusive, perpetual licence to use 
              such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party 
              that is designated as confidential or which by its nature is clearly confidential. 
              This obligation shall survive the termination of any agreement for a period of 5 years.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Limitation of Liability</h2>
            <p>
              Our total liability for any claim arising out of or in connection with our services 
              shall be limited to the total fees paid by the client in the 12 months preceding the 
              claim. We shall not be liable for any indirect or consequential loss, including loss 
              of profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of 
              England and Wales. Any disputes shall be subject to the exclusive jurisdiction 
              of the courts of England and Wales.
            </p>
          </section>

          <p className="text-sm text-zinc-400 pt-8 border-t border-zinc-100">
            Last Updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
