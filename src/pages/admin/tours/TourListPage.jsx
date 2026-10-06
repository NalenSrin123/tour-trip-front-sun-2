import React, { useState } from "react";
import TourHeader from "../../../components/admin/tours/TourHeader";
import TourTable from "../../../components/admin/tours/TourTable";
import Pagination from "../../../components/admin/tours/Pagination";
import TourFilter from "../../../components/admin/tours/TourFilter";

const tours = [
  {
    id: "T-1001",
    name: "Santorini Escape",
    slug: "santorini-escape",
    category: "Beach",
    destination: "Santorini, Greece",
    duration: "5 Days / 4 Nights",
    price: 899,
    status: "ACTIVE",
    createdAt: "Oct 12, 2023",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: "T-1002",
    name: "Kyoto Discovery",
    slug: "kyoto-discovery",
    category: "Cultural",
    destination: "Kyoto, Japan",
    duration: "6 Days / 5 Nights",
    price: 1299,
    status: "ACTIVE",
    createdAt: "Oct 14, 2023",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: "T-1003",
    name: "Swiss Alps Adventure",
    slug: "swiss-alps-adventure",
    category: "Adventure",
    destination: "Zermatt, Switzerland",
    duration: "7 Days / 6 Nights",
    price: 1499,
    status: "INACTIVE",
    createdAt: "Nov 02, 2023",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: "T-1004",
    name: "Bali Paradise",
    slug: "bali-paradise",
    category: "Beach",
    destination: "Bali, Indonesia",
    duration: "4 Days / 3 Nights",
    price: 699,
    status: "ACTIVE",
    createdAt: "Nov 10, 2023",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: "T-1005",
    name: "Paris Getaway",
    slug: "paris-getaway",
    category: "City",
    destination: "Paris, France",
    duration: "3 Days / 2 Nights",
    price: 599,
    status: "DRAFT",
    createdAt: "Nov 15, 2023",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
  },
];

const TourListPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const filteredTours = tours.filter((tour) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      tour.name.toLowerCase().includes(searchText) ||
      tour.slug.toLowerCase().includes(searchText) ||
      tour.destination.toLowerCase().includes(searchText) ||
      tour.id.toLowerCase().includes(searchText);

    const matchesCategory = category === "ALL" || tour.category === category;

    const matchesStatus = status === "ALL" || tour.status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleAdd = () => {
    alert("Add Tour");
  };

  const handleView = (tour) => {
    alert(`View: ${tour.name}`);
  };

  const handleEdit = (tour) => {
    alert(`Edit: ${tour.name}`);
  };

  const handleDelete = (tour) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${tour.name}?`,
    );

    if (confirmDelete) {
      alert(`${tour.name} deleted`);
    }
  };
  return (
    <div className="min-h-screen bg-slate-100">
      <main className="mx-auto w-full max-w-[1600px] p-6 lg:p-8">
        {/* HEADER */}

        <TourHeader onAdd={handleAdd} />

        {/* MAIN CARD */}

        <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* FILTER */}

          <TourFilter
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            status={status}
            setStatus={setStatus}
          />

          {/* TABLE */}

          <TourTable
            tours={filteredTours}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          {/* PAGINATION */}

          <Pagination />
        </div>
      </main>
    </div>
  );
};

export default TourListPage;
