import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Pooja from './components/Pooja';
import About from './components/About';
import Footer from './components/Footer';
import Page2 from './components/Page2';

function App() {
  return (
    <div className="w-full h-screen bg-orange-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <div id="pooja">
      <Pooja />
      </div>
      <div id="about">
      <About />
      </div>
      <div id="contact">
      <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
