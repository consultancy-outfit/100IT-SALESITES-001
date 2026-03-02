import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="pt-20">
      <section className="bg-zinc-50 py-24 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-zinc-900 mb-6"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-zinc-600">Last Updated: March 2026</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-zinc max-w-none">
          <div className="space-y-12 text-zinc-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
              <p>
                Sterling Standard Care Group Liverpool ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, process, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Data We Collect</h2>
              <p>We may collect and process the following data about you:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Identity Data:</strong> Name, job title, and company name.</li>
                <li><strong>Contact Data:</strong> Email address, telephone number, and business address.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and usage data collected via cookies.</li>
                <li><strong>Communication Data:</strong> Records of your enquiries and correspondence with us.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. How We Use Your Data</h2>
              <p>We use your data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To provide and manage our IT services.</li>
                <li>To respond to your enquiries and provide technical support.</li>
                <li>To comply with legal and regulatory obligations.</li>
                <li>To improve our website and service offerings.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Standard retention for client records is 7 years after the termination of the contract.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Your Rights</h2>
              <p>Under the UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>The right to access your personal data.</li>
                <li>The right to rectification of inaccurate data.</li>
                <li>The right to erasure ('right to be forgotten').</li>
                <li>The right to restrict or object to processing.</li>
                <li>The right to data portability.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees, agents, and contractors who have a business need to know.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our data protection practices, please contact us at: <strong>sterlingstandardcaregroupliverpool.co.uk</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
