import { COMPANY_DETAILS } from '../constants';

export default function Privacy() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Data Controller</h2>
            <p>{COMPANY_DETAILS.name} is the data controller responsible for your personal data. Our registered office is at {COMPANY_DETAILS.address}.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data: Name, title.</li>
              <li>Contact Data: Email address, phone number, business address.</li>
              <li>Technical Data: IP address, browser type, usage data via cookies.</li>
              <li>Service Data: Details about the IT services you have purchased from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Purposes of Processing</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage our IT services.</li>
              <li>Process payments and manage accounts.</li>
              <li>Communicate with you regarding service updates or enquiries.</li>
              <li>Comply with legal and regulatory obligations (e.g., UK GDPR).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Data Retention</h2>
            <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, this is 6 years following the end of a contract.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Your Rights</h2>
            <p>Under the UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction or erasure of your data.</li>
              <li>Object to or restrict the processing of your data.</li>
              <li>Request the transfer of your data (data portability).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Cookies</h2>
            <p>Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and third parties who have a business need to know.</p>
          </section>

          <div className="pt-8 border-t border-slate-200 text-sm">
            <p>Last updated: February 2026</p>
            <p>For any privacy-related enquiries, please contact us at {COMPANY_DETAILS.email}.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
