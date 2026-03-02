import { motion } from 'motion/react';

const COMPANY_DETAILS = {
  name: "EMMA-LE-GRAND-CASE-MANAGEMENT",
  address: "124 City Road, London, EC1V 2NX, United Kingdom",
  crn: "12345678",
  email: "info@emmalegrandcasemanagement.co.uk"
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
          <h1 className="text-4xl mb-8">Privacy Policy</h1>
          <p className="text-slate-500 mb-8 italic">Last Updated: February 27, 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              {COMPANY_DETAILS.name} ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section className="mb-12" id="gdpr">
            <h2 className="text-2xl mb-4">2. Data We Collect</h2>
            <p className="text-slate-600 leading-relaxed">We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-4">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and business address.</li>
              <li><strong>Professional Information:</strong> Job title, company name, and industry.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and usage data collected via cookies.</li>
              <li><strong>Communication Data:</strong> Records of correspondence if you contact us.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">3. Purpose of Processing</h2>
            <p className="text-slate-600 leading-relaxed">We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-4">
              <li>To provide and manage the services you have requested.</li>
              <li>To respond to enquiries and provide technical support.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
              <li>With your consent, to send marketing communications.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">4. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the end of the business relationship.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">5. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed">Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-4">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct any inaccurate data.</li>
              <li><strong>Erasure:</strong> Request that we delete your personal data (the "right to be forgotten").</li>
              <li><strong>Restriction:</strong> Request that we restrict the processing of your data.</li>
              <li><strong>Portability:</strong> Request the transfer of your data to another party.</li>
              <li><strong>Objection:</strong> Object to the processing of your data for direct marketing.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">6. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">7. Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and partners who have a business need to know.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl mb-4">8. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data protection practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email} or write to us at our registered office address.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
