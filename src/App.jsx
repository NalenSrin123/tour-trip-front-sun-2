import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Destination from './pages/admin/destinations/Destination'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
