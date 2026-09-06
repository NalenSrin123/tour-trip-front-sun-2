import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import Destination from './pages/admin/destinations/Destination'
import { RegisterForm } from './pages/auth/RegisterForm'
import LoginPage from './pages/auth/LoginPage'
import BookingList from './components/booking/BookingList'
import Customers from './components/admin/customers/Customers'
import Destinations from './pages/admin/destinations/destinations'
import RevenueOverview from './components/tour/RevenueOverview'
import Sidebar from './components/layout/sidebar'
import Header from './components/layout/header'
import PageListUser from './pages/admin/users/page_list_user'

//import Destination from './pages/admin/destinations/Destination'
import CreateCustomer from './pages/admin/customers/create_customer'
import CreateUsers from './pages/admin/users/CreateUsers'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/listbooking' element={<BookingList/>}/>
          <Route path='/customer' element={<Customers/>}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/table_destinations' element={<Destinations/>}/>
          <Route path='/overview' element={<RevenueOverview/>}/>
          <Route path='/sidebar' element={<Sidebar/>}/>
          <Route path='/header' element={<Header/>}/>
         
          <Route path='/create-user' element={<CreateUsers />} />
          <Route path='/users' element={<PageListUser />} />
        </Routes>
      </BrowserRouter>
      <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1" />
      <Footer />
    </div>
    </>
  );
}

export default App;
