import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TourListPage from './pages/admin/tours/TourListPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TourListPage/>
    </>
  )
}

export default App
