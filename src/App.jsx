import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <>
    <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    <Footer />
    </>
  )
}

export default App;