import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Shop from './Shop';
import Service from './Service';
import Login from './Section_Components/Login';
import SignUp from './Section_Components/Signup';
import Blog from './Section_Components/Blogs'
import Portfolio from './Section_Components/PortFolio'
import Header from './Header'
import Footer from './Footer'


function App() {
  return (



<>   

< div className=' pb-24'>
<Header  /> </div> 
   
    <Router  >
      
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Sign_Up" element={<SignUp />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      
    </Router>

    <Footer/>

    </>


  );
}

export default App;
