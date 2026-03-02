import { motion } from 'motion/react';

const COMPANY_DETAILS = {
  name: "Fradel Lodge",
  address: "1 Highfield, Love Lane, Kings Langley, United Kingdom, WD4 9JT",
  crn: "17048754",
  phone: "0208 088 5683",
  email: "info@fradellodge.co.uk"
};

export default function Terms() {
  return (
    <div className="bg-stone-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 lg:p-20 rounded-[3rem] shadow-sm border border-stone-200"
        >
          <h1 className="text-4xl font-bold text-stone-900 mb-8">Terms and Conditions</h1>
          <p className="text-stone-500 mb-12">Last Updated: March 2026</p>

          <div className="prose prose-stone max-w-none space-y-8 text-stone-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Introduction</h2>
              <p>
                These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services, you agree to be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Company Information</h2>
              <p>
                {COMPANY_DETAILS.name} is a company registered in England and Wales with company registration number {COMPANY_DETAILS.crn}. Our registered office is at {COMPANY_DETAILS.address}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">3. Services</h2>
              <p>
                We provide IT consultancy, managed services, cybersecurity, and software development. The specific scope of work will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Payment Terms</h2>
              <p>
                All fees are quoted in Pounds Sterling (£) and exclude VAT unless otherwise stated. Invoices are payable within 30 days of the invoice date. Late payments may incur interest at the rate of 8% above the Bank of England base rate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">5. Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, all intellectual property rights in any materials, software, or documentation created by us during the provision of services shall remain our property. The client is granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">6. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which by its nature should be considered confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">7. Limitation of Liability</h2>
              <p>
                Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client for the specific service giving rise to the claim in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">8. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
