import React from 'react';
import { COMPANY_DETAILS } from './Shared';

export const LegalPage = ({ type }: { type: 'terms' | 'privacy' }) => {
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  if (type === 'terms') {
    return (
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms and Conditions</h1>
          <p className="text-slate-500 mb-12">Last Updated: {date}</p>
          
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                These Terms and Conditions govern your use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services or using our website, you agree to comply with and be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Information</h2>
              <p>
                {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
                <strong>Registered Office:</strong> {COMPANY_DETAILS.address}<br />
                <strong>Company Registration Number:</strong> {COMPANY_DETAILS.crn}<br />
                <strong>Email:</strong> {COMPANY_DETAILS.email}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services</h2>
              <p>
                We provide IT managed services, cybersecurity, cloud hosting, and consultancy. The specific scope of work, service levels, and deliverables will be outlined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) signed by both parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
              <p>
                All fees are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate. Invoices are typically issued monthly in advance for managed services and are due for payment within 14 days of the invoice date unless otherwise agreed in writing. Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
              <p>
                Unless otherwise agreed, all intellectual property rights in materials created by us during the provision of services remain our property. Clients are granted a non-exclusive, non-transferable licence to use such materials for their internal business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential all non-public information obtained from the other party during the course of the engagement. This obligation survives the termination of any agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential losses, including loss of profit or data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last Updated: {date}</p>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Commitment to Privacy</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data Controller</h2>
            <p>
              {COMPANY_DETAILS.name} is the data controller for the personal data we collect. Our registered office is at {COMPANY_DETAILS.address}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Types of Data Collected</h2>
            <p>We may collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number, business address).</li>
              <li>Professional information (job title, company name).</li>
              <li>Technical data (IP address, browser type, usage patterns on our website).</li>
              <li>Communication records (emails, meeting notes).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Purposes of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To respond to enquiries and provide customer support.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and marketing efforts (where consented).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including any legal, accounting, or reporting requirements. Typically, client data is retained for 6 years after the termination of the contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p>Under the UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ("right to be forgotten").</li>
              <li>The right to restrict processing.</li>
              <li>The right to data portability.</li>
              <li>The right to object to processing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings. For more details, please request our full Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security Measures</h2>
            <p>
              We implement robust technical and organisational security measures to protect your data, including encryption, firewalls, and strict access controls. All our staff undergo regular data protection training.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
