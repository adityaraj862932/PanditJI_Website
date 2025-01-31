import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
    
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'hi',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='w-full h-[12vh] bg-orange-400 text-white flex items-center justify-between p-5'>
        <img src="https://vaikunth.co/front_assets/image/logo/logo-black.svg" alt="" className='h-[3vw] filter invert'/>
        
        {/* Navbar Links */}
        <div className="optn flex items-center gap-5 text-[1.5vw] text-white mr-20">
          <Link
            to="/"
            className="relative transition-all duration-300 hover:text-slate-500 hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-slate-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/pooja"
            className="relative transition-all duration-300 hover:text-slate-500 hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-slate-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Pooja
          </Link>
          <Link
            to="/about"
            className="relative transition-all duration-300 hover:text-slate-500 hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-slate-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="relative transition-all duration-300 hover:text-slate-500 hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-slate-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>

          <div id="google_translate_element" className="ml-5 "></div>
        </div>

    </div>
  )
}

export default Navbar
