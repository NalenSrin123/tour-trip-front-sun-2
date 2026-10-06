import {
  CircleCheck,
  CircleSlash2,
  Eye,
  MoreVertical,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

export default function CustomerRow({ customer }) {
  const deactivated = customer.status === "DEACTIVATED";

  return (
    <tr
      className={`border-b border-slate-300 transition hover:bg-slate-50 ${
        deactivated ? "text-slate-400" : "text-slate-700"
      }`}
    >
      {/* Customer */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-semibold ${customer.avatarColor}`}
          >
            {customer.initials}
          </div>

          <p
            className={`font-semibold ${
              deactivated ? "line-through text-slate-500" : "text-slate-900"
            }`}
          >
            {customer.name}
          </p>
        </div>
      </td>

      {/* Contact */}
      <td className="px-6 py-5">
        <p>{customer.email}</p>
        <p>{customer.phone}</p>
      </td>

      {/* Location */}
      <td className="px-6 py-5">{customer.country}</td>

      {/* Bookings */}
      <td className="px-6 py-5 text-center font-medium">
        {customer.bookings}
      </td>

      {/* Spent */}
      <td className="px-6 py-5 text-center">{customer.spent}</td>

      {/* Joined */}
      <td className="px-6 py-5">{customer.joined}</td>

      {/* Status */}
      <td className="px-6 py-5">
        <StatusBadge status={customer.status} />
      </td>

      {/* Actions */}
      <td className="px-6 py-5">
        <div className="flex items-center justify-center gap-5">
          <button
            className="text-slate-600 transition hover:text-indigo-600"
            title="View customer"
          >
            <Eye size={22} />
          </button>

          <button
            className="text-slate-600 transition hover:text-indigo-600"
            title={deactivated ? "Activate" : "Deactivate"}
          >
            {deactivated ? (
              <CircleCheck size={22} />
            ) : (
              <CircleSlash2 size={22} />
            )}
          </button>

          <button
            className="text-slate-600 transition hover:text-indigo-600"
            title="More actions"
          >
            <MoreVertical size={22} />
          </button>
        </div>
      </td>
    </tr>
  );
}