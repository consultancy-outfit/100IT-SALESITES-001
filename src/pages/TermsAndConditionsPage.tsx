import { COMPANY_DETAILS } from '../constants';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center">Terms and Conditions</h1>
        <p className="mt-4 text-sm text-gray-500 text-center">Last Updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 text-gray-700 leading-relaxed space-y-6">
          <p>Welcome to Dasil Support Services London. These terms and conditions outline the rules and regulations for the use of {COMPANY_DETAILS.name}'s Website, located at [Your Website URL].</p>

          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Dasil Support Services London if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Definitions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>"Company", "We", "Our", "Us"</strong> refers to {COMPANY_DETAILS.name}, a company registered in the UK.</li>
            <li><strong>"Client", "You", "Your"</strong> refers to the person or entity accessing this website and/or engaging our services.</li>
            <li><strong>"Services"</strong> refers to the IT support, cybersecurity, cloud computing, network design, data backup, and other related services provided by the Company.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Service Agreement</h2>
          <p>All Services provided by the Company are subject to a separate written service agreement or statement of work, which will detail the scope of work, deliverables, timelines, and specific terms applicable to those Services.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Payment Terms</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All prices for Services are quoted in Pounds Sterling (£) and are exclusive of VAT, unless otherwise stated. VAT will be charged at the prevailing UK rate.</li>
            <li>Invoices are typically issued [e.g., monthly, upon completion of milestones] and are payable within [e.g., 30 days] from the date of invoice.</li>
            <li>Late payments may incur interest at a rate of [e.g., 8%] per annum above the Bank of England base rate, calculated daily.</li>
            <li>The Company reserves the right to suspend Services for overdue accounts.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Unless otherwise agreed in a separate written agreement, all intellectual property rights in any software, documentation, or other materials developed or provided by the Company as part of the Services shall remain the property of the Company.</li>
            <li>The Client is granted a non-exclusive, non-transferable licence to use such intellectual property solely for the purpose of receiving and utilising the Services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Confidentiality</h2>
          <p>Both parties agree to keep confidential all information, whether written or oral, concerning the business and affairs of the other party which may be disclosed or obtained during the course of providing or receiving the Services, except for information that is publicly available or required to be disclosed by law.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To the maximum extent permitted by applicable law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Services; (b) any conduct or content of any third party on the Services.</li>
            <li>The Company's total liability to the Client for any claim arising out of or in connection with these terms and conditions or the Services shall not exceed the total fees paid by the Client for the Services in the twelve (12) months preceding the event giving rise to the claim.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Governing Law & Jurisdiction</h2>
          <p>These terms and conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Changes to Terms</h2>
          <p>The Company reserves the right to revise these terms and conditions at any time as it sees fit, and by using this Website you are expected to review these terms on a regular basis.</p>

          <p className="mt-8">For any questions regarding these Terms and Conditions, please contact us at <a href={`mailto:${COMPANY_DETAILS.officialBusinessEmail}`} className="text-blue-600 hover:underline">{COMPANY_DETAILS.officialBusinessEmail}</a>.</p>
        </div>
      </main>
    </div>
  );
}
