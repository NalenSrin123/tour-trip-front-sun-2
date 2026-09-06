import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex flex-col gap-4 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-slate-500">
        Showing <span className="font-medium text-slate-700">1</span> to{" "}
        <span className="font-medium text-slate-700">5</span> of{" "}
        <span className="font-medium text-slate-700">45</span> results
      </p>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100">
          <ChevronLeft size={16} />
          Previous
        </button>
        <button className="h-10 w-10 rounded-lg bg-indigo-600 text-sm font-medium text-white">
          1
        </button>
        <button className="h-10 w-10 rounded-lg text-sm text-slate-600 hover:bg-slate-100">
          2
        </button>
        <button className="h-10 w-10 rounded-lg text-sm text-slate-600 hover:bg-slate-100">
          3
        </button>
        <span className="px-2 text-slate-500">...</span>
        <button className="h-10 w-10 rounded-lg text-sm text-slate-600 hover:bg-slate-100">
          9
        </button>
        <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100">
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
