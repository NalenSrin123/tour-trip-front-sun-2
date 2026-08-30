import CustomerFilters from "./CustomerFilters";
import CustomerRow from "./CustomerRow";
import Pagination from "./Pagination";



const customers = [
  {
    id: 1,
    initials: "SD",
    name: "Sok Dara",
    email: "sok.dara@email.com",
    phone: "+855 12 345 678",
    country: "Cambodia",
    bookings: 8,
    spent: "$642",
    joined: "Jan 14, 2024",
    status: "ACTIVE",
    avatarColor: "bg-violet-300 text-indigo-700",
  },
  {
    id: 2,
    initials: "LF",
    name: "Lena Ferreira",
    email: "lena.f@email.com",
    phone: "+351 91 222 333",
    country: "Portugal",
    bookings: 3,
    spent: "$210",
    joined: "Mar 02, 2024",
    status: "ACTIVE",
    avatarColor: "bg-orange-700 text-white",
  },
  {
    id: 3,
    initials: "JW",
    name: "James Wu",
    email: "james.wu@email.com",
    phone: "+65 8123 4567",
    country: "Singapore",
    bookings: 0,
    spent: "$0",
    joined: "Jun 20, 2024",
    status: "DEACTIVATED",
    avatarColor: "bg-slate-200 text-slate-500",
  },
];

export default function CustomerTable() {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
      <CustomerFilters />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1150px]">
          <thead className="border-y border-slate-300 bg-[#e9eeff]">
            <tr className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              <th className="px-6 py-5">Customer</th>
              <th className="px-6 py-5">Contact</th>
              <th className="px-6 py-5">Location</th>
              <th className="px-6 py-5 text-center">Bookings</th>
              <th className="px-6 py-5 text-center">Spent</th>
              <th className="px-6 py-5">Joined</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <CustomerRow key={customer.id} customer={customer} />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </section>
  );
}