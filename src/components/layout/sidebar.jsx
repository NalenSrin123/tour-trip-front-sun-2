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
    <div className="flex min-h-screen bg-slate-100">
      <aside className="w-64 bg-[#312E81] p-5 text-slate-100 shadow-lg">
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

      <div className="flex-1">
        <header className="border-b border-slate-200 bg-white px-6 py-[18px] shadow-sm shadow-slate-200/50">
          <div className="flex items-center justify-between gap-4">
            <div className="flex w-[650px] max-w-[650px] flex-1 items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 shadow-sm shadow-slate-200/50">
              <span className="mr-2.5 text-[1.1rem]">🔍</span>
              <input
                type="text"
                placeholder="Search"
                className="w-full border-none bg-transparent text-[0.95rem] text-slate-900 outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="flex flex-row items-center gap-4">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-700"
                aria-label="notifications"
              >
                🔔
              </div>

              <div
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-700"
                aria-label="help"
              >
                ❔
              </div>

              <div className="text-xl text-slate-400">|</div>

              <div>
                <div className="font-semibold text-slate-900">Admin</div>
              </div>

              <div>
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                  alt="Admin profile"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
            <p className="mt-2 text-sm text-slate-500">Welcome back, Admin.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
