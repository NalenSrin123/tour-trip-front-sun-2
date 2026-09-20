import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: "DST-1042",
    name: "Santorini",
    country: "Greece",
    tours: 12,
    status: "Active",
    createdAt: "Oct 12, 2023",
  },
  {
    id: "DST-1043",
    name: "Kyoto",
    country: "Japan",
    tours: 24,
    status: "Active",
    createdAt: "Oct 14, 2023",
  },
  {
    id: "DST-1044",
    name: "Zermatt",
    country: "Switzerland",
    tours: 8,
    status: "Inactive",
    createdAt: "Nov 02, 2023",
  },
];

function Destinations() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All Countries");
  const [status, setStatus] = useState("All Statuses");
  const countries = [
    "All Countries",
    ...new Set(
      destinations.map(({ country: destinationCountry }) => destinationCountry),
    ),
  ];
  const filteredDestinations = useMemo(
    () =>
      destinations.filter((destination) => {
        const matchesSearch = `${destination.name} ${destination.country}`
          .toLowerCase()
          .includes(search.toLowerCase());
        return (
          matchesSearch &&
          (country === "All Countries" || destination.country === country) &&
          (status === "All Statuses" || destination.status === status)
        );
      }),
    [country, search, status],
  );

  return (
    <main className="min-h-screen bg-[#f8f9ff] text-slate-800">
      {/* <header className="flex h-12 items-center justify-between border-b border-slate-200 bg-white px-5"> */}


      <section className="mx-auto max-w-[1180px] px-5 py-6 sm:px-8">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Destinations</h1>
            <p className="mt-1 text-xs text-slate-600">
              Manage travel destination master data
            </p>
          </div>

          <Link to="/add_destinations">
            <button
              type="button"
              className="rounded cursor-pointer bg-[#5146e5] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#4338ca]"
            >
              <span aria-hidden="true" className="mr-1">
                +
              </span>
              Add Destination
            </button>
          </Link>
        </div>

        <div className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-slate-200 bg-[#fbfbff] p-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex h-7 w-full items-center gap-2 rounded border border-slate-300 bg-white px-2 text-xs text-slate-400 sm:w-56">
              <span aria-hidden="true">⌕</span>

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search destinations..."
                className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-400"
              />
            </label>
            <div className="flex gap-2">
              <select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="h-7 rounded border border-slate-300 bg-white px-2 text-xs text-slate-700 outline-none"
              >
                {countries.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="h-7 rounded border border-slate-300 bg-white px-2 text-xs text-slate-700 outline-none"
              >
                <option>All Statuses</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left text-xs">
              <thead className="bg-[#f4f5f8] text-[10px] uppercase tracking-wide text-slate-700">
                <tr>
                  {[
                    "ID",
                    "Destination Name",
                    "Country",
                    "Tours",
                    "Status",
                    "Created Date",
                    "Actions",
                  ].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-semibold">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDestinations.map((destination) => (
                  <tr
                    key={destination.id}
                    className="h-11 text-slate-600 hover:bg-slate-50"
                  >
                    <td className="px-4">{destination.id}</td>
                    <td className="px-4 font-medium text-slate-800">
                      {destination.name}
                    </td>
                    <td className="px-4">{destination.country}</td>
                    <td className="px-4">{destination.tours}</td>
                    <td className="px-4">
                      <span
                        className={`inline-flex px-2 py-1 text-[10px] font-medium uppercase ${destination.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}
                      >
                        {destination.status}
                      </span>
                    </td>
                    <td className="px-4">{destination.createdAt}</td>
                    <td className="px-4 text-slate-400">•••</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <footer className="flex flex-col gap-3 border-t border-slate-200 bg-[#fbfbff] px-4 py-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Showing 1 to {filteredDestinations.length} of{" "}
              {filteredDestinations.length} results
            </span>
            <nav className="flex items-center gap-4" aria-label="Pagination">
              <button type="button">Previous</button>
              <button
                type="button"
                className="h-6 w-6 rounded-sm bg-[#5146e5] text-white"
              >
                1
              </button>
              <button type="button">2</button>
              <button type="button">3</button>
              <span>...</span>
              <button type="button">Next</button>
            </nav>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default Destinations;
