import CustomerTable from "./CustomerTable";


export default function Customers() {
  return (
    <main className="min-h-screen bg-[#f4f5ff] p-6 md:p-10">
      <div className="mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Customers
            </h1>

            <p className="mt-2 text-lg text-slate-600">
              View and manage registered customer accounts
            </p>
          </div>

          <div className="rounded-lg border border-slate-300 bg-white px-7 py-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Total Customers
            </p>

            <p className="mt-1 text-3xl font-bold text-indigo-700">1,284</p>
          </div>
        </div>

        <CustomerTable />
      </div>
    </main>
  );
}