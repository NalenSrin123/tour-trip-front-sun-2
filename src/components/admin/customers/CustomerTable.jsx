import { customers } from "./customersData";
import CustomerFilters from "./CustomerFilters";
import CustomerRow from "./CustomerRow";
import Pagination from "./Pagination";





export default function CustomerTable() {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <CustomerFilters />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1050px] border-collapse">
          <thead>
            <tr className="bg-slate-50 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              <th className="w-10 px-4 py-3">
                <input type="checkbox" className="rounded border-slate-300" />
              </th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3 text-center">Bookings</th>
              <th className="px-4 py-3 text-right">Total Spent</th>
              <th className="px-4 py-3">Joined</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
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