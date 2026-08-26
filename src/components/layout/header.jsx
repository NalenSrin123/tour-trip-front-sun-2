const Header = () => {
  return (
    <>
      <header className="border-b border-slate-200 bg-white px-6 py-[18px] shadow-sm shadow-slate-200/50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex w-[650px] max-w-[650px] flex-1 items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 shadow-sm shadow-slate-200/50">
              <span className="mr-2.5 text-[1.1rem]">🔍</span>
              <input
                type="text"
                placeholder="Search"
                className="w-full border-none bg-transparent text-[0.95rem] text-slate-900 outline-none placeholder:text-slate-500"
              />
            </div>
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
    </>
  );
};

export default Header;
