import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const [userCoordinates, setUserCoordinates] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const encodedLocation = sessionStorage.getItem("location");
    if (encodedLocation) {
      const decodedLocation = atob(encodedLocation); // Base64 decode the location
      const [latitude, longitude] = decodedLocation.split(",");
      setUserCoordinates({ latitude, longitude });
    }
  }, []);

  const categories = [
    {
      title: "Finance & Professional Services",
      businesses: ["Accounting", "Consulting", "Legal", "Insurance"],
    },
    {
      title: "Construction & Real Estate",
      businesses: ["Construction", "Real Estate", "Interior Design"],
    },
    {
      title: "Retail & E-Commerce",
      businesses: [
        "Retail",
        "Grocery",
        "Clothing Store",
        "Jewelry",
        "Electronic Store",
        "Bookstore",
        "E-Commerce",
      ],
    },
    {
      title: "Food & Hospitality",
      businesses: [
        "Restaurants",
        "Cafes",
        "Bakeries",
        "Bars & Nightclubs",
        "Food Services",
        "Hospitality",
      ],
    },
    {
      title: "Healthcare & Wellness",
      businesses: [
        "Healthcare",
        "Pharmaceuticals",
        "Biotechnology",
        "Beauty Salon",
        "Spa",
        "Home & Wellness",
      ],
    },
    {
      title: "Technology & Innovation",
      businesses: [
        "Technology",
        "Cyber Security",
        "Data Analytics",
        "Consumer Electronics",
      ],
    },
    {
      title: "Transportation & Logistics",
      businesses: ["Transportation", "Logistics"],
    },
    {
      title: "Arts, Entertainment & Media",
      businesses: [
        "Entertainment",
        "Gaming",
        "Art Gallery",
        "Arts & Crafts",
        "Media & Publishing",
      ],
    },
    {
      title: "Education & Training",
      businesses: ["Education"],
    },
    {
      title: "Lifestyle & Recreation",
      businesses: [
        "Fitness",
        "Sports & Recreation",
        "Home & Garden",
        "Personal Care",
        "Pet Services",
      ],
    },
    {
      title: "Marketing & Communications",
      businesses: [
        "Marketing",
        "Advertising",
        "Telecommunications",
        "Media & Publishing",
      ],
    },
    {
      title: "Agriculture & Environmental",
      businesses: ["Agriculture", "Ecological Services"],
    },
    {
      title: "Government & Non-Profit",
      businesses: ["Government Services", "Charity", "Non-Profit"],
    },
    {
      title: "Tourism & Travel",
      businesses: ["Tourism", "Travel"],
    },
    {
      title: "Energy & Manufacturing",
      businesses: ["Energy", "Manufacturing", "Wholesale"],
    },
    {
      title: "Automotive",
      businesses: ["Automotive", "Auto Repair"],
    },
  ];

  const handleCategoryClick = (category) => {
    const queryParams = new URLSearchParams({
      category: category,
    });

    if (userCoordinates) {
      queryParams.append(
        "location",
        `Lat=${userCoordinates.latitude},Long=${userCoordinates.longitude}`
      );
    }

    navigate(`/search?${queryParams.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="my-14 mx-10">
        <span className="relative flex justify-center">
          <div
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
          ></div>
          <span className="relative z-10 bg-white px-6">Categories</span>
        </span>
      </div>

      <footer className="bg-white py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index}>
                <p className="font-medium text-gray-900">{category.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {category.businesses.map((business, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleCategoryClick(business)}
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {business}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Categories;