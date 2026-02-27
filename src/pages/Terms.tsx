import React from 'react';
import ReactMarkdown from 'react-markdown';
import { COMPANY_DETAILS } from '../constants';

const Terms = () => {
  const content = `
# Terms and Conditions

**Last Updated: February 2026**

Welcome to the website of **${COMPANY_DETAILS.name}**. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.

## 1. Company Information
**${COMPANY_DETAILS.name}** is a company registered in England and Wales.
- **Registered Office:** ${COMPANY_DETAILS.address}
- **Company Registration Number (CRN):** ${COMPANY_DETAILS.crn}
- **VAT Number:** ${COMPANY_DETAILS.vatNumber}

## 2. Services
The specific scope of IT services provided will be governed by a separate Service Level Agreement (SLA) or Statement of Work (SOW) signed between the Client and ${COMPANY_DETAILS.name}.

## 3. Payment Terms
- All prices are quoted in British Pounds (GBP).
- Invoices are subject to VAT at the prevailing UK rate.
- Standard payment terms are 14 days from the date of invoice unless otherwise agreed in writing.
- We reserve the right to suspend services in the event of non-payment.

## 4. Intellectual Property
All content on this website, including text, graphics, logos, and software, is the property of ${COMPANY_DETAILS.name} and is protected by UK and international copyright laws.

## 5. Confidentiality
Both parties agree to keep confidential all non-public information received from the other party that is marked as confidential or should reasonably be understood to be confidential.

## 6. Limitation of Liability
To the maximum extent permitted by English law, ${COMPANY_DETAILS.name} shall not be liable for any indirect, incidental, or consequential damages, including loss of profits or data, arising out of the use of our services.

## 7. Governing Law
These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.

## 8. Contact Us
If you have any questions about these Terms, please contact us at **${COMPANY_DETAILS.email}**.
  `;

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom max-w-4xl">
        <div className="prose prose-slate lg:prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Terms;
