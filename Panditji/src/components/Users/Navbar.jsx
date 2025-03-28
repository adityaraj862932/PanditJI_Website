import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function Navbar({ handleall }) {
  const navigate = useNavigate();

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
    <div className="w-full h-[12vh] bg-orange-400 text-white flex items-center justify-between px-6 md:px-12">
      {/* Logo */}
      <img
        src="https://vaikunth.co/front_assets/image/logo/logo-black.svg"
        alt="Logo"
        className="h-[8vw] md:h-[3vw] filter invert"
      />

      {/* Navigation Links (Wrapped inside One Div) */}
      <div className="hidden md:flex items-center space-x-8">
        {[
          { name: "Home", link: "/" },
          { name: "Pooja", link: "#pooja" },
          { name: "About", link: "#about" },
          { name: "Gallery", link: "#gallery" },
          { name: "Contact", link: "#contact" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="h-10 flex items-center px-4 text-xl font-[Marcellus] font-bold hover:text-gray-200 transition-all duration-200 expand-center link-hover-effect"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Login Button */}
      <button
        onClick={() => navigate("/login")}
        className="hidden md:block bg-white text-orange-500 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-all"
      >
        Login
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <RxCross2 className="text-[5vw] absolute right-6 top-5 sm:hidden text-4xl" />
          ) : (
            <FaBars className="text-[5vw] absolute right-6 top-5 sm:hidden text-4xl" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-[12vh] left-0 right-0 bg-slate-100 text-orange-400 flex flex-col items-center py-6 gap-4 text-2xl shadow-md">
          {[
            { name: "Home", link: "/" },
            { name: "Pooja", link: "#pooja" },
            { name: "About", link: "#about" },
            { name: "Gallery", link: "#gallery" },
            { name: "Contact", link: "#contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:text-gray-600"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={() => navigate("/login")}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
