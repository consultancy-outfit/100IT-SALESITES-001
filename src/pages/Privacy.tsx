import { COMPANY_DETAILS } from '../constants/config';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Overview</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. 
              This policy explains how we collect, use, and safeguard your information in compliance with the 
              UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data: Name, job title, company name.</li>
              <li>Contact Data: Email address, phone number, business address.</li>
              <li>Technical Data: IP address, browser type, usage data via cookies.</li>
              <li>Service Data: Details of services you have purchased from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Purposes of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To communicate with you regarding enquiries or support tickets.</li>
              <li>To process payments and manage accounts.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, 
              client data is retained for 7 years after the end of the business relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Your Rights</h2>
            <p>Under the UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ('right to be forgotten').</li>
              <li>The right to restrict or object to processing.</li>
              <li>The right to data portability.</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, please contact us at {COMPANY_DETAILS.email}.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users and provide a better experience. 
              You can set your browser to refuse all or some browser cookies, but this may affect the 
              functionality of some parts of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being 
              accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal 
              data to those employees and partners who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data protection practices, please contact:<br />
              <strong>Data Protection Officer</strong><br />
              {COMPANY_DETAILS.name}<br />
              {COMPANY_DETAILS.address}<br />
              Email: {COMPANY_DETAILS.email}
            </p>
          </section>

          <p className="text-sm text-slate-400 pt-8 border-t border-slate-100">
            Last Updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
}
