import { Route, Routes } from 'react-router-dom'; 
import "./App.css"
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';

function App() {

  return (

    <>
    
    <Navbar />

    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      {/* <Route path='/About' element={<About />} /> */}

    </Routes>
    <Footer/>
    
    </>
  )


}

export default App; 