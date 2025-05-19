import { useEffect, useState, useRef } from "react";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import LoginHeader from "../components/LoginHeader";
import Announcement from "../components/Announcement";
import TypingsPricing from "../components/TypingPricing";
import videoPricing from "../assets/logo192.png";
import BundleCatalogue from "../components/BundlePricingCatalogue";
import SocialMediaCatalogue from "../components/SocialMediaCatalogue";

const freeTrial = [
  {
    name: "Free Trial",
    tagline: "Initialize Business",
    price: "Free Trial",
    text: "Kickstart Your Bizness! Start your free trial today and enjoy features like priority listing, business profile, contact info, and more!",
    features: [
      { text: "Business Profile", included: true },
      { text: "Contact Information", included: true },
      { text: "Physical Address", included: true },
      { text: "Store Hours & Availability", included: true },
      { text: "Map Integration", included: true },
      { text: "Different Payment Methods", included: true },
      { text: "Links to Your Other Sites", included: true },
      { text: "Up to 5 pages", included: false },
      { text: "1 Business email", included: false },
      { text: "Responsive Design", included: false },
      { text: "Social Media Integration", included: false },
      { text: "Search Engine Optimization (SEO)", included: false },
      { text: "Free Hosting", included: false },
    ],
  },
  {
    name: "15-Day Trial",
    tagline: "Boost Business",
    price: "5.99$",
    text: "Unlock Your Business Potential! Try our free 15-day trial for essential features like priority listing, local website, SEO, and more!",
    features: [
      { text: "Business Profile", included: true },
      { text: "Contact Information", included: true },
      { text: "Physical Address", included: true },
      { text: "Store Hours & Availability", included: true },
      { text: "Map Integration", included: true },
      { text: "Different Payment Methods", included: true },
      { text: "Links to Your Other Sites", included: true },
      { text: "Up to 5 pages", included: true },
      { text: "1 Business email", included: true },
      { text: "Responsive Design", included: true },
      { text: "Social Media Integration", included: true },
      { text: "Search Engine Optimization (SEO)", included: true },
      { text: "Free Hosting", included: true },
    ],
  },
];

const bundlePackage = [
  {
    name: "Starter Setup",
    tagline: "Boost Productivity, Unlock Performance",
    price: "$49.99",
    text: "Expand Efficiency, Drive Growth",
  },
  {
    name: "Advanced Setup",
    tagline: "Boost Business, Create Connections",
    price: "$99.99",
    text: "Broaden Reach, Enhance Engagement",
  },
  {
    name: "Expert Setup",
    tagline: "Connect with Customers, Drive Sales",
    price: "Let's Talk!",
    text: "Custom Solutions for Peak Potential",
  },
];

const socialMediaBundle = [
  {
    name: "Starter Package",
    tagline: "Get Social Media Traction, Expand Your Reach",
    price: "$49.99",
    text: "Expand Efficiency, Drive Growth",
  },
  {
    name: "Premium Package",
    tagline: "Connect with Customers, Drive Sales",
    price: "Let's Talk!",
    text: "Custom Solutions for Peak Potential",
  },
];

