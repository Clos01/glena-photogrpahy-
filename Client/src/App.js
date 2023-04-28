import { Route, Routes } from 'react-router-dom'; 
import "./App.css"
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {

  return (

    <>
    
    <Navbar />
    
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Services' element={<Services />} />

    </Routes>
    <Footer/>
    
    </>
  )


}

export default App; 