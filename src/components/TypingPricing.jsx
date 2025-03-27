import React from "react";
import { ReactTyped } from "react-typed";

const TypingPricing = () => (
  <h5 className="text-xl my-2 font-semibold text-gray-500 sm:text-xl">
    <ReactTyped
      strings={[
        "The Perfect Plan For You!",
        "Discover Local Businesses",
        "Showcase your Local Businesses",
        "Make it available in larger audience",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  </h5>
);

export default TypingPricing;