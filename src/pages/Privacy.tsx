import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '../constants';

export default function Privacy() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          <p className="text-slate-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              {COMPANY_DETAILS.name} ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, process, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We may collect and process the following data:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Contact information (name, email, phone number, address)</li>
              <li>Business information (job title, company name)</li>
              <li>Technical data (IP address, browser type, usage patterns via cookies)</li>
              <li>Communication records (emails, contact form submissions)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>To provide and manage our IT services</li>
              <li>To respond to enquiries and provide support</li>
              <li>To process payments and manage accounts</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To improve our website and service offerings</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Standard retention for client records is 7 years following the termination of the contract.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure ('right to be forgotten')</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website uses cookies to distinguish you from other users and improve your experience. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement robust technical and organizational measures to protect your data, including encryption, firewalls, and secure access controls. We are committed to maintaining Cyber Essentials standards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
            </p>
          </section>

          <div className="mt-20 pt-10 border-t border-slate-200">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Company Information</p>
            <p className="text-sm text-slate-600">{COMPANY_DETAILS.name}</p>
            <p className="text-sm text-slate-600">Registered Office: {COMPANY_DETAILS.address}</p>
            <p className="text-sm text-slate-600">CRN: {COMPANY_DETAILS.crn}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
