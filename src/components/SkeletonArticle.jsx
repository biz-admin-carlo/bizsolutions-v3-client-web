import React from "react";

const SkeletonArticle = () => {
  return (
    <article className="mb-4 rounded-xl bg-white p-4 ring-3 ring-orange-50 sm:p-6 lg:p-8 animate-pulse">
      <div className="flex items-start sm:gap-6">
        <div className="w-24 h-24 rounded-lg bg-gray-300"></div>
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
              <div className="h-6 bg-gray-300 rounded w-12"></div>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="h-6 bg-gray-300 rounded w-20"></div>
            <div className="h-6 bg-gray-300 rounded w-20"></div>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          </div>
          <div className="mt-3">
            <div className="h-6 bg-gray-300 rounded w-full"></div>
            <div className="h-6 bg-gray-300 rounded w-full mt-2"></div>
            <div className="h-6 bg-gray-300 rounded w-full mt-2"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SkeletonArticle;