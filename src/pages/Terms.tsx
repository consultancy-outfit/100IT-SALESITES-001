/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Terms() {
  return (
    <div className="pt-20 pb-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
      <div className="prose prose-slate prose-indigo max-w-none space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>
            Welcome to the website of {COMPANY_DETAILS.name}. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use {COMPANY_DETAILS.name}'s website if you do not accept all of the terms and conditions stated on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Definitions</h2>
          <p>
            "Company", "Ourselves", "We", "Our" and "Us", refers to {COMPANY_DETAILS.name}. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
          <p>
            All financial references and payments must be made in British Pounds (£/GBP). Fees for our services are as specified in the relevant service agreement or pricing plan. Unless otherwise agreed in writing, all invoices are payable within 14 days of the date of the invoice. We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
          </p>
          <p>
            All prices quoted on our website are exclusive of VAT, which will be charged at the prevailing UK rate where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, {COMPANY_DETAILS.name} and/or its licensors own the intellectual property rights for all material on {COMPANY_DETAILS.name}. All intellectual property rights are reserved. You may view and/or print pages from this website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which by its nature is clearly confidential. This includes, but is not limited to, business plans, financial information, technical data, and client lists.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Company Information</h2>
          <p>
            Company Name: {COMPANY_DETAILS.name}<br />
            Registered Office Address: {COMPANY_DETAILS.address}<br />
            Company Registration Number (CRN): {COMPANY_DETAILS.crn}<br />
            Contact Email: {COMPANY_DETAILS.email}
          </p>
        </section>
      </div>
    </div>
  );
}
