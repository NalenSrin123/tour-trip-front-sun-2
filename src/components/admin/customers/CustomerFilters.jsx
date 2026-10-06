import { ChevronDown, Search } from "lucide-react";

function FilterButton({ children }) {
  return (
    <button
      type="button"
      className="flex h-12 items-center justify-between gap-4 rounded-lg border border-slate-300 bg-white px-5 text-base text-slate-800 transition hover:bg-slate-50"
    >
      {children}
      <ChevronDown size={19} className="text-slate-500" />
    </button>
  );
}

export default function CustomerFilters() {
  return (
    <div className="flex flex-col gap-4 p-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-[510px]">
        <Search
          size={25}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search customers by name or email..."
          className="h-14 w-full rounded-lg border border-slate-300 bg-white pl-14 pr-4 text-base text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <FilterButton>Status: All</FilterButton>
        <FilterButton>Country: All</FilterButton>
        <FilterButton>Sort: Newest</FilterButton>
      </div>
    </div>
  );
}