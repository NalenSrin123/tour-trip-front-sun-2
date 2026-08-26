import Header from './components/layout/header'
import Sidebar from './components/layout/sidebar'

function App() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Header />
      </div>
    </div>
  )
}

export default App