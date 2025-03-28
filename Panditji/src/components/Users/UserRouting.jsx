import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Contact from '../Contact';
import Pooja from '../Pooja';
import About from '../About';
import Footer from '../Footer';
import BookPage from '../BookPage';
import Gallery from '../Gallery';
import Login from '../Login';

function UserRouting() {
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
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default UserRouting