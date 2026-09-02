import React from "react";
import TourRow from "./TourRow";

const TourTable = ({ tours, onView, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1250px] border-collapse">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
              ID
            </th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
              Tour
            </th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
              Category
            </th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
              Destination
            </th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
              Duration
            </th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
              Price
            </th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
              Status
            </th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
              Created At
            </th>
            <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tours.length > 0 ? (
            tours.map((tour) => (
              <TourRow
                key={tour.id}
                tour={tour}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan="9"
                className="px-5 py-16 text-center text-sm text-slate-500"
              >
                No tours found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TourTable;
