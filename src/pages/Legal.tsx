import { useLocation } from 'react-router-dom';

export default function Legal() {
  const { pathname } = useLocation();
  const isPrivacy = pathname === '/privacy';

  return (
    <div className="bg-white py-20">
      <div className="container-custom max-w-4xl">
        <div className="prose prose-slate prose-lg max-w-none">
          {isPrivacy ? (
            <div className="space-y-8">
              <h1 className="text-4xl font-bold mb-10">Privacy Policy</h1>
              <p className="text-slate-500 italic">Last Updated: March 2026</p>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p>
                  Shauna HealthCare Services Solutions North East ("we", "our", or "us") is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
                <p>We may collect and process the following data about you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Information you provide by filling in forms on our website (e.g., name, email, phone number, company).</li>
                  <li>If you contact us, we may keep a record of that correspondence.</li>
                  <li>Details of your visits to our site including, but not limited to, traffic data, location data, and other communication data.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Purposes of Processing</h2>
                <p>We use information held about you in the following ways:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide you with information, products, or services that you request from us.</li>
                  <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
                  <li>To notify you about changes to our service.</li>
                  <li>To ensure that content from our site is presented in the most effective manner for you and for your computer.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
                <p>
                  We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Your Rights (GDPR)</h2>
                <p>Under the GDPR, you have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to be informed about the collection and use of your personal data.</li>
                  <li>The right of access to your personal data.</li>
                  <li>The right to have inaccurate personal data rectified.</li>
                  <li>The right to have personal data erased (the 'right to be forgotten').</li>
                  <li>The right to restrict processing of your personal data.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
                <p>
                  Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
                <p>
                  Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to:
                  <br /><br />
                  <strong>Data Protection Officer</strong><br />
                  Shauna HealthCare Services Solutions North East<br />
                  Not Available<br />
                  United Kingdom<br />
                  Email: Not Available
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-8">
              <h1 className="text-4xl font-bold mb-10">Terms and Conditions</h1>
              <p className="text-slate-500 italic">Last Updated: March 2026</p>

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Provision of Services</h2>
                <p>
                  Shauna HealthCare Services Solutions North East provides various IT services as described on this website. All services are subject to a separate formal Service Level Agreement (SLA) or Contract which supersedes these website terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
                <p>
                  All prices are quoted in Great British Pounds (GBP) and are exclusive of VAT unless otherwise stated. Payment terms for managed services are typically monthly in advance, as specified in your individual contract.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                <p>
                  All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, designs and agreements, are the property of or licensed to Shauna HealthCare Services Solutions North East.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Confidentiality</h2>
                <p>
                  Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which by its nature is clearly confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p>
                  To the extent permitted by law, Shauna HealthCare Services Solutions North East shall not be liable for any indirect or consequential loss or damage whatever arising out of or in connection with the use of the website or our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
                <p>
                  These terms and conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Company Details</h2>
                <p>
                  <strong>Company Name:</strong> Shauna HealthCare Services Solutions North East<br />
                  <strong>Registered Office:</strong> Not Available, United Kingdom<br />
                  <strong>Company Registration Number:</strong> Not Available<br />
                </p>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
