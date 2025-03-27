import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoStorefront } from "react-icons/io5";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const capitalizeSentence = (sentence) => {
    return sentence
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <Link to="/" className="text-gray-600 hover:text-orange-600">
            <span className="block transition px-2 hover:text-orange-600">
              <span className="sr-only">Home</span>
              <IoStorefront />
            </span>
          </Link>
        </li>
        <span className="mx-2">/</span>
        <li>
          <Link to="/categories" className="text-gray-600 hover:text-orange-600">
            <span className="block transition px-2 hover:text-gray-700">
              Categories
            </span>
          </Link>
        </li>
        {pathnames.length > 0 && (
          <>
            <span className="mx-2">/</span>
            <li className="text-gray-500">
              {capitalizeSentence(pathnames[pathnames.length - 1])}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;