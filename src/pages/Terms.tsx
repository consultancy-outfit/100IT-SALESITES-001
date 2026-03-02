import { motion } from 'motion/react';

const COMPANY_DETAILS = {
  name: "EMMA-LE-GRAND-CASE-MANAGEMENT",
  address: "124 City Road, London, EC1V 2NX, United Kingdom",
  crn: "12345678",
  email: "info@emmalegrandcasemanagement.co.uk"
};

export default function Terms() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-4xl mb-8">Terms and Conditions</h1>
          <p className="text-slate-500 mb-8 italic">Last Updated: February 27, 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms and Conditions ("Terms") govern the use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"), a company registered in England and Wales with Company Registration Number {COMPANY_DETAILS.crn}, having its registered office at {COMPANY_DETAILS.address}.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              By engaging our services or using our website, you agree to be bound by these Terms. If you do not agree, please refrain from using our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">2. Services</h2>
            <p className="text-slate-600 leading-relaxed">
              The Company provides IT consultancy, managed services, software development, and case management solutions. The specific scope of work for any engagement will be outlined in a separate Service Level Agreement (SLA) or Statement of Work (SOW).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">3. Fees and Payment</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>All fees are quoted in Pounds Sterling (£) and are exclusive of VAT unless otherwise stated.</li>
              <li>Invoices are payable within 30 days of the invoice date unless otherwise agreed in writing.</li>
              <li>We reserve the right to charge interest on late payments at a rate of 8% above the Bank of England base rate.</li>
              <li>Subscription-based services are billed monthly or annually in advance.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">4. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company until all fees are paid in full, at which point a non-exclusive, perpetual license is granted to the Client for their internal business use.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">5. Confidentiality</h2>
            <p className="text-slate-600 leading-relaxed">
              Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which by its nature should be considered confidential. This obligation survives the termination of any agreement for a period of five years.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, the Company's total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the Client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">7. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">8. Contact</h2>
            <p className="text-slate-600 leading-relaxed">
              For any questions regarding these Terms, please contact us at {COMPANY_DETAILS.email}.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
