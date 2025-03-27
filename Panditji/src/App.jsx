import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Pooja from './components/Pooja';
import About from './components/About';
import Footer from './components/Footer';
import BookPage from './components/BookPage';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Photo_list from './components/Photo_list';
import AdminDashboard from './components/Admin/Admindashboard';

function App() {
  const [isBookPage, setIsBookPage] = useState(false); // Renamed to 'isBookPage' for clarity



  const handleBookPageToggle = () => {
    setIsBookPage(true); // Set the state to true when button is clicked
  };

  const handleall = () => {
    setIsBookPage(false); // Set the state to true when button is clicked
  };
  return (
    <div>
      {isBookPage ? (
        <div >
          <div className='w-screen h-auto overflow-hidden'>
            <Navbar handleall={handleall} />
          </div>

          <div className='h-[88vh] w-screen'>
            <Routes>
              <Route path="/BookPage" element={<BookPage />} />
              <Route path="/Photo_list" element={<BookPage />} />
              {/* <Route path="/Photo_list" element={<Photo_list />} /> */}
            </Routes>
            <Footer />
          </div>
        </div>
      ) : (
        <div className="w-full h-screen">
          <Navbar handleall={handleall} />
          <div>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/BookPage" element={<BookPage />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>

          <div id="pooja">
            <Pooja onButtonClick={handleBookPageToggle} />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="gallery">
            <Gallery onButtonClick={handleBookPageToggle} />
          </div>
          <div id="contact">
            <Contact />
            <AdminDashboard/>
          </div>
          <Footer />
        </div>
      )}
    </div>
    // <div >
    //   <AdminDashboard/>
    // </div>
  );
}

export default App;
