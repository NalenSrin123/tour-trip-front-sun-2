import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#f4f6fb]">
      <div className="fixed inset-y-0 left-0 z-30 w-64">
        <Sidebar />
      </div>
      <div className="flex min-w-0 flex-1 flex-col pl-64">

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
