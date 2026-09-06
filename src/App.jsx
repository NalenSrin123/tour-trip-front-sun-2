import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Destination from './pages/admin/destinations/Destination'
import CreateUsers from './pages/admin/users/CreateUsers'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Destination />} />
          <Route path='/a' element={<CreateUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;