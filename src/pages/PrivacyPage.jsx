import React from "react";
import LoginHeader from "../components/LoginHeader";
import Announcement from "../components/Announcement";
import { MdOutlineSimCardDownload } from "react-icons/md";
import file from '../assets/files/BizSolutions_LLC - PrivacyPolicy.pdf';

const PrivacyPage = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "BizSolutions_LLC - PrivacyPolicy.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Announcement />
      <LoginHeader />

      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-16">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <div className="flex items-center justify-between py-5">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
                BizSolutions LLC
            </h1>

            <MdOutlineSimCardDownload
              className="text-3xl cursor-pointer hover:text-orange-500"
              onClick={handleDownload}
              title="Download Privacy Policy"
            />
            </div>


            <a href="#" className="hover:underline">
              <h3 className="font-bold uppercase text-gray-900">Privacy Policy</h3>
            </a>

            <p className="my-3 text-xs font-medium text-gray-600">Last Updated: March 2025</p>

            <hr className="my-4" />

            <div className="text-justify">

                {/* Section 1 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  I. Introduction Welcome to Bizsolutions LLC
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                  Welcome to BizSolutions LLC. We are committed to protecting the privacy of our clients and website visitors. This Privacy Policy outlines our practices regarding the collection, use, and protection of your Personally Identifiable Information (PII) when using our services, including business listings, website development, bookkeeping, and outsourcing support.
                </p>
                </div>

                {/* Section 2 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  II. Information We Collect
                </h4>

                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">a. For Business Listings and Website Development:
                </p>
                <p className="mt-2 text-sm ms-5 text-gray-700">
                    i. Name, email address, mailing address, and phone number.
                </p>

                <p className="mt-2 text-sm ms-5 text-gray-700">
                    ii. Business details and website development requirements.
                </p>

                <p className="mt-2 text-sm ms-5 text-gray-700">
                    iii. Login credentials and customer feedback.
                </p>


                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">b. For Bookkeeping and Outsourcing Support:

                </p>
                <p className="mt-2 text-sm ms-5 text-gray-700">
                    i. Financial records and transaction details.
                </p>

                <p className="mt-2 text-sm ms-5 text-gray-700">
                    ii. Business operation data relevant to outsourcing services.
                </p>

                <p className="mt-2 text-sm ms-5 text-gray-700">
                    iii. Communication logs and project details.
                </p>
                </div>

                {/* Section 3 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  III. How We Use Your Information
                </h4>
                <p className="mt-2 ms-1 text-sm text-gray-700">
                  a. Provide, operate, and maintain our services.
                </p>
                <p className="mt-2 ms-1 text-sm text-gray-700">
                  b. Improve, personalize, and enhance user experience.
                </p>
                <p className="mt-2 ms-1 text-sm text-gray-700">
                  c. Understand service usage through analytics.
                </p>
                <p className="mt-2 ms-1 text-sm text-gray-700">
                  d. Develop new features and service improvements.
                </p>
                <p className="mt-2 ms-1 text-sm text-gray-700">
                  e. Communicate with you regarding customer service, updates, and marketing.
                </p>
                </div>

                {/* Section 4 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                    IV. How Do We Protect Your Information?
                </h4>
                <p className="mt-2 ms-1 text-sm text-gray-700">
                  a. We employ industry-standard security measures to safeguard personal data.
                </p>
                <p className="mt-2 ms-1 text-sm text-gray-700">
                </p>
                <p className="mt-2 ms-1 text-sm text-gray-700">
                  b. Regular security audits and data access controls are in place.
                </p>
                </div>

                {/* Section 5 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  V. Third-party Disclosure
                </h4>
                <p className="mt-2 ms-1 text-sm text-gray-700">
                  a. We do not sell, trade, or rent personally identifiable information.
                </p>
                <p className="mt-2 ms-1 text-sm text-gray-700">
                  b. Aggregated non-personal demographic data may be shared with business partners.
                </p>
                </div>

                {/* Section 6 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  VI. Compliance With U.S. Laws
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                  We adhere to federal and state privacy laws, including the California Consumer Privacy Act (CCPA). In the event of a data breach, 
                  we comply with applicable state-specific notification laws.
                </p>
                </div>

                {/* Section 7 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  VII. Children’s Online Privacy Protection Act (COPPA)
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                  We do not knowingly collect personal information from children under 13.
                </p>
                </div>

                {/* Section 8 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  VIII. Compliance With Laws
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                  We will disclose your personal information where required to do so by law or subpoena.
                </p>
                </div>

                {/* Section 9 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  IX. Your Data Protection Rights Under General Data Protection Regulation (GDPR)
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                  If you are a resident of the European Union, you have certain data protection rights. Bizsolutions LLC aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal information.
                </p>
                </div>

                {/* Section 10 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  X. Changes to This Privacy Policy
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
                </div>

                {/* Section 11 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  XI. Contact Us
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                  If you have any questions regarding this Privacy Policy, please contact us at{" "}
                  <strong>help@bizsolutions.us</strong>.
                </p>
                </div>
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;


