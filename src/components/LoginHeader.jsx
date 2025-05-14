import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "../assets/icons/icon-app-logo.jpg";

const LoginHeader = () => {
  const navigate = useNavigate();
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
                className="group relative text-gray-700 transition hover:text-black/75"
                onClick={() => navigate("/home")}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
              </button>
            </li>

            <li>
              <button
                className="group relative text-gray-700 transition hover:text-black/75"
                onClick={() => navigate("/pricing")}
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
              </button>
            </li>

            <li>
              <button
                className="group relative text-gray-700 transition hover:text-black/75"
                onClick={() => navigate("/company-history")}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
              </button>
            </li>

            <li>
              <button
                className="group relative text-gray-700 transition hover:text-black/75"
                onClick={() => navigate("/contact-us")}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
              </button>
            </li>

            {/* <li>
              <button
                className="group relative text-gray-700 transition hover:text-black/75"
                onClick={() => navigate("/contact-us")}
              >
                Account
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
              </button>
            </li> */}

            </ul>
          </nav>

          <div className="flex justify-end items-center">
            <button
              className="text-white transition py-2 hover:text-gray-300"
              onClick={() => navigate("/login")}
            >
              <a
                className="group relative inline-block overflow-hidden border border-black px-8 py-3 focus:ring-3 focus:outline-hidden"
              >
                <span
                  className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full"
                ></span>

                <span
                  className="relative text-sm font-medium text-black transition-colors group-hover:text-orange-500"
                >
                  Login
                </span>
              </a>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default LoginHeader;