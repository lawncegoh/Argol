import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import Catalogue from './components/Catalogue/Catalogue';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/catalogue' element={<Catalogue/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
