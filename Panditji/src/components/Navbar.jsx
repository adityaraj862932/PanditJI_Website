import React, { useEffect, useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function Navbar({ handleall }) {

  const navigate = useNavigate()
  function handleclick() {
    navigate('/contact')
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

      <div className="optn  items-center w-[50%] flex-row justify-around text-[1.5vw] text-white mr-10 hidden md:flex " onClick={() => {
        navigate('/');
        handleall();
      }} >
        <Link className="hover:underline hover:text-2xl hover:font-semibold font-[Marcellus]" to="/">Home</Link>
        <a className="hover:underline hover:text-2xl hover:font-semibold font-[Marcellus]" href="#pooja">Pooja</a>
        <a className="hover:underline hover:text-2xl hover:font-semibold font-[Marcellus]" href="#about">About</a>
        <a className="hover:underline hover:text-2xl hover:font-semibold font-[Marcellus]" href="#Gallery">Gallery</a>
        <a className="hover:underline hover:text-2xl hover:font-semibold font-[Marcellus]" href="#contact">Contact</a>
      </div>


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
        <div className="md:hidden absolute z-10 top-[12vh] left-0 right-0 bg-slate-100 text-orange-400 flex flex-col items-center py-[8vh] gap-4 text-2xl ">
          <Link className="hover:underline hover:text-2xl hover:font-semibold" to="/">Home</Link>
          <a className="hover:underline hover:text-2xl hover:font-semibold" href="#pooja">Pooja</a>
          <a className="hover:underline hover:text-2xl hover:font-semibold" href="#about">About</a>
          <a className="hover:underline hover:text-2xl hover:font-semibold" href="#contact">Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;



{/* <div className="optn flex items-center gap-5 text-[1.5vw] text-white mr-20">
        <Link to="/">Home</Link>
        <a href="#pooja">Pooja</a>
        <a href="#about">About</a>
         <Link to="/contact">Contact</Link>
        <div className="">
          <div id="google_translate_element" className=""></div>
        </div>
      </div> */}
