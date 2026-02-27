import React from 'react';
import Markdown from 'react-markdown';
import { COMPANY_DETAILS } from '../constants';

const privacyContent = `
# Privacy Policy (GDPR Compliant)

**Last Updated: ${new Date().toLocaleDateString('en-GB')}**

**${COMPANY_DETAILS.name} Limited** is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.

## 1. Data Controller
For the purpose of the UK GDPR, the data controller is:
**${COMPANY_DETAILS.name} Limited**
${COMPANY_DETAILS.address}
Email: ${COMPANY_DETAILS.email}

## 2. Types of Data We Collect
We may collect and process the following data:
- **Identity Data:** Name, job title.
- **Contact Data:** Email address, phone number, business address.
- **Technical Data:** IP address, browser type, and usage data via cookies.
- **Marketing Data:** Your preferences in receiving communications from us.

## 3. Purpose of Processing
We use your data to:
- Provide IT services and support.
- Respond to enquiries submitted via our contact form.
- Send service updates and security alerts.
- Comply with legal and regulatory obligations.
- Improve our website and user experience.

## 4. Legal Basis for Processing
We process your data under the following legal bases:
- **Contractual Necessity:** To perform our services for you.
- **Legitimate Interests:** For business administration and marketing.
- **Legal Obligation:** To comply with UK law.
- **Consent:** Where you have explicitly opted-in to receive marketing.

## 5. Data Retention
We retain personal data only for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the end of the contract.

## 6. Your Rights
Under the UK GDPR, you have the right to:
- Request access to your personal data.
- Request correction or erasure of your data.
- Object to or restrict the processing of your data.
- Request the transfer of your data (data portability).
- Withdraw consent at any time.

To exercise these rights, please contact us at **${COMPANY_DETAILS.email}**.

## 7. Cookies
Our website uses cookies to distinguish you from other users. You can set your browser to refuse all or some browser cookies, but this may affect the functionality of the site.

## 8. Data Security
We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and partners who have a business need to know.

## 9. Changes to This Policy
Any changes we make to our privacy policy in the future will be posted on this page. Please check back frequently to see any updates.

## 10. Complaints
If you have a concern about our data practices, you have the right to make a complaint to the **Information Commissioner's Office (ICO)**, the UK supervisory authority for data protection issues (www.ico.org.uk).
`;

export default function Privacy() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <div className="markdown-body prose prose-slate prose-lg max-w-none">
          <Markdown>{privacyContent}</Markdown>
        </div>
      </div>
    </div>
  );
}
