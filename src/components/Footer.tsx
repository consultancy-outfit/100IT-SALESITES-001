import { COMPANY_DETAILS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">Dasil Support Services London</h3>
            <p className="text-sm">&copy; {new Date().getFullYear()} Dasil Support Services London. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Company Details</h3>
            <p className="text-sm"><strong>Company Name:</strong> {COMPANY_DETAILS.name}</p>
            <p className="text-sm"><strong>Registered Office Address (UK):</strong> {COMPANY_DETAILS.registeredOfficeAddress}</p>
            <p className="text-sm"><strong>Company Registration Number (CRN):</strong> {COMPANY_DETAILS.companyRegistrationNumber}</p>
            <p className="text-sm"><strong>UK Phone Number:</strong> {COMPANY_DETAILS.ukPhoneNumber}</p>
            <p className="text-sm"><strong>Official Business Email:</strong> <a href={`mailto:${COMPANY_DETAILS.officialBusinessEmail}`} className="text-blue-400 hover:underline">{COMPANY_DETAILS.officialBusinessEmail}</a></p>
          </div>
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/terms-and-conditions" className="text-blue-400 hover:underline">Terms and Conditions</a></li>
              <li><a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
