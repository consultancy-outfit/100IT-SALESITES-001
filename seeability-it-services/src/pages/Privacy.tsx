import React from 'react';

const COMPANY_NAME = "SeeAbility Oxfordshire South Support Service";

export default function Privacy() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>
        
        <div className="prose prose-slate max-w-none">
          <h3>1. Introduction</h3>
          <p>
            {COMPANY_NAME} ("we", "us", "our") is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.
          </p>
          <p>
            For the purpose of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, the data controller is {COMPANY_NAME}.
          </p>

          <h3>2. Information We Collect</h3>
          <p>
            We may collect and process the following data about you:
            <ul>
              <li>Information you give us by filling in forms on our site or by corresponding with us by phone, e-mail or otherwise.</li>
              <li>Technical information, including the IP address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
              <li>Information about your visit, including the full Uniform Resource Locators (URL) clickstream to, through and from our site (including date and time).</li>
            </ul>
          </p>

          <h3>3. How We Use Your Information</h3>
          <p>
            We use information held about you in the following ways:
            <ul>
              <li>To carry out our obligations arising from any contracts entered into between you and us and to provide you with the information, products and services that you request from us.</li>
              <li>To provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about.</li>
              <li>To notify you about changes to our service.</li>
              <li>To ensure that content from our site is presented in the most effective manner for you and for your computer.</li>
            </ul>
          </p>

          <h3>4. Disclosure of Your Information</h3>
          <p>
            We may share your personal information with any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries, as defined in section 1159 of the UK Companies Act 2006.
          </p>
          <p>
            We may share your information with selected third parties including:
            <ul>
              <li>Business partners, suppliers and sub-contractors for the performance of any contract we enter into with them or you.</li>
              <li>Analytics and search engine providers that assist us in the improvement and optimisation of our site.</li>
            </ul>
          </p>

          <h3>5. Where We Store Your Personal Data</h3>
          <p>
            The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area ("EEA"). It may also be processed by staff operating outside the EEA who work for us or for one of our suppliers. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.
          </p>

          <h3>6. Your Rights</h3>
          <p>
            You have the right to ask us not to process your personal data for marketing purposes. You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data. You can also exercise the right at any time by contacting us.
          </p>
          <p>
            The Act gives you the right to access information held about you. Your right of access can be exercised in accordance with the Act.
          </p>

          <h3>7. Cookies</h3>
          <p>
            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
          </p>

          <h3>8. Changes to Our Privacy Policy</h3>
          <p>
            Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our privacy policy.
          </p>

          <h3>9. Contact</h3>
          <p>
            Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to our registered office.
          </p>
          <p>
            <strong>Company Name:</strong> {COMPANY_NAME}<br/>
            <strong>Registered Office:</strong> N/A<br/>
            <strong>Email:</strong> N/A
          </p>
        </div>
      </div>
    </div>
  );
}
