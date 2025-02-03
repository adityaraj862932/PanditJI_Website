import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="h-16 w-100% bg-orange-400 flex justify-between items-center px-4">
        <div>
          <img
            src="https://vaikunth.co/front_assets/image/logo/logo-black.svg"
            alt="Logo"
            className="text-white h-10 w-auto filter invert mt-4 mb-4"
          />
        </div>

        <div className="hidden md:flex w-[50%] justify-evenly items-center font-semibold text-xl text-white">
          <Link to="/">Home</Link>
          <Link to="/Pooja">Pooja</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden flex items-center hover:cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-orange-400 py-4 px-6`}
      >
        <Link to="/" className="block text-white text-xl py-2" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/Puja" className="block text-white text-xl py-2" onClick={toggleMenu}>
          Pooja
        </Link>
        <Link to="/About" className="block text-white text-xl py-2" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/Book" className="block text-white text-xl py-2" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
