import { motion } from 'motion/react';

const COMPANY_DETAILS = {
  name: "Wickham Hall IT Services Ltd",
  address: "Wickham Hall, Hadham Road, Bishop's Stortford, Hertfordshire, CM23 1JG, United Kingdom",
  crn: "12849562",
  phone: "+44 (0) 1279 506000",
  email: "solutions@wickhamhall.it"
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
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Terms and Conditions</h1>
          <p className="text-slate-500 mb-12">Last Updated: February 27, 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms and Conditions ("Terms") govern the relationship between <strong>{COMPANY_DETAILS.name}</strong> ("Wickham Hall", "we", "us", or "our") and the client ("Client", "you", or "your") for the provision of IT services, consultancy, and managed solutions. By engaging our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Information</h2>
            <ul className="text-slate-600 space-y-2">
              <li><strong>Company Name:</strong> {COMPANY_DETAILS.name}</li>
              <li><strong>Registered Office:</strong> {COMPANY_DETAILS.address}</li>
              <li><strong>Company Registration Number (CRN):</strong> {COMPANY_DETAILS.crn}</li>
              <li><strong>Registered in:</strong> England and Wales</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services</h2>
            <p className="text-slate-600 leading-relaxed">
              The specific scope of services, deliverables, and service level agreements (SLAs) will be defined in a separate Statement of Work (SOW) or Service Agreement signed by both parties. We will perform the services with reasonable care and skill, in accordance with industry best practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All fees are quoted in <strong>Pounds Sterling (£ / GBP)</strong> and are subject to VAT at the prevailing rate.
            </p>
            <ul className="text-slate-600 list-disc pl-6 space-y-2">
              <li>Managed service fees are invoiced monthly in advance.</li>
              <li>Project-based fees are invoiced according to the milestones defined in the SOW.</li>
              <li>Payment is due within 14 days of the invoice date unless otherwise specified.</li>
              <li>We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              Unless otherwise agreed in writing, all intellectual property rights in materials created by Wickham Hall during the provision of services shall remain the property of Wickham Hall. Upon full payment of all fees, the Client is granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
            <p className="text-slate-600 leading-relaxed">
              Both parties agree to keep confidential all non-public information disclosed by the other party during the term of the agreement. This obligation survives the termination of the agreement for a period of five years.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, Wickham Hall's total liability for any claim arising out of or in connection with the services shall be limited to the total fees paid by the Client in the 12 months preceding the claim. We shall not be liable for any indirect, consequential, or economic loss, including loss of profits or data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms and any dispute or claim arising out of them shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>. The parties irrevocably agree that the courts of England and Wales shall have exclusive jurisdiction.
            </p>
          </section>

          <section id="cookies" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Cookie Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website uses cookies to enhance user experience and analyse traffic. By using our website, you consent to our use of cookies in accordance with our Privacy Policy. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact</h2>
            <p className="text-slate-600 leading-relaxed">
              For any questions regarding these Terms, please contact us at <strong>{COMPANY_DETAILS.email}</strong> or by post at our registered office address.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
