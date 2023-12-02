import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import Catalogue from './components/Catalogue/Catalogue';
import ContactUs from './components/Contact Us/ContactUs';
import AboutUs from './components/About Us/AboutUs';
import Footer from './components/Footer/Footer';
import NewProducts from './components/New Products/NewProducts';
import LatestNewProducts from './components/LatestNewProducts/LatestNewProducts'
// import Construction from './components/Construction/Construction';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/catalogue' element={<Catalogue/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/new-products' element={<NewProducts/>}/>
        <Route path='/2023-new-products' element={<LatestNewProducts/>}/>
        <Route path='*' element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    // <Construction/>
  );
}

export default App;
