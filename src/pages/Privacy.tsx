import { COMPANY_DETAILS } from '../constants';

const Privacy = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">Privacy Policy</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your 
              personal data. This policy explains how we collect, use, and protect your information 
              in accordance with the UK General Data Protection Regulation (UK GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Data We Collect</h2>
            <p>We may collect the following types of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number, business address).</li>
              <li>Professional information (job title, company name).</li>
              <li>Technical data (IP address, browser type, usage data via cookies).</li>
              <li>Communication history between you and our team.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Purposes of Processing</h2>
            <p>We process your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To respond to enquiries and provide support.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
              <li>With your consent, to send marketing communications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for 
              which it was collected, including for the purposes of satisfying any legal, 
              accounting, or reporting requirements. Typically, this is 7 years following the 
              end of a client relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ('right to be forgotten').</li>
              <li>The right to restrict or object to processing.</li>
              <li>The right to data portability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can manage your 
              cookie preferences through your browser settings. For more information, please 
              request our full Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Security Measures</h2>
            <p>
              We have implemented robust technical and organisational security measures to prevent 
              your personal data from being accidentally lost, used, or accessed in an 
              unauthorised way. This includes encryption, firewalls, and secure access controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please 
              contact our Data Protection Officer at: <br />
              Email: {COMPANY_DETAILS.email} <br />
              Address: {COMPANY_DETAILS.address}
            </p>
          </section>

          <p className="text-sm text-zinc-400 pt-8 border-t border-zinc-100">
            Last Updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
