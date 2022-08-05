import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import Catalogue from './components/Catalogue/Catalogue';
import ContactUs from './components/Contact Us/ContactUs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/catalogue' element={<Catalogue/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
