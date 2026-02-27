import { COMPANY_DETAILS } from '../components/Footer';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. 
              This policy explains how we collect, use, and safeguard your information in accordance with the 
              UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email address, phone number, job title).</li>
              <li>Business information (company name, address).</li>
              <li>Technical data (IP address, browser type, usage patterns on our website).</li>
              <li>Communication records (emails, meeting notes, support tickets).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To respond to enquiries and provide support.</li>
              <li>To process payments and manage accounts.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Legal Basis for Processing</h2>
            <p>We process data based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contract:</strong> Necessary to perform our agreement with you.</li>
              <li><strong>Legitimate Interests:</strong> For business operations and marketing.</li>
              <li><strong>Legal Obligation:</strong> To comply with UK law.</li>
              <li><strong>Consent:</strong> Where you have explicitly agreed (e.g., for marketing).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, 
              typically for the duration of our business relationship plus 7 years for tax and legal purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience and analyse traffic. You can manage your 
              cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security Measures</h2>
            <p>
              We implement robust technical and organisational measures to protect your data, including 
              encryption, firewalls, and regular security audits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact our 
              Data Protection Officer at: <br />
              Email: {COMPANY_DETAILS.email} <br />
              Address: {COMPANY_DETAILS.address}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
