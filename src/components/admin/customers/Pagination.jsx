import { ChevronLeft, ChevronRight } from "lucide-react";

function PageButton({ children, active, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`flex h-8 min-w-8 items-center justify-center rounded-lg border px-2 text-sm transition ${
        active
          ? "border-blue-600 bg-blue-600 text-white"
          : disabled
            ? "cursor-not-allowed border-slate-200 text-slate-300"
            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

export default function Pagination() {
  return (
    <div className="flex flex-col gap-3 px-4 py-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>
        Showing <span className="font-semibold text-slate-900">1</span> to{" "}
        <span className="font-semibold text-slate-900">3</span> of{" "}
        <span className="font-semibold text-slate-900">1,284</span> customers
      </p>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-400">
          Rows per page:
          <select className="h-8 rounded-lg border border-slate-200 bg-white px-2 text-sm normal-case text-slate-600 outline-none">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </label>

        <div className="flex items-center gap-1.5">
          <PageButton disabled>
            <ChevronLeft size={14} />
          </PageButton>
          <PageButton active>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <span className="px-1 text-slate-400">...</span>
          <PageButton>129</PageButton>
          <PageButton>
            <ChevronRight size={14} />
          </PageButton>
        </div>
      </div>
    </div>
  );
}
