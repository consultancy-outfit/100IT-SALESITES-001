import React from 'react';
import ReactMarkdown from 'react-markdown';
import { COMPANY_DETAILS } from '../constants';

const Terms = () => {
  const content = `
# Terms and Conditions

**Last Updated: ${new Date().toLocaleDateString('en-GB')}**

Welcome to the website of **${COMPANY_DETAILS.name}**. By accessing or using our website and services, you agree to be bound by these Terms and Conditions.

## 1. Definitions
*   "Company", "We", "Us", "Our" refers to **${COMPANY_DETAILS.name}**, registered in England and Wales under Company Registration Number **${COMPANY_DETAILS.crn}**.
*   "Client", "You", "Your" refers to the person or entity accessing our services.
*   "Services" refers to the IT support, consultancy, and digital solutions provided by us.

## 2. Provision of Services
We agree to provide IT services as described in our service agreements or as listed on our website. While we strive for 100% uptime, services are provided "as available" and "as is".

## 3. Payment Terms
*   All prices are quoted in Great British Pounds (£).
*   Unless otherwise stated, all prices are exclusive of VAT at the prevailing UK rate.
*   Payment for managed services is typically due monthly in advance via Direct Debit or Bank Transfer.
*   Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.

## 4. Intellectual Property
All content, branding, code, and materials provided by us remain the intellectual property of ${COMPANY_DETAILS.name} unless explicitly transferred in writing. You are granted a limited, non-exclusive license to use materials provided as part of the services.

## 5. Confidentiality
Both parties agree to maintain the confidentiality of sensitive information disclosed during the course of business. This includes technical data, business plans, and personal data.

## 6. Limitation of Liability
To the maximum extent permitted by English law, ${COMPANY_DETAILS.name} shall not be liable for any indirect, incidental, or consequential damages, including loss of profits or data, arising from the use of our services. Our total liability for any claim shall not exceed the amount paid by you for the services in the 12 months preceding the claim.

## 7. Governing Law
These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.

## 8. Contact Information
If you have any questions regarding these terms, please contact us at:
*   **Email:** ${COMPANY_DETAILS.email}
*   **Address:** ${COMPANY_DETAILS.address}
  `;

  return (
    <div className="bg-white section-padding">
      <div className="container-custom max-w-4xl">
        <div className="prose prose-slate lg:prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Terms;
