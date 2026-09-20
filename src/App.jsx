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

import CreateCustomer from './pages/admin/customers/create_customer'
import CreateUsers from './pages/admin/users/CreateUsers'
import DestinationDetail from './pages/public/DestinationDetail'
import Herosection from './pages/public/Herosection'
import TourLight from './pages/public/tour/TourLight'
import AuthenticKhmer from './components/tour/hero_section/AuthenticKhmer'
import TravelSection  from './pages/public/Practical_section'

const HERO_IMAGES = [
  'https://i.pinimg.com/1200x/ed/bf/73/edbf7353393cc3d039792dc89a0dd4b6.jpg',
  'https://i.pinimg.com/1200x/bf/49/1c/bf491c2d5cea22db9afaf280cba0466c.jpg',
  'https://i.pinimg.com/736x/2e/d1/d4/2ed1d4c57b64b38d2e09c346c3e771d7.jpg',
  'https://i.pinimg.com/1200x/ed/dd/ca/edddca5d0d69b6071e5bb630135f69c5.jpg',
]

const heroSection = <Herosection images={HERO_IMAGES} />
import FeaturedTourPackages from './pages/public/Tour_packages'


import HomePage from './pages/public/HomePage'
import Tours_detailContent from './components/tour/tours_detailContent/Tours_detailContent'
import Popular_Destinations from './components/tour/Popular_Destinations'
import Top_attractions from './pages/public/Top_attractions'
import { Available_tours } from './pages/public/Available_tours'
import HeroSectionAbout from './pages/public/HeroSectionAbout'  
function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
          <Route path='/available_tours' element={<Available_tours/>}/>
          <Route path='/top_attraction' element={<Top_attractions/>}/>
          <Route path='/herosection' element={heroSection}/>
          <Route path="/practical_section" element={<TravelSection />} />
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/tourpackages" element={<FeaturedTourPackages />} />
          <Route path='/home' element={<HomePage />} />
          <Route path="/detail-content" element={<Tours_detailContent />} />
          <Route element={<Sidebar />}>
          <Route path='/listbooking' element={<BookingList/>}/>
          <Route path='/customer' element={<Customers/>}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/table_destinations' element={<Destinations/>}/>
          <Route path='/overview' element={<RevenueOverview/>}/>
          <Route path='/sidebar' element={<DashboardOverview/>}/>
          <Route path='/createcustomer' element={<CreateCustomer/>}/>
          <Route path='/create-user' element={<CreateUsers />} />
          <Route path='/users' element={<PageListUser />} />
          <Route path="/guides" element={<GuidesList />} />
           <Route path="/" element={<Destination />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/bookings" element={<BookingList />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/dashboard" element={<DashboardOverview />} />
             <Route path='/popular' element={<Popular_Destinations/>}/>
             <Route path ="/tour-light" element={<TourLight/>}/>
             <Route path='/authentic-khmer' element={<AuthenticKhmer />} />
             <Route path="/destinations/mondulkiri" element={<DestinationDetail />} />
             <Route path="/experience_detail" element={<ExperienceDetail />} />
          </Route>
          <Route path='/about' element={<HeroSectionAbout/>}/>

          
      </Routes>

    </>
  );
}

export default App;
