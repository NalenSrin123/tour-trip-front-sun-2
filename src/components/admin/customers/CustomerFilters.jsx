import { ChevronDown, Search } from "lucide-react";

function FilterSelect({ label, options }) {
  return (
    <label className="relative flex h-10 items-center rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-600">
      <span className="mr-2 text-xs font-semibold uppercase text-slate-400">
        {label}:
      </span>
      <select className="appearance-none bg-transparent pr-6 text-sm text-slate-700 outline-none">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-3 text-slate-400"
      />
    </label>
  );
}

export default function CustomerFilters() {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-100 p-4 lg:flex-row lg:items-center">
      <div className="relative w-full lg:max-w-[420px]">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search customers by name, email, or phone..."
          className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
        />
      </div>

      <div className="flex flex-wrap gap-2.5">
        <FilterSelect label="Status" options={["All", "Active", "Pending", "Inactive", "Suspended"]} />
        <FilterSelect label="Country" options={["All"]} />
        <FilterSelect label="Tier" options={["All"]} />
      </div>
    </div>
  );
}
