import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import icon from "../assets/icons/icon-app-logo.jpg";

const solutions = ["Mobile Development", "SEO Solutions", "Social Media Management", "Website Development", " Website Revamp"];
const services = ["Bookkeping", "Customer Support", "Sales & Collection", "Technical & IT Support"];

const LoginHeader = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-orange-400">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/home" className="block text-orange-600">
              <span className="sr-only">Home</span>
              <img src={icon} alt="MyBizSolutions LLC" className="h-11" />
            </Link>
          </div>

          {/* Center Navigation */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex justify-center gap-6 text-sm">
            <li>
              <button
                className="text-gray-700 transition hover:text-black/75"
                onClick={() => navigate("/home")}
              >
                Home
              </button>
            </li>

              <li>
                <button
                className="text-gray-700 transition hover:text-black/75"
                onClick={() => navigate("/pricing")}
                >
                  Pricing
                </button>
              </li>
{/* 
              <li className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("solutions")}
                  className="flex items-center gap-1 text-black transition hover:text-black/75"
                >
                  Solutions
                  {activeDropdown === "solutions" ? <FaAngleUp /> : <FaAngleDown />}
                </button>

                {activeDropdown === "solutions" && (
                  <div className="absolute left-0 z-10 mt-2 w-80 rounded-md bg-white shadow-lg border">
                    {solutions.map((solution) => (
                      <a
                        key={solution}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {solution}
                      </a>
                    ))}
                  </div>
                )}
              </li>

              <li className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("services")}
                  className="flex items-center gap-1 text-black transition hover:text-black/75"
                >
                  Services
                  {activeDropdown === "services" ? <FaAngleUp /> : <FaAngleDown />}
                </button>

                {activeDropdown === "services" && (
                  <div className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg border">
                    {services.map((service) => (
                      <a
                        key={service}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </li> */}

              <li>
                <button
                className="text-gray-700 transition hover:text-black/75"
                onClick={() => navigate("/company-history")}
                >
                 About
                </button>
              </li>


              <li>
                <button
                className="text-gray-700 transition hover:text-black/75"
                onClick={() => navigate("/contact-us")}
                >
                 Contact
                </button>
              </li>

            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default LoginHeader;
