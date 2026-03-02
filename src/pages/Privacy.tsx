import { motion } from 'motion/react';

const COMPANY_DETAILS = {
  name: "Fradel Lodge",
  address: "1 Highfield, Love Lane, Kings Langley, United Kingdom, WD4 9JT",
  crn: "17048754",
  phone: "0208 088 5683",
  email: "info@fradellodge.co.uk"
};

export default function Privacy() {
  return (
    <div className="bg-stone-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 lg:p-20 rounded-[3rem] shadow-sm border border-stone-200"
        >
          <h1 className="text-4xl font-bold text-stone-900 mb-8">Privacy Policy</h1>
          <p className="text-stone-500 mb-12">Last Updated: March 2026</p>

          <div className="prose prose-stone max-w-none space-y-8 text-stone-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Introduction</h2>
              <p>
                {COMPANY_DETAILS.name} is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Data We Collect</h2>
              <p>We may collect and process the following data about you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identity Data: Name, job title.</li>
                <li>Contact Data: Email address, phone number, business address.</li>
                <li>Technical Data: IP address, browser type, time zone setting, and other technology on the devices you use to access this website.</li>
                <li>Usage Data: Information about how you use our website and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">3. How We Use Your Data</h2>
              <p>We use your data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and manage our services.</li>
                <li>To communicate with you regarding enquiries or contracts.</li>
                <li>To improve our website and user experience.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">5. Your Rights</h2>
              <p>Under UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal data.</li>
                <li>The right to rectification of inaccurate data.</li>
                <li>The right to erasure ('right to be forgotten').</li>
                <li>The right to restrict processing.</li>
                <li>The right to data portability.</li>
                <li>The right to object to processing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">6. Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">7. Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our data protection practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
