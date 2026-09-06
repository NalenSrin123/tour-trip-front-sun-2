import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeItem, setActiveItem] = useState("List Users");

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "List Users", path: "/users" },
    { label: "Manage Master", path: "" },
    { label: "Guides", path: "" },
    { label: "Tours", path: "" },
    { label: "Bookings", path: "" },
    { label: "Customers", path: "" },
    { label: "Reviews", path: "" },
    { label: "Reports", path: "" },
    { label: "Settings", path: "" },
  ];

  const isActive = (item) =>
    item.path ? pathname === item.path : activeItem === item.label;

  return (
    <aside className="flex h-screen w-64 flex-col bg-[#312E81] p-5 text-slate-100 shadow-lg">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
          T
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-wide">Travel Admin</h1>
          <div className="text-sm text-slate-400">Management System</div>
        </div>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const active = isActive(item);

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                setActiveItem(item.label);
                if (item.path) navigate(item.path);
              }}
              className={[
                "flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium transition",
                active
                  ? "bg-slate-800 text-white shadow-inner"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white",
              ].join(" ")}
            >
              <span>{item.label}</span>
              {active && (
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-4 pt-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500">
          <span aria-label="logout icon">⏻</span>
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
