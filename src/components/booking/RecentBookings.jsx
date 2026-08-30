import React from "react";
import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

const RecentBookings = () => {
  const bookings = [
    {
      id: "#TRV-7829",
      initials: "AS",
      customer: "Alice Smith",
      tour: "Kyoto Zen Gardens",
      date: "Oct 12, 2023",
      amount: "$1,250.00",
      status: "CONFIRMED",
    },
    {
      id: "#TRV-7830",
      initials: "MJ",
      customer: "Mark Johnson",
      tour: "Alps Hiking Adventure",
      date: "Oct 14, 2023",
      amount: "$890.00",
      status: "PENDING",
    },
    {
      id: "#TRV-7831",
      initials: "EL",
      customer: "Emma Larson",
      tour: "Rome City Tour",
      date: "Oct 15, 2023",
      amount: "$450.00",
      status: "CANCELLED",
    },
    {
      id: "#TRV-7832",
      initials: "DT",
      customer: "David Torres",
      tour: "Machu Picchu Trek",
      date: "Oct 18, 2023",
      amount: "$2,100.00",
      status: "CONFIRMED",
    },
  ];

  const statusStyles = {
    CONFIRMED: "bg-[#d7f6e9] text-[#08745b]",
    PENDING: "bg-[#fff0c8] text-[#e18800]",
    CANCELLED: "bg-[#ffe0e0] text-[#c51e1e]",
  };

  return (
    <section className="overflow-hidden rounded-md border border-[#e1e3ec] bg-white">
      <div className="flex min-h-[72px] items-center justify-between border-b border-[#e1e3ec] px-5">
        <h2 className="text-[17px] font-semibold text-[#1d2433]">
          Recent Bookings
        </h2>
        <button className="rounded border border-[#3930d8] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#3930d8] hover:bg-[#3930d8] hover:text-white">
          View All
        </button>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[950px] border-collapse">
          <thead className="bg-[#f4f6fc]">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold text-[#555a6a]">
                BOOKING ID
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-[#555a6a]">
                CUSTOMER
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-[#555a6a]">
                TOUR
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-[#555a6a]">
                DATE
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-[#555a6a]">
                AMOUNT
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-[#555a6a]">
                STATUS
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-[#555a6a]">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t border-[#e7e9f0] hover:bg-[#fafaff]"
              >
                <td className="px-5 py-3.5 text-sm">
                  <strong className="font-semibold text-[#242a38]">
                    {booking.id}
                  </strong>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#d9d7ff] text-xs font-bold text-[#3930d8]">
                      {booking.initials}
                    </div>
                    <span className="whitespace-nowrap text-sm text-[#505565]">
                      {booking.customer}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-[#505565]">
                  {booking.tour}
                </td>
                <td className="px-5 py-3.5 text-sm text-[#505565]">
                  {booking.date}
                </td>
                <td className="px-5 py-3.5 text-sm">
                  <strong className="font-semibold text-[#242a38]">
                    {booking.amount}
                  </strong>
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-flex min-w-[85px] items-center justify-center rounded px-2 py-1 text-[10px] font-bold ${statusStyles[booking.status]}`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <button className="flex h-8 w-8 items-center justify-center rounded text-[#666b7b] hover:bg-[#f0f1f7]">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex min-h-[62px] items-center justify-between border-t border-[#e7e9f0] px-4 py-2">
        <span className="text-[13px] text-[#606575]">
          Showing 1 to 4 of 24 entries
        </span>

        <div className="flex items-center gap-1">
          <button
            disabled
            className="flex h-9 items-center gap-1 rounded border border-[#cdd0dc] bg-[#fafafa] px-2.5 text-sm text-[#a5a8b2]"
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded border border-[#3930d8] bg-[#3930d8] text-sm text-white">
            1
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded border border-[#cdd0dc] bg-white text-sm text-[#252a38]">
            2
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded border border-[#cdd0dc] bg-white text-sm text-[#252a38]">
            3
          </button>

          <button className="flex h-9 items-center gap-1 rounded border border-[#cdd0dc] bg-white px-2.5 text-sm text-[#252a38]">
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentBookings;
