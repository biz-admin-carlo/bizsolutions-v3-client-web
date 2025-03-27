import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Announcement = () => {
  const messages = [
    "Enjoy referral discounts and earn credits.",
    "Save up to 20% off on selected services.",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-white px-4 py-3 text-black">
      <p className="text-center text-sm font-medium">
        {messages[currentMessage]}{" "}
        <Link to="/pricing" className="inline-block underline">Check now!</Link>
      </p>
    </div>
  );
};

export default Announcement;