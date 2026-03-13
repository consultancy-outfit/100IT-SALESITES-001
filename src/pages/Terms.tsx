import React from 'react';
import Markdown from 'react-markdown';
import { COMPANY_DETAILS } from '../constants';

const termsContent = `
# Terms and Conditions

**Last Updated: ${new Date().toLocaleDateString('en-GB')}**

Welcome to the website of **${COMPANY_DETAILS.name} Limited** ("we", "us", or "our"). These terms and conditions govern your use of our website and the purchase of any IT services from us.

## 1. Company Information
${COMPANY_DETAILS.name} Limited is a company registered in England and Wales.
- **Registered Office:** ${COMPANY_DETAILS.address}
- **Company Registration Number (CRN):** ${COMPANY_DETAILS.crn}
- **Email:** ${COMPANY_DETAILS.email}
- **Phone:** ${COMPANY_DETAILS.phone}

## 2. Use of Website
By accessing this website, you agree to comply with these terms. You must not use this website for any fraudulent or unlawful purpose.

## 3. IT Services & Quotations
- All quotations provided are valid for 30 days unless otherwise stated.
- A formal Service Level Agreement (SLA) will be provided for all managed services.
- We reserve the right to refuse service to any business that does not meet our compliance standards.

## 4. Payment Terms
- All prices are quoted in **Pounds Sterling (GBP)** and are subject to VAT at the prevailing rate.
- Managed service invoices are issued monthly in advance and are due within 14 days of the invoice date.
- Project-based work may require a 50% deposit before commencement.
- Late payments may incur interest charges under the Late Payment of Commercial Debts (Interest) Act 1998.

## 5. Intellectual Property
- All content on this website, including logos, text, and graphics, is the property of ${COMPANY_DETAILS.name} Limited.
- Any software or code developed for a client remains our property until full payment is received, at which point a non-exclusive license is granted.

## 6. Confidentiality
Both parties agree to keep all business information, technical data, and trade secrets confidential during and after the term of any agreement.

## 7. Limitation of Liability
- We provide our services with reasonable skill and care.
- To the maximum extent permitted by law, our liability for any claim shall not exceed the total fees paid by the client in the 12 months preceding the claim.
- We are not liable for indirect or consequential losses, including loss of profit or data.

## 8. Governing Law
These terms are governed by the laws of **England and Wales**. Any disputes shall be subject to the exclusive jurisdiction of the English courts.

## 9. Contact
For any questions regarding these terms, please contact us at **${COMPANY_DETAILS.email}**.
`;

export default function Terms() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <div className="markdown-body prose prose-slate prose-lg max-w-none">
          <Markdown>{termsContent}</Markdown>
        </div>
      </div>
    </div>
  );
}
