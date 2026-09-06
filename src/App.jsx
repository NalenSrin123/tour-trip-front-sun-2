import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Destination from './pages/admin/destinations/Destination'
import CreateTour from './pages/admin/tours/CreateTour';
import BookingList from './components/booking/BookingList'
import CreateGuide from './components/guide/CreateGuide'
import TourListPage from './pages/admin/tours/TourListPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/destination' element={<Destination />} />
          <Route path='/' element={<CreateTour />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;