const AnimatedPrice = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const raf = useRef();

  useEffect(() => {
    let start = displayValue;
    let end = value;
    let duration = 400; // ms
    let startTime = null;

    cancelAnimationFrame(raf.current);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = start + (end - start) * progress;
      setDisplayValue(current);

      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      }
    };

    raf.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf.current);
  }, [value]);

  return <span>${displayValue.toFixed(2).toLocaleString()}</span>;
};

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <>
      <Announcement />
      <LoginHeader />
      <div className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:items-center">
          <div className="mb-6 max-w-xl text-start">
            <h1 className="text-3xl font-bold sm:text-5xl">Pricing.</h1>
          </div>
          <hr className="pt-12 border-gray-300" />

          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <div>
                    <h2 className="text-2xl font-semibold text-orange-500 sm:text-3xl">
                      Unlock Your Biz-ness Potential with Biz
                    </h2>

                    <TypingsPricing />

                    <p className="mt-4 text-gray-700">
                      In today's fast-paced business environment, having the
                      right partner can make all the difference.
                    </p>
                    <p className="mt-4 text-gray-700">
                      An online platform that prioritizes providing information
                      about local businesses, including restaurants, bars,
                      cafes, hotels, shops, salons, and more, in addition to
                      user-generated reviews and ratings.
                    </p>
                    <p className="mt-4 text-gray-700">
                      That's where "Biz" comes in. Tailored to meet the unique
                      needs of your business, "Biz" is more than just a plan;
                      it's your pathway to success. Discover why "Biz" is the
                      perfect choice for entrepreneurs who demand excellence and
                      innovation.
                    </p>
                  </div>
                  <div className="pt-5">
                    <hr />
                    <p className="text-red-500 py-3 font-bold text-center">
                      No Large Setup Fee. No Ridiculous Contracts. No Hidden
                      Charges. 100% Satisfaction Guaranteed.
                    </p>
                    <hr />
                  </div>
                </div>

                <div>
                  <img
                    src={videoPricing}
                    className="rounded"
                    alt="My Biz Solutions Pricing Asset"
                  />
                </div>
              </div>
            </div>
          </section>

          <span class="flex items-center">
            <span class="h-px flex-1 bg-gray-300"></span>
          </span>

          <div className="pt-10 text-center">
            <h2 className="text-2xl font-semibold text-orange-500 sm:text-3xl">
              Business Listings & Website Development
            </h2>
            <h2 className="text-xl my-2 font-semibold text-gray-500 sm:text-xl">
              Free Trial Package
            </h2>
          </div>
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {freeTrial.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border bg-white border-gray-200 p-8 shadow-lg"
                >
                  <div className="text-center">
                    <h2 className="text-lg font-medium text-gray-900">
                      {plan.name}
                    </h2>
                    <p className="mt-2 sm:mt-4 pb-3">
                      <strong className="text-3xl font-bold text-orange-500 sm:text-4xl">
                        {plan.price}
                      </strong>
                    </p>
                    <p className="text-md font-small py-1 text-black-900">
                      {plan.tagline}
                    </p>
                    <hr className="my-4" />
                    <p className="text-sm font-small text-gray-900">
                      {plan.text}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {feature.included ? (
                          <FaRegCheckCircle className="text-orange-600" />
                        ) : (
                          <FaRegTimesCircle className="text-red-800" />
                        )}
                        <span className="text-gray-700">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-8 block rounded-full border border-orange-600 bg-orange-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-orange-700 hover:ring-1 hover:ring-orange-700 focus:ring-3 focus:outline-none"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>

          <span class="flex items-center">
            <span class="h-px flex-1 bg-gray-300"></span>
          </span>

          <div className="px-5 py-5">
            <div>
              <div className="pt-10 text-center">
                <h2 className="text-2xl font-semibold text-orange-500 sm:text-3xl">
                  Business Listings & Website Development
                </h2>
                <h2 className="text-xl my-2 font-semibold text-gray-500 sm:text-xl">
                  Bundle Package
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {bundlePackage.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border bg-white border-gray-200 p-8 shadow-lg"
              >
                <div className="text-center">
                  <h2 className="text-lg font-medium text-gray-900">
                    {plan.name}
                  </h2>
                  <p className="mt-2 sm:mt-4 pb-3">
                    <strong className="text-3xl font-bold text-orange-500 sm:text-4xl">
                      {plan.price}
                    </strong>
                  </p>
                  <p className="text-md font-small py-1 text-black-900">
                    {plan.tagline}
                  </p>
                  <hr className="my-4" />
                  <p className="text-sm font-small text-gray-900">
                    {plan.text}
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-8 block rounded-full border border-orange-600 bg-orange-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-orange-700 hover:ring-1 hover:ring-orange-700 focus:ring-3 focus:outline-none"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div>
            <BundleCatalogue />
          </div>

          <div className="px-5 py-5">
            {/* Header & Toggle */}
            <div className="pt-10 text-center">
              <h2 className="text-2xl font-semibold text-orange-500 sm:text-3xl">
                Business Listings & Website Development
              </h2>
              <h2 className="text-xl my-2 font-semibold text-gray-500 sm:text-xl">
                Bundle Package
              </h2>

              {/* Toggle for annual discount */}
              <div className="mt-4 flex items-center gap-2 px-1">
                <span className="text-xl text-gray-600 font-medium">
                  Save up to 10% with an annual plan!
                </span>

                <label
                  htmlFor="AcceptConditions"
                  className="relative inline-block w-14 h-8"
                >
                  <input
                    type="checkbox"
                    id="AcceptConditions"
                    checked={isAnnual}
                    onChange={() => setIsAnnual(!isAnnual)}
                    className="peer sr-only"
                  />
                  <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-orange-600 transition-colors"></div>
                  <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
            </div>

            {/* Pricing Cards Section */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 mt-8">
              {bundlePackage.map((plan) => {
                // Only discount Starter & Advanced Setup
                const isDiscountable =
                  plan.name === "Starter Setup" ||
                  plan.name === "Advanced Setup";

                // Parse original price string (e.g., "$49.99") to number
                const originalPrice = parseFloat(plan.price.replace("$", ""));

                // Apply 10% discount if toggle is ON and price is numeric
                const discountedPrice =
                  isAnnual && isDiscountable
                    ? (originalPrice * 0.9).toFixed(2)
                    : originalPrice.toFixed(2);

                const showPrice =
                  plan.price === "Let's Talk!"
                    ? plan.price
                    : `$${parseFloat(discountedPrice).toLocaleString()}`;

                return (
                  <div
                    key={plan.name}
                    className="rounded-2xl border bg-white border-gray-200 p-8 shadow-lg"
                  >
                    <div className="text-center">
                      <h2 className="text-lg font-medium text-gray-900">
                        {plan.name}
                      </h2>

                      <p className="mt-2 sm:mt-4 pb-3">
                        <strong className="text-3xl font-bold text-orange-500 sm:text-4xl">
                          {plan.price === "Let's Talk!" ? (
                            plan.price
                          ) : (
                            <AnimatedPrice
                              value={parseFloat(discountedPrice)}
                            />
                          )}
                        </strong>
                        {plan.price !== "Let's Talk!" && (
                          <span className="ml-1 text-sm text-gray-500 font-medium">
                            /monthly
                          </span>
                        )}
                        {plan.price !== "Let's Talk!" && (
                          <p className="text-sm text-gray-400 font-medium">
                            {isAnnual ? "Billed Annually" : "Billed Monthly"}
                          </p>
                        )}
                      </p>

                      <p className="text-md font-small py-1 text-black-900">
                        {plan.tagline}
                      </p>
                      <hr className="my-4" />
                      <p className="text-sm font-small text-gray-900">
                        {plan.text}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="mt-8 block rounded-full border border-orange-600 bg-orange-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-orange-700 hover:ring-1 hover:ring-orange-700 focus:ring-3 focus:outline-none"
                    >
                      Get Started
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <SocialMediaCatalogue />
        </div>
      </div>
    </>
  );
};

export default PricingPage;
