import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import Destination from './pages/admin/destinations/Destination'
import PageListUser from './pages/admin/users/page_list_user'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path='/' element={<Destination />} />
            <Route path='/users' element={<PageListUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
