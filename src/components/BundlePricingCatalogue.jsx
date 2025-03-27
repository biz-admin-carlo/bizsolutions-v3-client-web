import React from "react";
import { FaCheck } from "react-icons/fa6";
import { GoDash } from "react-icons/go";

const features = [
  "Priority Business Listing*",
  "Social Media Management**",
  "Website Pages",
  "Business Email",
  "Responsive Design",
  "Search Engine Optimization (SEO)",
  "Hosting",
  "Maintenance and Support",
  "Directory Submission",
  "Standard Security Measures",
  "E-Commerce Solution",
  "Payment Processing System",
];

const setupDetails = {
  "Starter Setup": {
    "Website Pages": "Up to 5 pages",
    "Business Email": "Only 5",
    "Hosting": true,
    "E-Commerce Solution": false,
    "Payment Processing System": false,
  },
  "Advanced Setup": {
    "Website Pages": "Up to 10 pages",
    "Business Email": "10 Custom business emails",
    "Hosting": "Hosting with Custom Domain",
    "E-Commerce Solution": false,
    "Payment Processing System": false,
  },
  "Expert Setup": {
    "Website Pages": "Unlimited Pages",
    "Business Email": "30 Custom business emails",
    "Hosting": "Hosting with Custom Domain",
    "Search Engine Optimization (SEO)": "Advanced Search Ending Optimization",
    "Standard Security Measures": "Premium Security Measures",
    "E-Commerce Solution": true,
    "Payment Processing System": true,
  },
};

export default function Catalogue() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mt-6">
        <h2 className="text-lg font-semibold">Features Included</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto py-5">
        <table className="w-full border-collapse">

          {/* Table Caption */}
          <caption className="text-sm text-center pb-5">
            <p>* Priority Business Listing are the similar features for Free Trial Package.</p>
            <p>** Social Media Management includes all social media available.</p>
          </caption>


          {/* Table Head */}
          <thead>
            <tr className="bg-gray-50">
              <th className="p-5 text-sm"></th>
              <th className="p-5 text-sm text-center">Starter Setup</th>
              <th className=" p-5 text-sm text-center">Advanced Setup</th>
              <th className=" p-5 text-sm text-center">Expert Setup</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="p-5 text-sm text-black">{feature}</td>
                {["Starter Setup", "Advanced Setup", "Expert Setup"].map((setup) => (
                  <td key={setup} className="py-2 text-sm text-center">
                    {setupDetails[setup][feature] ? (
                      typeof setupDetails[setup][feature] === "string" ? (
                        setupDetails[setup][feature]
                      ) : (
                        <FaCheck className="text-orange-500 mx-auto" />
                      )
                    ) : (
                      setupDetails[setup][feature] === false ? (
                        <GoDash className="text-gray-500 mx-auto" />
                      ) : (
                        <FaCheck className="text-orange-500 mx-auto" />
                      )
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}