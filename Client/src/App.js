import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css"
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Polices from './pages/Polices';
import Services from './pages/Services';
import Gallery from './pages/Gallery';

function App() {

  return (

    <>
    
    <Navbar />
    
    <Switch>

      <Route exact path='/' component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Polices' component={Polices} />
      <Route path='/Services' component={Services} />
      <Route path='/Gallery' component={Gallery} />

    </Switch>

    <Footer/>
    
    </>
  )

}

export default App;
