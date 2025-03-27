import React from "react";

const SkeletonFeaturedBiz = () => {
  return (
    <>
    <div className="my-14 mx-10">
      <span className="relative flex justify-center">
        <div
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
        ></div>
        <span className="relative z-10 bg-white px-6">Featured Biz</span>
      </span>
    </div>
    <section className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="group relative block bg-black overflow-hidden rounded-lg shadow-lg animate-pulse">
          <div className="absolute inset-0 h-full w-full bg-gray-300 opacity-75"></div>
          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default SkeletonFeaturedBiz;