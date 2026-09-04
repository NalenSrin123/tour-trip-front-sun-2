import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Destination from './pages/admin/destinations/Destination'
import CreateCustomer from './pages/admin/customers/create_customer'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateCustomer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
