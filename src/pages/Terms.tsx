import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export const Terms = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="text-sm text-slate-400">Last Updated: February 27, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to the website of {COMPANY_DETAILS.name} ("we", "us", or "our"). These terms and conditions govern your use of our website and the purchase of any IT services from us. By accessing this website, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales. <br />
              <strong>Company Registration Number:</strong> {COMPANY_DETAILS.crn} <br />
              <strong>Registered Office:</strong> {COMPANY_DETAILS.address}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services & Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All prices quoted on this website are in Pounds Sterling (£) and exclude VAT at the prevailing rate unless otherwise stated.</li>
              <li>Payment terms for managed services are typically 14 days from the date of invoice.</li>
              <li>We reserve the right to suspend services in the event of non-payment.</li>
              <li>Project-based work may require a deposit before commencement.</li>
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
              We acknowledge that in the course of providing IT services, we may have access to confidential information. We agree to maintain the strict confidentiality of all client data and will not disclose it to third parties except as required by law or to provide the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              While we strive to provide the highest quality IT services, {COMPANY_DETAILS.name} shall not be liable for any indirect, incidental, or consequential damages, including loss of profits or data, arising out of the use of our services or website. Our total liability shall not exceed the amount paid by you for the services in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
