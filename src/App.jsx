import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Destination from "./pages/admin/destinations/Destination";
import Destinations from "./pages/admin/destinations/destinations";
import GuildList from "./pages/admin/guides/GuidesList";
import BookingList from "./components/booking/BookingList";
import Customers from "./components/admin/customers/Customers";
import DashboardOverview from "./pages/admin/dashboard/dashboardOverview";
import Header from "./components/layout/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Destination />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/guides" element={<GuildList />} />
            <Route path="/bookings" element={<BookingList />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/dashboard" element={<DashboardOverview />} />
            <Route path="/destinations" element={<Destinations />} />

            <></>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
