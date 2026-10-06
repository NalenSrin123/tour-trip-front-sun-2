import React from "react";

const BookingStatistics = () => {
  const statistics = [
    { label: "Completed", width: "65%", color: "bg-[#08745b]" },
    { label: "Pending", width: "25%", color: "bg-[#e18800]" },
    { label: "Cancelled", width: "10%", color: "bg-[#c51e1e]" },
  ];

  return (
    <section className="min-h-[388px] overflow-hidden rounded-md border border-[#e1e3ec] bg-white">
      <div className="flex min-h-[72px] items-center border-b border-[#e1e3ec] px-5">
        <h2 className="text-[17px] font-semibold text-[#1d2433]">
          Booking Statistics
        </h2>
      </div>
      <div className="px-5 pt-[90px]">
        {statistics.map((item) => (
          <div key={item.label} className="mb-5">
            <div className="mb-2 flex items-center justify-between text-[13px]">
              <span className="text-[#555a69]">{item.label}</span>
              <strong className="font-semibold text-[#303544]">
                {item.width}
              </strong>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#dfe4f2]">
              <div
                className={`h-full rounded-full ${item.color}`}
                style={{ width: item.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingStatistics;