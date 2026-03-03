import { COMPANY_DETAILS } from '@/src/constants';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} ("we", "our", or "us") is committed to protecting and respecting your privacy. This policy explains how we collect, process, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Information you provide by filling in forms on our website (Name, Email, Company, Phone).</li>
              <li>Details of your visits to our site including, but not limited to, traffic data, location data, and other communication data.</li>
              <li>Technical information, including the IP address used to connect your computer to the internet, browser type, and version.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Purposes of Processing</h2>
            <p>We use information held about you in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our service.</li>
              <li>To ensure that content from our site is presented in the most effective manner for you and for your computer.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Your Rights</h2>
            <p>Under the UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to be informed about the collection and use of your personal data.</li>
              <li>The right of access to your personal data.</li>
              <li>The right to have inaccurate personal data rectified.</li>
              <li>The right to have personal data erased (the "right to be forgotten").</li>
              <li>The right to restrict processing of your personal data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Security Measures</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Contact Us</h2>
            <p>
              Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to {COMPANY_DETAILS.email} or by post to our registered office: {COMPANY_DETAILS.address}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
