import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Terms: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="text-sm italic">Last Updated: February 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the website and services provided by <strong>{COMPANY_DETAILS.name}</strong> ("the Company", "we", "us", "our"). By accessing our website or engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
              <strong>Registered Office:</strong> {COMPANY_DETAILS.address}<br />
              <strong>Company Registration Number (CRN):</strong> {COMPANY_DETAILS.crn}<br />
              <strong>VAT Number:</strong> {COMPANY_DETAILS.vat}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Services and Fees</h2>
            <p>
              All services provided are subject to a separate Service Level Agreement (SLA) or Statement of Work (SOW). Prices listed on the website are indicative and subject to VAT at the prevailing UK rate.
            </p>
            <p>
              Payment terms are strictly 30 days from the date of invoice unless otherwise agreed in writing. All payments must be made in Pounds Sterling (£).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of {COMPANY_DETAILS.name} or its content suppliers and is protected by UK and international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Confidentiality</h2>
            <p>
              We acknowledge that in the course of providing services, we may have access to confidential information. We agree to maintain the strictest confidentiality and not disclose such information to any third party without prior written consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {COMPANY_DETAILS.name} shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our services or website. Our total liability for any claim shall not exceed the amount paid by the client for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
