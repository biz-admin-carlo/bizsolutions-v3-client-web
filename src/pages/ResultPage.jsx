import React, { useState, useEffect } from "react";
import LoginHeader from "../components/LoginHeader";
import Announcement from "../components/Announcement";
import { useLocation } from "react-router-dom";
import { IoLocationSharp, IoCall, IoStarSharp } from "react-icons/io5";
import image from "../assets/logo192.png";
import Categories from "../components/Categories";
import FeaturedBiz from "../components/FeaturedBiz";
import Filter from "../components/Filter";
import { searchLocation, searchLatLong } from "../service";
import { US_STATES } from "../utils";
import SkeletonArticle from "../components/SkeletonArticle";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const articlesPerPage = 5;
  const location = useLocation();

  const navigate = useNavigate();

  const handleArticleClick = (article) => {
    if (article.subscriptionName) {
      navigate(`/biz/result/${article.name.replace(/\s+/g, "-").toLowerCase()}`);
    } else {
      const address = encodeURIComponent(
        `${article.location.address1}, ${article.location.city}, ${article.location.state}, ${article.location.zip_code}`
      );
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, "_blank");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const locationParam = params.get('location');

    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        let data;
        if (locationParam && locationParam.startsWith('Lat=')) {
          const [latitude, longitude] = locationParam.replace('Lat=', '').split(',Long=');
          data = await searchLatLong(latitude, longitude, category);
        } else {
          data = await searchLocation(locationParam, category);
        }
        setArticles(data.businesses);
        setFilteredArticles(data.businesses);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getStateName = (state) => {
    const foundState = US_STATES.find(
      (s) => s.value.toLowerCase() === state.toLowerCase() || s.label.toLowerCase() === state.toLowerCase()
    );
    return foundState ? foundState.label : state;
  };

  const handleApplyFilters = (filters) => {
    let filtered = [...articles];

    if (filters.openNow) {
      filtered = filtered.filter(article => article.isOpenNow);
    }
    if (filters.withStore) {
      filtered = filtered.filter(article => article.hasStore);
    }
    if (filters.homeService) {
      filtered = filtered.filter(article => article.hasHomeService);
    }
    if (filters.withWebsite) {
      filtered = filtered.filter(article => article.hasWebsite);
    }
    if (filters.withContactNumber) {
      filtered = filtered.filter(article => article.hasContactNumber);
    }
    if (filters.poweredByMyBizSolutions) {
      filtered = filtered.filter(article => article.subscriptionName);
    }

    if (filters.alphabetical) {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (filters.distance) {
      filtered.sort((a, b) => a.distance - b.distance);
    }
    if (filters.mostRated) {
      filtered.sort((a, b) => b.rating - a.rating);
    }
    if (filters.recentlyUpdated) {
      filtered.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }

    setFilteredArticles(filtered);
  };

  const renderSubscriptionBadge = (article) => {
    if (article.subscriptionName) {
      return (
        <div className="ml-auto flex-shrink-0">
          <strong className="rounded-sm border border-orange-500 bg-orange-500 px-4 py-2 text-xs font-medium text-white">
            Powered by BizSolutions

          </strong>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Announcement />
      <LoginHeader />

      <div>
        <div className="flex justify-between items-center pt-14 mx-5">
          <h1 className="text-xl font-bold sm:text-xl">Recommended Business</h1>
          <p className="text-gray-500">Showing {indexOfFirstArticle + 1} - {indexOfLastArticle} of {filteredArticles.length} results</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <Filter onApply={handleApplyFilters} />

          <div className="h-auto rounded-lg lg:col-span-2 p-4">
            {isLoading ? (
              <>
                <SkeletonArticle />
                <SkeletonArticle />
                <SkeletonArticle />
                <SkeletonArticle />
                <SkeletonArticle />
              </>
            ) : (
              currentArticles.map((article) => (
                <article
                  key={article.id}
                  className="mb-4 rounded-xl bg-white p-4 ring-3 ring-orange-50 sm:p-6 lg:p-8 cursor-pointer"
                  onClick={() => handleArticleClick(article)}
                >
                  <div className="flex items-start sm:gap-6">
                    <img src={image || article.image_url} alt="Business" className="w-24 h-24 rounded-lg object-cover" />
                    <div>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-medium sm:text-xl">
                            {article.name}
                          </h3>
                          {article.subscriptionName && (
                            <span className="flex items-center gap-1 whitespace-nowrap bg-purple-100 px-1 py-0.5 text-sm text-purple-700">
                              <IoStarSharp className="text-yellow-500" /> {article.rating}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2 mt-2">
                        <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 text-sm">
                          Open Now
                        </span>
                        <span className="whitespace-nowrap rounded-full bg-amber-100 px-2.5 py-0.5 text-sm text-amber-700">
                          {getStateName(article.location.state)}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1">
                          <IoLocationSharp className="text-gray-700" />
                          <p className="text-sm text-gray-700">{article.location.address1}</p>
                        </div>
                      </div>

                      {article.subscriptionName && (
                        <>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center gap-1">
                              <IoCall className="text-gray-700" />
                              <p className="text-sm text-gray-700">{article.display_phone}</p>
                            </div>
                          </div>

                          <div className="mt-3">
                            <p className="text-sm text-gray-700">
                              {article.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?"}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                    {renderSubscriptionBadge(article)}
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {currentPage > 1 && (
          <button
            onClick={() => paginate(currentPage - 1)}
            className="px-3 py-1 mx-1 border rounded-md text-gray-700 bg-white hover:bg-gray-100"
          >
            Prev
          </button>
        )}

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 mx-1 border rounded-md ${
              currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {index + 1}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => paginate(currentPage + 1)}
            className="px-3 py-1 mx-1 border rounded-md text-gray-700 bg-white hover:bg-gray-100"
          >
            Next
          </button>
        )}
      </div>

      <FeaturedBiz />
      <Categories />
    </>
  );
};

export default ResultPage;