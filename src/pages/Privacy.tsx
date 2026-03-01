import { motion } from 'motion/react';

const COMPANY_DETAILS = {
  name: "Island Business Centre",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17049338",
  phone: "0208 088 5943",
  email: "info@islandbusinesscentre.co.uk"
};

const Privacy = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-slate-500">Last Updated: March 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl mx-auto prose prose-slate prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p>
                {COMPANY_DETAILS.name} ("we", "us", "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and share your personal data when you visit our website or use our IT services, in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. The Data We Collect</h2>
              <p>We may collect and process the following types of personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> Name, job title, company name.</li>
                <li><strong>Contact Data:</strong> Email address, phone number, business address.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, and other technical information when you visit our website.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and manage our IT services to you.</li>
                <li>To respond to your enquiries and provide customer support.</li>
                <li>To manage our relationship with you, including billing and account management.</li>
                <li>To improve our website and services.</li>
                <li>To comply with our legal and regulatory obligations.</li>
                <li>With your consent, to send you marketing communications about our services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing</h2>
              <p>Under the UK GDPR, the legal bases we rely on for processing this information are:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Performance of a Contract:</strong> Necessary to fulfil our service agreement with you.</li>
                <li><strong>Legitimate Interests:</strong> Necessary for our legitimate business interests, provided they do not override your rights.</li>
                <li><strong>Legal Obligation:</strong> Necessary to comply with the law.</li>
                <li><strong>Consent:</strong> Where you have given us clear consent to process your data for a specific purpose.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, we retain client data for 7 years after the end of our business relationship.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p>Under data protection law, you have rights including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right of Access:</strong> You have the right to ask us for copies of your personal information.</li>
                <li><strong>Right to Rectification:</strong> You have the right to ask us to rectify information you think is inaccurate.</li>
                <li><strong>Right to Erasure:</strong> You have the right to ask us to erase your personal information in certain circumstances.</li>
                <li><strong>Right to Restriction of Processing:</strong> You have the right to ask us to restrict the processing of your information.</li>
                <li><strong>Right to Object to Processing:</strong> You have the right to object to the processing of your personal data.</li>
                <li><strong>Right to Data Portability:</strong> You have the right to ask that we transfer the information you gave us to another organisation.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data protection practices, please contact our Data Protection Officer at:
              </p>
              <p className="font-bold">
                {COMPANY_DETAILS.name}<br />
                {COMPANY_DETAILS.address}<br />
                Email: {COMPANY_DETAILS.email}<br />
                Phone: {COMPANY_DETAILS.phone}
              </p>
              <p>
                You also have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
