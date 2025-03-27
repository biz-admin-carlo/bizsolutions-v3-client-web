import React from "react";

import icon1 from "../assets/icons/icon-aws.png";
import icon2 from "../assets/icons/icon-azure.png";
import icon3 from "../assets/icons/icon-gcp.png";
import icon4 from "../assets/icons/icon-express.png";
import icon5 from "../assets/icons/icon-figma.png";
import icon6 from "../assets/icons/icon-firebase.png";
import icon7 from "../assets/icons/icon-flutter.png";
import icon8 from "../assets/icons/icon-js.png";
import icon9 from "../assets/icons/icon-mongoDB.png";
import icon10 from "../assets/icons/icon-next.png";
import icon11 from "../assets/icons/icon-nodeJS.png";
import icon12 from "../assets/icons/icon-postgresSQL.png";
import icon13 from "../assets/icons/icon-postman.png";
import icon14 from "../assets/icons/icon-reactJS.png";
import icon15 from "../assets/icons/icon-reactNative.png";

// Duplicate icons for smooth infinite scrolling
const icons = [
  icon15, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8,
  icon9, icon10, icon11, icon12, icon13, icon14 
];

const loopedIcons = [...icons, ...icons]; // Duplicate to create a seamless loop

const CarouselSpacing = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto text-center">
          <h3 className="text-lg font-semibold py-3 text-gray-700">
            Trusted Partners in Technologies
          </h3>

          <div className="overflow-hidden relative w-full">
            <div className="flex w-max animate-scroll">
              {loopedIcons.map((icon, index) => (
                <div
                  key={index}
                  className="flex justify-center p-6 mx-8 w-28 h-28 shrink-0" // Adjusted padding (p-6) & margin (mx-8) for more spacing
                >
                  <img src={icon} alt={`Icon ${index + 1}`} className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CarouselSpacing;
