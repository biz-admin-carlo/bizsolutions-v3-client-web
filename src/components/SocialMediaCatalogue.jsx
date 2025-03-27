import React from "react";
import { FaCheck } from "react-icons/fa6";
import { GoDash } from "react-icons/go";

const features = [
  "Management of Social Media Platforms",
  "Social Media/Profile Optimization",
  "Strategy Development",
  "Social Media Audit",
  "Posting Frequency",
  "Graphics/Content Creation",
  "Video Editing",
  "Copywriting/Caption Writing",
  "Hashtag & Keyword Research",
  "Analytics",
  "Daily Engagement/Community Management",
  "Paid Advertising Support",
  "Consultation Calls",
  "Custom Platform Features",
];

const packageDetails = {
  standard: new Set([
    "Management of Social Media Platforms",
    "Social Media/Profile Optimization",
    "Strategy Development",
    "Social Media Audit",
    "Posting Frequency",
    "Graphics/Content Creation",
    "Video Editing",
    "Copywriting/Caption Writing",
    "Hashtag & Keyword Research",
    "Analytics",
    "Daily Engagement/Community Management",
  ]),
  premium: new Set([
    "Management of Social Media Platforms",
    "Social Media/Profile Optimization",
    "Strategy Development",
    "Social Media Audit",
    "Posting Frequency",
    "Graphics/Content Creation",
    "Video Editing",
    "Copywriting/Caption Writing",
    "Hashtag & Keyword Research",
    "Analytics",
    "Daily Engagement/Community Management",
    "Paid Advertising Support",
    "Consultation Calls",
    "Custom Platform Features",
  ]),
};

const SocialMediaCatalogue = () => (
  <div className="max-w-7xl mx-auto p-4">
    {/* Header */}
    <div className="text-center mb-6">
      <h2 className="text-lg font-semibold">Features Included</h2>
    </div>

    {/* Table */}
    <div className="overflow-x-auto py-5">
    <table className="w-full border-collapse">
        {/* Table Head */}
        <thead>
          <tr className="bg-gray-50">
          <th className="p-5 text-sm text-left">Feature</th>
            <th className="p-5 text-sm text-center">Standard Package</th>
            <th className="p-5 text-sm text-center">Premium Package</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="even:bg-gray-50">
              <td className="p-5 text-sm text-black">{feature}</td>
              <td className="py-2 text-center">
                {packageDetails.standard.has(feature) ? (
                  <FaCheck className="text-orange-500 mx-auto" />
                ) : (
                  <GoDash className="text-gray-500 mx-auto" />
                )}
              </td>
              <td className="py-2 text-center">
                {packageDetails.premium.has(feature) ? (
                  <FaCheck className="text-orange-500 mx-auto" />
                ) : (
                  <GoDash className="text-gray-500 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default SocialMediaCatalogue;