import React, { useState, useEffect, useCallback } from "react";
import LoginHeader from "../components/LoginHeader";
import Announcement from "../components/Announcement";
import imageOne from "../assets/mybizsolutions-app-vertical.png";
import { MdMyLocation } from "react-icons/md";
import { BiLoaderCircle, BiCheckDouble } from "react-icons/bi";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import FeaturedBiz from "../components/FeaturedBiz";

const SearchPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [typedPlaceholder, setTypedPlaceholder] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [typedLocation, setTypedLocation] = useState(false);
  const [locationStatus, setLocationStatus] = useState("");

  useEffect(() => {
    const encodedLocation = sessionStorage.getItem("location");
    if (encodedLocation) {
      const decodedLocation = atob(encodedLocation);
      const [latitude, longitude] = decodedLocation.split(",");
      setUserCoordinates({ latitude, longitude });
    }
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLocationInput = useCallback(
    debounce((value) => {
      setLocation(value);
      setTypedLocation(true);
      if (value.trim() !== "") {
        setLocationStatus("checking");
        setTimeout(() => setLocationStatus("available"), 500);
      } else {
        setLocationStatus("");
      }
    }, 150),
    []
  );

  const getUserLocation = () => {
    setLoading(true);
    setLocationStatus("checking");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation("My Current Location");
          setUserCoordinates(coords);
          setLocationStatus("available");
          setLoading(false);
          setTypedLocation(false);
        },
        () => {
          setLocationStatus("unavailable");
          setLoading(false);
          setTypedLocation(true);
        }
      );
    } else {
      setLocationStatus("unavailable");
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams({
      category: category,
    });

    if (userCoordinates && !typedLocation) {
      queryParams.append(
        "location",
        `Lat=${userCoordinates.latitude},Long=${userCoordinates.longitude}`
      );
    } else {
      queryParams.append("location", location);
    }

    navigate(`/search?${queryParams.toString()}`);
  };

  useEffect(() => {
    const typingStrings = ["Restaurants", "Hotel", "Laundromat", "Dentist", "Contractors", "Services"];
    let currentString = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimer;

    const type = () => {
      setTypedPlaceholder(typingStrings[currentString].substring(0, charIndex));
      if (!isDeleting && charIndex === typingStrings[currentString].length) {
        typingTimer = setTimeout(() => {
          isDeleting = true;
        }, 1000);
      } else if (isDeleting && charIndex === 0) {
        currentString = (currentString + 1) % typingStrings.length;
        isDeleting = false;
      }
      charIndex += isDeleting ? -1 : 1;
      typingTimer = setTimeout(type, isDeleting ? 50 : 100);
    };

    type();
    return () => clearTimeout(typingTimer);
  }, []);

  return (
    <>
      <Announcement />
      <LoginHeader />

      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg">
            <h1 className="text-2xl font-bold sm:text-3xl">Discover & Experience!</h1>
            <p className="text-gray-500">Search for local biz in your area</p>
          </div>

          <form onSubmit={handleSubmit} className="lg:mx-14 mt-8 mb-0 max-w-md space-y-4">
            <div>
              <label htmlFor="categories" className="sr-only">Categories</label>
              <input
                id="categories"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                placeholder={typedPlaceholder}
                value={category}
                onChange={handleCategoryChange}
              />
            </div>

            <div>
              <label htmlFor="location" className="sr-only">Location</label>
              <div className="relative">
                <input
                  id="location"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter location"
                  value={location}
                  onChange={(event) => handleLocationInput(event.target.value)}
                />
                <div
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={getUserLocation}
                >
                  {locationStatus === "checking" && <BiLoaderCircle />}
                  {locationStatus === "available" && <BiCheckDouble style={{ color: "green" }} />}
                  {locationStatus === "unavailable" && <BiCheckDouble style={{ color: "red" }} />}
                  {locationStatus === "" && <MdMyLocation />}
                </div>
              </div>
            </div>

            <div>
              <button type="submit" className="w-full rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-white">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img alt="MyBizSolutions Search Page" src={imageOne} className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      <FeaturedBiz />

      <Categories/>
    </>
  );
};

export default SearchPage;