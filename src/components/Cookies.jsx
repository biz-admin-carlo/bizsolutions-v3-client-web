import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CryptoJS from "crypto-js"; // Import CryptoJS for hashing
const SECRET_KEY = process.env.SECRET_KEY;

const Cookies = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted) {
      setIsAccepted(true);
    } else {
      const collectData = async () => {
        try {
          // Fetch IP address
          const ipResponse = await fetch("https://api.ipify.org?format=json");
          const { ip } = await ipResponse.json();

          // Get network connection details
          const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
          const networkInfo = connection ? connection.effectiveType : "unknown";

          // Get geolocation
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;

              // Get current date in EST
              const estDate = new Intl.DateTimeFormat("en-US", {
                timeZone: "America/New_York",
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date());

              // Combine data
              const userData = {
                ip,
                networkInfo,
                latitude,
                longitude,
                acceptanceDate: estDate,
              };

              // Hash the data
              const hashedData = CryptoJS.AES.encrypt(
                JSON.stringify(userData),
                SECRET_KEY
              ).toString();

              // Store hashed data in localStorage
              localStorage.setItem("userData", hashedData);
            },
            (error) => {
              console.error("Geolocation error:", error);
            }
          );
        } catch (error) {
          console.error("Error collecting data:", error);
        }
      };

      collectData();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsAccepted(true);
  };

  if (isAccepted) {
    return null; // Hide the banner if cookies are accepted
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-auto p-4 flex justify-center w-full">
      <div className="flex items-center justify-between rounded border border-gray-200 bg-gray-100 px-6 py-4 text-gray-900 w-full max-w-4xl">
        <p className="text-center font-medium">
            By continuing to use this site, you agree to the use of cookies.{" "}
            <Link to="/privacy-policy" className="text-black">
            Learn more
            </Link>.
        </p>
        <button
          className="ml-4 inline-block rounded-sm bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl focus:ring-3 focus:outline-none"
          onClick={handleAccept}
        >
          I agree
        </button>
      </div>
    </div>
  );
};

export default Cookies;