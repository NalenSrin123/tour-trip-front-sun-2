import { ChevronDown, Search } from "lucide-react";
import React from "react";

const TourFilter = ({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
}) => {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50/50 p-5 md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <div className="relative w-full md:w-80">
        <Search
          size={19}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search tours..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>
      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-3 pl-4 pr-10 text-sm text-slate-700 outline-none focus:border-indigo-500 sm:w-44"
          >
            <option value="ALL">All Category</option>
            <option value="Beach">Beach</option>
            <option value="Cultural">Cultural</option>
            <option value="Adventure">Adventure</option>
            <option value="City">City</option>
          </select>
          <ChevronDown
            size={17}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
        </div>
        <div className="relative">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-3 pl-4 pr-10 text-sm text-slate-700 outline-none focus:border-indigo-500 sm:w-40"
          >
            <option value="ALL">All Statuses</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
            <option value="DRAFT">Draft</option>
          </select>
          <ChevronDown
            size={17}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TourFilter;