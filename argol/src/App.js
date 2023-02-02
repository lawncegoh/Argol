import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import Catalogue from './components/Catalogue/Catalogue';
import ContactUs from './components/Contact Us/ContactUs';
import AboutUs from './components/About Us/AboutUs';
import Footer from './components/Footer/Footer';
import NewProducts from './components/New Products/NewProducts';
import PaintRollerProducts from './components/New Products/PaintRollers/PaintRollerProducts';
import PaintBrushProducts from './components/New Products/PaintBrushes/PaintBrushProducts';
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
        <Route path='/new-products/paint-rollers' element={<PaintRollerProducts/>}/>
        <Route path='/new-products/paint-brushes' element={<PaintBrushProducts/>}/>
        <Route path='*' element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    // <Construction/>
  );
}

export default App;
