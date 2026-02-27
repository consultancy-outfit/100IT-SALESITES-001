import { COMPANY_DETAILS } from "../constants";

export default function Privacy() {
  return (
    <div className="bg-white py-24">
      <div className="section-padding max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-12">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <p className="text-sm font-bold text-slate-400">Last Updated: February 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Overview</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. Data We Collect</h2>
            <p>We may collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (Name, email, phone number, business address)</li>
              <li>Technical data (IP address, browser type, device information)</li>
              <li>Usage data (How you use our website and services)</li>
              <li>Communication records (Emails, support tickets, meeting notes)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. Purposes of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services</li>
              <li>To communicate with you regarding support and enquiries</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To improve our website and service offerings</li>
              <li>To send marketing communications (where you have consented)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">4. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, this is 7 years following the termination of a contract.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">5. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure ('right to be forgotten')</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>
            <p>To exercise any of these rights, please contact us at {COMPANY_DETAILS.email}.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">6. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings. For more information, please request our full Cookie Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">7. Security Measures</h2>
            <p>
              We have implemented robust technical and organizational security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. This includes encryption, firewalls, and secure access controls.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at:
              <br /><strong>Email:</strong> {COMPANY_DETAILS.email}
              <br /><strong>Address:</strong> {COMPANY_DETAILS.address}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
