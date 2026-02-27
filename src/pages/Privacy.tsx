import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="pt-20">
      <section className="bg-slate-950 py-24 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last Updated: February 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl prose prose-slate prose-lg">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">1. Introduction</h2>
            <p className="text-slate-600 mb-8">
              Centenary Close ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, process, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR).
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">2. Data We Collect</h2>
            <p className="text-slate-600 mb-4">We may collect and process the following data:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-8">
              <li>Contact information (name, email, phone number).</li>
              <li>Professional information (job title, company name).</li>
              <li>Technical data (IP address, browser type) via cookies.</li>
              <li>Service-related data necessary for providing IT support.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">3. Purposes of Processing</h2>
            <p className="text-slate-600 mb-4">We use your data to:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-8">
              <li>Provide and manage our IT services.</li>
              <li>Respond to enquiries and provide quotes.</li>
              <li>Ensure the security of our systems and your data.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">4. Data Retention</h2>
            <p className="text-slate-600 mb-8">
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">5. Your Rights</h2>
            <p className="text-slate-600 mb-4">Under the UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-8">
              <li>Access your personal data.</li>
              <li>Request correction or erasure of your data.</li>
              <li>Object to or restrict processing.</li>
              <li>Data portability.</li>
              <li>Withdraw consent at any time.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">6. Cookies</h2>
            <p className="text-slate-600 mb-8">
              Our website uses cookies to distinguish you from other users and improve your experience. You can manage your cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">7. Security Measures</h2>
            <p className="text-slate-600 mb-8">
              We implement robust technical and organisational measures, including encryption and multi-factor authentication, to protect your data against unauthorised access or loss.
            </p>

            <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold mb-4">Contact Our Data Protection Lead</h3>
              <p className="text-sm text-slate-500">Email: info@centenaryclose.co.uk</p>
              <p className="text-sm text-slate-500">Company Name: Centenary Close</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
