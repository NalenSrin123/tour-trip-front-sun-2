import './App.css'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import Destination from './pages/admin/destinations/Destination'
import { RegisterForm } from './pages/auth/RegisterForm'
import LoginPage from './pages/auth/LoginPage'
import BookingList from './components/booking/BookingList'
import Customers from './components/admin/customers/Customers'
import Destinations from './pages/admin/destinations/destinations'
import RevenueOverview from './components/tour/RevenueOverview'
import Sidebar from './components/layout/sidebar'
import PageListUser from './pages/admin/users/page_list_user'
import GuidesList from "./pages/admin/guides/GuidesList";

//import Destination from './pages/admin/destinations/Destination'
import CreateCustomer from './pages/admin/customers/create_customer'
import CreateUsers from './pages/admin/users/CreateUsers'
import Herosection from './pages/public/Herosection'

const HERO_IMAGES = [
  'https://i.pinimg.com/1200x/ed/bf/73/edbf7353393cc3d039792dc89a0dd4b6.jpg',
  'https://i.pinimg.com/1200x/bf/49/1c/bf491c2d5cea22db9afaf280cba0466c.jpg',
  'https://i.pinimg.com/736x/2e/d1/d4/2ed1d4c57b64b38d2e09c346c3e771d7.jpg',
  'https://i.pinimg.com/1200x/ed/dd/ca/edddca5d0d69b6071e5bb630135f69c5.jpg',
]

const heroSection = <Herosection images={HERO_IMAGES} />

function App() {
  return (
    <>
      <Routes>
          
          <Route path='/herosection' element={heroSection}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/listbooking' element={<BookingList/>}/>
          <Route path='/customer' element={<Customers/>}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/table_destinations' element={<Destinations/>}/>
          <Route path='/overview' element={<RevenueOverview/>}/>
          <Route path='/sidebar' element={<Sidebar/>}/>
         
          <Route path='/create-user' element={<CreateUsers />} />
          <Route path='/users' element={<PageListUser />} />
          <Route path="/guides" element={<GuidesList />} />
      </Routes>
    
    </>
  );
}

export default App;
