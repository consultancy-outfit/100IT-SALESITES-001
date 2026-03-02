import { motion } from 'framer-motion';

const COMPANY_DETAILS = {
  name: "Khalid Mehmood Khattak",
  brand: "Khattak IT Solutions",
  address: "160a Croydon Road, Caterham, England, CR3 6QE",
  crn: "17046244",
  phone: "0189 564 6130",
  email: "Info@mavyllodge.co.uk"
};

export default function Privacy() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-24 text-center text-white">
        <div className="section-padding">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Privacy <span className="text-indigo-400">Policy</span></h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        </div>
      </section>

      <section className="section-padding max-w-4xl mx-auto bg-white rounded-[3rem] -mt-16 relative z-20 shadow-xl border border-slate-200 p-12 md:p-20">
        <div className="prose prose-slate max-w-none space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              {COMPANY_DETAILS.name} ("we", "us", "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">2. Data Controller</h2>
            <p className="text-slate-600 leading-relaxed">
              For the purpose of data protection legislation, the data controller is {COMPANY_DETAILS.name}, with a registered office at {COMPANY_DETAILS.address}.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">3. Types of Data Collected</h2>
            <p className="text-slate-600 leading-relaxed">
              We may collect and process the following data about you:
            </p>
            <ul className="text-slate-600 space-y-2 list-disc pl-6">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and business address.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage information when you visit our website.</li>
              <li><strong>Communication Data:</strong> Records of correspondence if you contact us.</li>
              <li><strong>Service Data:</strong> Information required to provide our IT services to you.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">4. Purposes of Processing</h2>
            <p className="text-slate-600 leading-relaxed">
              We use your data for the following purposes:
            </p>
            <ul className="text-slate-600 space-y-2 list-disc pl-6">
              <li>To provide and manage our IT services.</li>
              <li>To communicate with you regarding your inquiries or services.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and user experience.</li>
              <li>To send you marketing communications (where you have consented).</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">5. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">6. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              Under the UK GDPR, you have the following rights:
            </p>
            <ul className="text-slate-600 space-y-2 list-disc pl-6">
              <li><strong>Access:</strong> The right to request a copy of the personal data we hold about you.</li>
              <li><strong>Rectification:</strong> The right to request that we correct any inaccurate data.</li>
              <li><strong>Erasure:</strong> The right to request that we delete your personal data.</li>
              <li><strong>Restriction:</strong> The right to request that we restrict the processing of your data.</li>
              <li><strong>Portability:</strong> The right to request the transfer of your data to another party.</li>
              <li><strong>Objection:</strong> The right to object to the processing of your data.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">7. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can manage your cookie preferences through your browser settings.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">8. Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees and third parties who have a business need to know.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">9. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data protection practices, please contact us at {COMPANY_DETAILS.email}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
