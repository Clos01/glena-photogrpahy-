import { Route, Routes } from 'react-router-dom'; 
import "./App.css"
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import ChooseMe from './components/ChooseMe';
import Hero from './components/Hero';
import Featured from './components/Featured';

function App() {

  return (

    <>
    
    <Navbar />
    <Hero />
    <ChooseMe />
    <Featured />

    <Routes>

      <Route path='/' element={<Home />} />

    </Routes>
    
    
    </>
  )


}

export default App; 