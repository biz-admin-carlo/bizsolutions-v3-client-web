import React, { useState } from "react";
import { IoStarSharp, IoLocationSharp, IoCall } from "react-icons/io5";
import LoginHeader from "../components/LoginHeader";
import Announcement from "../components/Announcement";
import image from "../assets/logo192.png";
import Categories from "../components/Categories";
import Breadcrumbs from "../components/Breadcrumbs";

const BizPage = () => {
  const [activeTab, setActiveTab] = useState("Business Info");

  const tabContent = {
    "Business Info": (
      <dl className="divide-y divide-gray-100 text-sm">
        {[
          { title: "Business Name", value: "Intergrity Collection LLC" },
          { title: "Display Phone Number", value: "719-221-6148" },
          { title: "Contact Email Address", value: "intergritycollection.llc@gmail.com" },
          { title: "Physical Address", value: "28417 County Road, Buena Vista, Colorado, 81211" },
          { title: "Other Websites", value: "https://integritycollectionsllc.com/" },
          { title: "Serviced Offered", value: "Construction" },

        ].map((item, index) => (
          <div key={index} className="grid grid-cols-1 p-3 even:bg-gray-50 sm:grid-cols-3">
            <dt className="font-medium text-gray-900">{item.title}</dt>
            <dd className="text-gray-700 sm:col-span-2">{item.value}</dd>
          </div>
        ))}
      </dl>
    ),
    "Hours": (
        <dl className="divide-y divide-gray-100 text-sm">
          {[
            { title: "Monday", value: "9:00 AM - 5:00 PM" },
            { title: "Tuesday", value: "9:00 AM - 5:00 PM" },
            { title: "Wednesday", value: "9:00 AM - 5:00 PM" },
            { title: "Thursday", value: "9:00 AM - 5:00 PM" },
            { title: "Friday", value: "9:00 AM - 5:00 PM" },
            { title: "Saturday", value: "Closed" },
            { title: "Sunday", value: "Closed" },
  
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-1 p-3 even:bg-gray-50 sm:grid-cols-3">
              <dt className="font-medium text-gray-900">{item.title}</dt>
              <dd className="text-gray-700 sm:col-span-2">{item.value}</dd>
            </div>
          ))}
        </dl>
    ),
    Reviews: <p className="p-4 text-gray-700">User reviews will be displayed here.</p>,
    "Gallery": (
        <div className="flex justify-center p-4">
            <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <li>
                    <a href="#" class="group block overflow-hidden">
                    <img
                        src={image}
                        alt=""
                        class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    </a>
                </li>

                <li>
                    <a href="#" class="group block overflow-hidden">
                    <img
                        src={image}
                        alt=""
                        class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    </a>
                </li>

                <li>
                    <a href="#" class="group block overflow-hidden">
                    <img
                        src={image}
                        alt=""
                        class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    </a>
                </li>

                <li>
                    <a href="#" class="group block overflow-hidden">
                    <img
                        src={image}
                        alt=""
                        class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    </a>
                </li>
                </ul>
        </div>
    ),
    "Maps": (
        <div className="flex justify-center p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.033277403238!2d-118.26982902353275!3d34.04301747316044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b85dea2a93%3A0x1ff47c3ceb7bb2d5!2sCrypto.com%20Arena!5e0!3m2!1sfil!2sph!4v1741959568145!5m2!1sfil!2sph"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    ),
    "Contact": (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-4">
          <div className="rounded-lg bg-white p-6">
            <p className="line-clamp-2 pt-4 text-sm text-gray-700">
                Suggest an edit? Business details incorrect?
            </p>
            <h6 className="text-gray-700 text-xl pt-2 font-bold">Feel free to message us!</h6>
            <div className="w-full max-w-lg mt-4">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message"
                rows="6"
                id="message"
              ></textarea>
              <div className="mt-4 flex justify-start gap-2">
                <button
                  type="submit"
                  className="rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-800"
                >
                  Send Inquiry
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-orange-600 px-5 py-3 font-medium text-white transition hover:bg-orange-700"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6">
            <p className="text-lg font-semibold text-gray-900">Services Offered:</p>
            <ul className="mt-2 text-gray-700 list-disc pl-5">
              {[ 
                "Architectural design",
                "Building additions",
                "Home interior design",
                "Kitchen remodeling",
                "Manufactured home construction",
                "Single-family home construction",
                "Office interior design",
                "New room addition",
                "Architectural project management",
                "Commercial interior design",
                "Partial home interior design",
                "Guest house or ADU construction",
                "Modular home construction",
                "New structure construction",
                "Remodeling"
              ].map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
    ),

  };

  return (
    <>
      <Announcement />
      <LoginHeader />

      <div className="px-10 py-10">
        <Breadcrumbs />
      </div>

      {/* Business Info Card */}
      <article className="rounded-xl border-2 border-gray-100 bg-white">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <a href="#" className="block shrink-0">
            <img alt="Business Logo" src={image} className="w-60 h-60 rounded-lg object-cover" />
          </a>
          <div>
            <div className="flex items-center gap-2 pt-4">
                <h3 className="font-medium sm:text-lg">
                <a href="#" className="hover:underline">
                    Recommended Business #4
                </a>
                </h3>
                <span className="flex items-center gap-1 whitespace-nowrap bg-purple-100 px-2 py-1 text-sm text-purple-700 rounded-lg">
                <IoStarSharp className="text-yellow-500" /> 3.8
                </span>
            </div>

            <div className="flex gap-2 my-2">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 text-sm">
                Open Now
                </span>
                <span className="whitespace-nowrap rounded-full bg-amber-100 px-2.5 py-0.5 text-sm text-amber-700">
                California
                </span>
            </div>


            <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1">
                <IoLocationSharp className="text-gray-700" />
                <p className="text-sm text-gray-700">20289 Stevens Creek Blvd, Suite 1039, Cupertino, CA 95014, USA</p>
                </div>
            </div>

            <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1">
                <IoCall className="text-gray-700" />
                <p className="text-sm text-gray-700">+1 833-249-7418</p>
                </div>
            </div>

            <span
            class="inline-flex items-center justify-center rounded-full mt-2 bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
            >

            <p class="whitespace-nowrap text-sm">Construction</p>
            </span>

            <p className="line-clamp-2 pt-4 text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut dolor ullamcorper, sollicitudin nunc quis, scelerisque erat. Quisque porta condimentum massa nec lobortis. Etiam urna urna, sollicitudin eget tempus eu, ultricies quis felis.
            </p>

          </div>
        </div>
        <div className="flex justify-end">
            <strong className="rounded-sm border border-orange-500 bg-orange-500 px-3 py-1 text-xs font-medium text-white">
                Powered by MyBizSolutions
            </strong>
        </div>
      </article>

      {/* Tab Navigation & Content */}
      <div className="px-10 py-10">
        <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-6" aria-label="Tabs">
            {Object.keys(tabContent).map((tab) => (
                <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 border-b-2 px-1 pb-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700 ${
                    activeTab === tab ? "border-sky-500 text-sky-600" : "border-transparent text-gray-500"
                }`}
                >
                {tab}
                </button>
            ))}
            </nav>
        </div>
        <div className="p-4">{tabContent[activeTab]}</div>
      </div>

      <Categories />
    </>
  );
};

export default BizPage;