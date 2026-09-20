import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Destination from "./pages/admin/destinations/Destination";
import Destinations from "./pages/admin/destinations/destinations";
import GuildList from "./pages/admin/guides/GuidesList";
import BookingList from "./components/booking/BookingList";
import Customers from "./components/admin/customers/Customers";
import DashboardOverview from "./pages/admin/dashboard/dashboardOverview";
import ExperienceDetail from "./pages/public/experience_detail";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<ExperienceDetail />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/guides" element={<GuildList />} />
        <Route path="/bookings" element={<BookingList />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/dashboard" element={<DashboardOverview />} />
        <Route path="/experience_detail" element={<ExperienceDetail />} />
      </Routes>
    </>
  );
}

export default App;
