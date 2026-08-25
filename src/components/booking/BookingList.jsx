import React from "react";

const BookingList = () => {
  return (
    <>
      <div className="container-bookingList p-10 w-full bg-gray-100">
        <section className="main-titleBookingList py-6">
          <h1 className="text-[20px] font-bold">Booking Management</h1>
          <p className="text-[12px] text-gray-600">
            Manage and track all tour bookings
          </p>
        </section>


        <div className="main_menuBookingList w-full flex items-center justify-between p-4 border-1 border-gray-300 rounded-md bg-white">
          <div className="menu-payment w-[60%] flex justify-between">

            <section className="paymentStatus">
              <p className="font-bold">Payment Status</p>
              <select
                name=""
                id=""
                className="outline-none px-4 py-1 border border-gray-300 rounded-lg bg-white text-gray-700"
              >
                <option value="">All Statuses</option>
              </select>
            </section>

            <section className="bookingStatus">
              <p className="font-bold">Booking Status</p>
              <select
                name=""
                id=""
                className="outline-none px-4 py-1 border border-gray-300 rounded-lg bg-white text-gray-700"
              >
                <option value="">All Statuses</option>
              </select>
            </section>

            <section className="dateRange">
              <p className="font-bold">Date Rangs</p>
              <div className="outline-none px-4 py-1 border border-gray-300 rounded-lg bg-white text-gray-700">

                <input type="datetime-local" />
              </div>
              
            </section>





          </div>

          <div className="w-[30%] flex items-center justify-end gap-4">
            <button className="border-blue-600 border-[2px] text-blue-700 py-1 px-4 rounded-md font-bold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
              </svg>
              More Filters
            </button>
            <button className="text-blue-600 font-bold flex items-center gap-2 active:border-blue-600 py-1 px-4 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
              </svg>
              Export
            </button>
          </div>




        </div>





      {/* ================================================================== */}
      {/* =======================>> table data << ===========================*/}
      {/* ================================================================== */}

<table className="w-full mt-10 border-[1px] border-gray-200  border-collapse table-fixed">
  <thead className="bg-gray-200">
    <tr>
      <th className="p-3 text-left w-[10%]">ID</th>
      <th className="p-3 text-left w-[20%]">CUSTOMER</th>
      <th className="p-3 text-left w-[20%]">TOUR</th>
      <th className="p-3 text-left w-[10%]">DATES</th>
      <th className="p-3 text-left w-[10%]">GUESTS</th>
      <th className="p-3 text-left w-[10%]">AMOUNT</th>
      <th className="p-3 text-left w-[10%]">PAYMENT</th>
      <th className="p-3 text-left w-[10%]">STATUS</th>
    </tr>
  </thead>

  <tbody>
    <tr className="bg-white">
      <td className="p-3">#BKG-8892</td>

      <td className="p-3">
        <div className="flex gap-2 items-center">
          <span className="bg-blue-700 text-white rounded-xl w-[30px] p-1 flex justify-center items-center">
            JD
          </span>

          <div>
            <p>John Doe</p>
            <p className="text-[12px]">john@gmail.com</p>
          </div>
        </div>
      </td>

      <td className="p-3">Grand Cany Explorer</td>

      <td className="p-3">
        <p className="text-[14px] font-bold">Booked: Oct 12, 2024</p>
        <p className="text-[14px] font-bold">Travel: Nov 05, 2024</p>
      </td>

      <td className="p-3">2</td>

      <td className="p-3">$500</td>

      <td className="p-3"><p className="bg-amber-100 rounded-md text-center">Paid</p></td>

      <td className="p-3 "><p className="bg-blue-500 text-center rounded-md">Confirmed</p></td>
    </tr >
    <tr className="bg-white">
      <td className="p-3">#BKG-8893</td>

      <td className="p-3">
        <div className="flex gap-2 items-center">
          <span className="bg-blue-700 text-white rounded-xl w-[30px] p-1 flex justify-center items-center">
            AS
          </span>

          <div>
            <p>Alice Smith</p>
            <p className="text-[12px]">alicesmith@gmail.com</p>
          </div>
        </div>
      </td>

      <td className="p-3">Kyoto Temples & Gerdens</td>

      <td className="p-3">
        <p className="text-[14px] font-bold">Booked: Oct 12, 2024</p>
        <p className="text-[14px] font-bold">Travel: Nov 05, 2024</p>
      </td>

      <td className="p-3">4</td>

      <td className="p-3">$30000</td>

      <td className="p-3"><p className="bg-yellow-200 rounded-md text-center">PENDING</p></td>

      <td className="p-3 "><p className="bg-yellow-200 text-center rounded-md">PENDING</p></td>
    </tr>
    <tr className="bg-white">
      <td className="p-3">#BKG-8892</td>

      <td className="p-3">
        <div className="flex gap-2 items-center">
          <span className="bg-blue-700 text-white rounded-xl w-[30px] p-1 flex justify-center items-center">
            JD
          </span>

          <div>
            <p>John Doe</p>
            <p className="text-[12px]">john@gmail.com</p>
          </div>
        </div>
      </td>

      <td className="p-3">Grand Cany Explorer</td>

      <td className="p-3">
        <p className="text-[14px] font-bold">Booked: Oct 12, 2024</p>
        <p className="text-[14px] font-bold">Travel: Nov 05, 2024</p>
      </td>

      <td className="p-3">2</td>

      <td className="p-3">$500</td>

      <td className="p-3"><p className="bg-amber-100 rounded-md text-center">Paid</p></td>

      <td className="p-3 "><p className="bg-blue-500 text-center rounded-md">Confirmed</p></td>
    </tr>
  </tbody>
</table>
<div className="flex justify-between items-center bg-white py-4 px-4 rounded-[0px 0px 5px 5px]">
  <div className="text-[14px]">
    <p>showing 1 to 3 of 97 results</p>
  </div>

  <div className="list mr-4 flex items-center border-gray-400">
    <button className="border-[1px] py-2 px-1 rounded-sm mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
        <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
      </svg>
    </button>
    <button className="w-[32px] border-[1px] border-gray-400 py-1 bg-blue-600">1</button>
    <button className="w-[32px] border-[1px] border-gray-400 py-1">2</button>
    <button className="w-[32px] border-[1px] border-gray-400 py-1">3</button>
    <button className="w-[32px] border-[1px] border-gray-400 py-1">...</button>
    <button className="w-[32px] border-[1px] border-gray-400 py-1">10</button>
    <button className="border-[1px] py-2 px-1 border-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
      </svg>
    </button>    

  </div>
</div>








      </div>
    </>
  );
};

export default BookingList;
