import React, { useEffect, useState } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';

import Nav from './components/Nav';
import About from './components/About';
import Venue from './components/venue';
import Work from './components/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer';
import Events from './components/events';
import Portfolio from './components/projects';
import Services from './components/services';
import Navbar from './components/Navbar';

const App = () => {
 
  
  return (
     <div className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 bg-no-repeat bg-cover overflow-hidden'>
   
      <Navbar/>
      {/* <Header /> */}
      <Banner /> 
      {/* <Nav /> */}
    
      <About />
      <Services/>
      {/* <Events/> */}
      {/* <Venue/> */}
      {/* <Work /> */}
      <Portfolio/>
     <Contact />
      <Footer/>
     
    </div>
  );
};

export default App;
