import React, { useState } from "react";

const Filter = ({ onApply }) => {
  const [filters, setFilters] = useState({
    alphabetical: false,
    distance: false,
    mostRated: false,
    recentlyUpdated: false,
  });

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: checked,
    }));
  };

  const handleApply = () => {
    onApply(filters);
  };

  return (
    <div className="h-auto rounded-lg bg-white p-4 ms-3">

      <p className="text-sm font-large py-3">Sort</p>
      <fieldset>
        <legend className="sr-only">Checkboxes</legend>
        <div className="space-y-2 ms-5">
          <label htmlFor="alphabetical" className="flex cursor-pointer items-start gap-4">
            <div className="flex items-center">
              &#8203;
              <input type="checkbox" className="size-4 rounded-sm border-gray-300" id="alphabetical" checked={filters.alphabetical} onChange={handleChange} />
            </div>
            <div>
              <strong className="font-medium text-gray-900"> Alphabetical </strong>
            </div>
          </label>

          <label htmlFor="distance" className="flex cursor-pointer items-start gap-4">
            <div className="flex items-center">
              &#8203;
              <input type="checkbox" className="size-4 rounded-sm border-gray-300" id="distance" checked={filters.distance} onChange={handleChange} />
            </div>
            <div>
              <strong className="font-medium text-gray-900"> Distance </strong>
            </div>
          </label>

          <label htmlFor="mostRated" className="flex cursor-pointer items-start gap-4">
            <div className="flex items-center">
              &#8203;
              <input type="checkbox" className="size-4 rounded-sm border-gray-300" id="mostRated" checked={filters.mostRated} onChange={handleChange} />
            </div>
            <div>
              <strong className="font-medium text-gray-900"> Most Rated </strong>
            </div>
          </label>

          <label htmlFor="recentlyUpdated" className="flex cursor-pointer items-start gap-4">
            <div className="flex items-center">
              &#8203;
              <input type="checkbox" className="size-4 rounded-sm border-gray-300" id="recentlyUpdated" checked={filters.recentlyUpdated} onChange={handleChange} />
            </div>
            <div>
              <strong className="font-medium text-gray-900"> Recently Updated </strong>
            </div>
          </label>
        </div>
      </fieldset>

      <button
        className="group mt-5 block w-full text-center relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
        onClick={handleApply}
      >
        <span className="absolute inset-0 border border-red-600"></span>
        <span className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
          Apply
        </span>
      </button>
    </div>
  );
};

export default Filter;