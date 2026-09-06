import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
