import { COMPANY_DETAILS } from "../constants";

export default function Privacy() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-12 italic">Last Updated: February 27, 2026</p>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and safeguard your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number, business address).</li>
              <li>Business information (job title, company name).</li>
              <li>Technical data (IP address, browser type, usage data via cookies).</li>
              <li>Communication records (emails, support tickets, meeting notes).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To respond to enquiries and provide technical support.</li>
              <li>To process payments and manage accounts.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the termination of the service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience and analyse traffic. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security</h2>
            <p>
              We implement robust technical and organisational measures to protect your data, including encryption, firewalls, and secure access controls.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <p className="font-bold text-slate-900">Contact our Data Protection Officer:</p>
            <p>Email: {COMPANY_DETAILS.email}</p>
            <p>Address: {COMPANY_DETAILS.address}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
