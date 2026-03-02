import React from 'react';
import { COMPANY_DETAILS } from '../constants';

const Terms = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Terms & Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By accessing our website or engaging our services, you agree to be bound by these terms.
            </p>
            <p>
              Company Name: {COMPANY_DETAILS.name}<br />
              Registered Address: {COMPANY_DETAILS.address}<br />
              Company Registration Number: {COMPANY_DETAILS.crn}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
            <p>
              We provide IT support, cloud solutions, cyber security, and consultancy services as described on our website. Specific service level agreements (SLAs) will be provided for managed service contracts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
            <p>
              All financial references and invoices are in Pounds Sterling (£). Prices quoted on the website exclude VAT at the standard UK rate unless otherwise stated.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Managed service invoices are issued monthly in advance.</li>
              <li>Project-based work requires a 50% deposit before commencement.</li>
              <li>Standard payment terms are 14 days from the date of invoice.</li>
              <li>Late payments may incur interest at the rate of 8% above the Bank of England base rate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of {COMPANY_DETAILS.name} or its content suppliers and is protected by UK and international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which by its nature is clearly confidential. This includes technical data, business plans, and client information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {COMPANY_DETAILS.name} shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities, arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <p className="text-sm text-slate-400 pt-8 border-t border-slate-100">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
