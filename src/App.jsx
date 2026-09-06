import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Destination from './pages/admin/destinations/Destination'
import CreateTour from './pages/admin/tours/CreateTour';
import BookingList from './components/booking/BookingList'
import CreateGuide from './components/guide/CreateGuide'
import TourListPage from './pages/admin/tours/TourListPage'
import GuildList from "./pages/admin/guides/GuidesList";

//import Destination from './pages/admin/destinations/Destination'
import CreateCustomer from './pages/admin/customers/create_customer'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/destination' element={<Destination />} />
          <Route path='/' element={<CreateTour />} />
          <Route path='/' element={<CreateCustomer />} />
          <Route path="/" element={<GuildList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
