import { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("DashBoard");

  const menuItems = [
    "DashBoard",
    "Manage Master",
    "Guides",
    "Tours",
    "Bookings",
    "Customers",
    "Reviews",
    "Reports",
    "Settings",
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#312E81] p-5 text-slate-100 shadow-lg">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
          T
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-wide">Travel Admin</h1>
          <div className="text-sm text-slate-400">Management System</div>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = activeItem === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setActiveItem(item)}
              className={[
                "flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium transition",
                isActive
                  ? "bg-slate-800 text-white shadow-inner"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white",
              ].join(" ")}
            >
              <span>{item}</span>
              {isActive && (
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              )}
            </button>
          );
        })}
      </nav>

      <div>
        <button className="mt-80 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500">
          <span aria-label="logout icon">⏻</span>
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
