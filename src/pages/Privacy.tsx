import { motion } from 'motion/react';

const COMPANY_DETAILS = {
  name: "Wickham Hall IT Services Ltd",
  address: "Wickham Hall, Hadham Road, Bishop's Stortford, Hertfordshire, CM23 1JG, United Kingdom",
  crn: "12849562",
  phone: "+44 (0) 1279 506000",
  email: "solutions@wickhamhall.it"
};

export default function Privacy() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Privacy Policy</h1>
          <p className="text-slate-500 mb-12">Last Updated: February 27, 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              At <strong>{COMPANY_DETAILS.name}</strong> ("Wickham Hall", "we", "us", or "our"), we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data in accordance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the Data Protection Act 2018.
            </p>
          </section>

          <section id="gdpr" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We may collect and process the following types of personal data:</p>
            <ul className="text-slate-600 list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and business address.</li>
              <li><strong>Professional Information:</strong> Job title, company name, and department.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and website usage data (via cookies).</li>
              <li><strong>Communication Data:</strong> Records of correspondence if you contact us.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We process your data for the following purposes:</p>
            <ul className="text-slate-600 list-disc pl-6 space-y-2">
              <li>To provide and manage the IT services you have requested.</li>
              <li>To respond to enquiries and provide customer support.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
              <li>To send marketing communications (where you have consented to receive them).</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Legal Basis for Processing</h2>
            <p className="text-slate-600 leading-relaxed mb-4">Our legal bases for processing data include:</p>
            <ul className="text-slate-600 list-disc pl-6 space-y-2">
              <li><strong>Contractual Necessity:</strong> To perform our agreement with you.</li>
              <li><strong>Legal Obligation:</strong> To comply with UK law.</li>
              <li><strong>Legitimate Interests:</strong> For the effective management of our business.</li>
              <li><strong>Consent:</strong> Where you have explicitly agreed to processing (e.g., marketing).</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the end of the business relationship.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">Under the UK GDPR, you have the following rights:</p>
            <ul className="text-slate-600 list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data.</li>
              <li><strong>Erasure:</strong> Request deletion of your data (the "right to be forgotten").</li>
              <li><strong>Restriction:</strong> Request that we limit the processing of your data.</li>
              <li><strong>Portability:</strong> Request transfer of your data to another provider.</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
            </ul>
            <p className="text-slate-600 mt-4">To exercise any of these rights, please contact our Data Protection Officer at <strong>{COMPANY_DETAILS.email}</strong>.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We have implemented robust technical and organisational security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. Our systems are ISO 27001 certified and we conduct regular security audits.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Third-Party Disclosures</h2>
            <p className="text-slate-600 leading-relaxed">
              We do not sell your personal data. We may share your data with trusted third-party service providers (e.g., cloud hosting partners) who assist us in delivering our services, provided they adhere to strict data protection standards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Complaints</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have a concern about our data practices, you have the right to make a complaint to the <strong>Information Commissioner's Office (ICO)</strong>, the UK supervisory authority for data protection issues (www.ico.org.uk).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              For any questions about this Privacy Policy or our data practices, please contact us at:<br /><br />
              <strong>{COMPANY_DETAILS.name}</strong><br />
              {COMPANY_DETAILS.address}<br />
              Email: {COMPANY_DETAILS.email}<br />
              Phone: {COMPANY_DETAILS.phone}
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
