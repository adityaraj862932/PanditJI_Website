import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Pooja from './components/Pooja';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/pooja' element={<Pooja />} />
        <Route path='/About' element={<About />} />
      </Routes>
      < Footer/>
    </div>
  );
}

export default App;
