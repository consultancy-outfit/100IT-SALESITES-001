import { COMPANY_DETAILS } from '../constants';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center">Privacy Policy</h1>
        <p className="mt-4 text-sm text-gray-500 text-center">Last Updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 text-gray-700 leading-relaxed space-y-6">
          <p>This Privacy Policy describes how {COMPANY_DETAILS.name} ("Company", "we", "us", or "our") collects, uses, and discloses your personal data when you visit our website [Your Website URL] and use our services. We are committed to protecting your privacy and handling your data in an open and transparent manner, in accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679 and the Data Protection Act 2018 (UK).</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Important Information and Who We Are</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Purpose of this Privacy Policy:</strong> This policy aims to give you information on how we collect and process your personal data through your use of this website, including any data you may provide through this website when you sign up for a newsletter, purchase a service, or take part in a competition.</li>
            <li><strong>Controller:</strong> {COMPANY_DETAILS.name} is the controller and responsible for your personal data.</li>
            <li><strong>Contact Details:</strong> Our full details are:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li><strong>Company Name:</strong> {COMPANY_DETAILS.name}</li>
                <li><strong>Official Business Email:</strong> <a href={`mailto:${COMPANY_DETAILS.officialBusinessEmail}`} className="text-blue-600 hover:underline">{COMPANY_DETAILS.officialBusinessEmail}</a></li>
                <li><strong>Registered Office Address (UK):</strong> {COMPANY_DETAILS.registeredOfficeAddress}</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. The Data We Collect About You</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Collect Your Personal Data</h2>
          <p>We use different methods to collect data from and about you including through:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Direct interactions:</strong> You may give us your Identity, Contact and Financial Data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you: enquire about our products or services; create an account on our website; subscribe to our service or publications; request marketing to be sent to you; give us some feedback.</li>
            <li><strong>Automated technologies or interactions:</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
          <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cookies</h2>
          <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>

          <p className="mt-8">For any questions regarding this Privacy Policy, please contact us at <a href={`mailto:${COMPANY_DETAILS.officialBusinessEmail}`} className="text-blue-600 hover:underline">{COMPANY_DETAILS.officialBusinessEmail}</a>.</p>
        </div>
      </main>
    </div>
  );
}
