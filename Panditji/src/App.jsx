import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Pooja from './components/Pooja';
import About from './components/About';
import Footer from './components/Footer';
import BookPage from './components/BookPage';
import Page2 from './components/Page2';

function App() {
  const [isBookPage, setIsBookPage] = useState(false); // Renamed to 'isBookPage' for clarity
  const handleBookPageToggle = () => {
    setIsBookPage(true); // Set the state to true when button is clicked
  };
  return (
    <div>
      {isBookPage ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/BookPage" element={<BookPage />} />
          </Routes>
        </div>
      ) : (
        <div className="w-full h-screen bg-orange-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/BookPage" element={<BookPage />} />
          </Routes>

          <div id="pooja">
            <Pooja onButtonClick={handleBookPageToggle}/>
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
