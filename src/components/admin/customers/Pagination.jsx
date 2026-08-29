function PageButton({ children, active, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`h-11 min-w-11 rounded border px-3 transition ${
        active
          ? "border-indigo-700 bg-indigo-700 text-white"
          : disabled
            ? "cursor-not-allowed border-slate-200 text-slate-300"
            : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

export default function Pagination() {
  return (
    <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
      <p className="text-base text-slate-600">
        Showing <span className="font-medium text-slate-900">1</span> to{" "}
        <span className="font-medium text-slate-900">3</span> of{" "}
        <span className="font-medium text-slate-900">1,284</span> results
      </p>

      <div className="flex items-center gap-2">
        <PageButton disabled>Previous</PageButton>

        <PageButton active>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>

        <span className="px-2 text-slate-500">...</span>

        <PageButton>42</PageButton>
        <PageButton>Next</PageButton>
      </div>
    </div>
  );
}