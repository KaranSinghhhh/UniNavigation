import React from 'react';
import Navbar from "./components/Navbar"; // This is required to import the Navbar from Navbar.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // This is also required

import './App.css';
import Home from "./components/Pages/Home";
import FoodLocations from './components/FoodLocationsFolder/FoodLocations';

import Help from './components/HelpFolder/Help'
import Contact from './components/ContactFolder/Contact'
import LearnMore from './components/LearnMoreFolder/LearnMore'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/FoodLocations' element ={<FoodLocations />}/>
          
          <Route path='/Help' element ={<Help />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/learn-more' element={<LearnMore/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
