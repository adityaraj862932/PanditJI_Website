import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function Navbar({ handleall }) {
  const navigate = useNavigate();

  function handleclick() {
    navigate('/contact');
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "hi",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-[12vh] bg-orange-400 text-white flex items-center justify-between p-5">
      <img
        src="https://vaikunth.co/front_assets/image/logo/logo-black.svg"
        alt=""
        className="h-[8vw] md:h-[3vw] filter invert"
      />

      {/* Desktop Navigation */}
      <div
        className="optn items-center w-[50%] flex-row justify-around text-[1.5vw] text-white mr-10 hidden md:flex"
        onClick={() => {
          navigate('/');
          handleall();
        }}
      >
        <div className="h-10 w-20 flex justify-center items-center  hover:text-gray-200  expand-center link-hover-effect">
          <Link className="font-[Marcellus] px-2.5  text-2xl font-bold transition-all duration-200 " to="/">Home</Link>
        </div>
        <div className="h-10  w-20  hover:text-gray-200  expand-center link-hover-effect">
          <a className="font-[Marcellus] px-2.5 fromCenter font-bold transition-all duration-200  text-2xl " href="#pooja">Pooja</a>
        </div>
        <div className="h-10 w-20 hover:text-gray-200  expand-center link-hover-effect">
          <a className="text-center px-2 font-[Marcellus]  text-2xl font-bold transition-all duration-200 " href="#about">About</a>
        </div>
        <div className="h-10 w-24 hover:text-gray-200  expand-center link-hover-effect">
          <a className="font-[Marcellus] px-2 text-2xl font-bold transition-all duration-200 " href="#Gallery">Gallery</a>
        </div>
        <div className="h-10 w-24 hover:text-gray-200 expand-center link-hover-effect">
          <a className="font-[Marcellus] px-2  text-2xl font-bold transition-all duration-200 " href="#contact">Contact</a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <RxCross2 className="text-[5vw] absolute right-12 top-5 sm:hidden text-4xl" />
          ) : (
            <FaBars className="text-[5vw] absolute right-12 top-5 sm:hidden text-4xl" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute z-10 top-[12vh] left-0 right-0 bg-slate-100 text-orange-400 flex flex-col items-center py-[8vh] gap-4 text-2xl">
          <Link className="hover:underline" to="/">Home</Link>
          <a className="hover:underline" href="#pooja">Pooja</a>
          <a className="hover:underline" href="#about">About</a>
          <a className="hover:underline" href="#contact">Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
