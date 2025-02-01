import React from 'react';
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";;
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const socialIcons = [
    { icon: <CiInstagram />, label: 'Instagram' },
    { icon: <CiFacebook />, label: 'Facebook' },
    { icon: <FaXTwitter />, label: 'Twitter' },
    { icon: <BsWhatsapp />, label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-orange-400 h-screen md:h-96 pt-8 pb-6 relative">
      <div className="container mx-auto px-4">
        {/* Main Section */}
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Left Section */}
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700 text-white">
              Divinity, Right At Your Doorstep
            </h4>
            <a href="#"><img src="https://vaikunth.co/front_assets/image/logo/logo-black.svg" alt="" className='text-white h-10 w-30 filter invert mt-4 mb-4' /></a>
            <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
              {socialIcons.map(({ icon, label }, index) => (
                <button
                  key={index}
                  aria-label={label}
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 rounded-full flex items-center justify-center mt-6"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6 text-white">
              <ContactSection />
              <ResourceSection />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2025</span>
              <a href="#" className="text-blueGray-500 hover:text-gray-800 ml-1">
                SanadiKrish
              </a>
              <span> by </span>
              <a href="#" className="text-blueGray-500 hover:text-blueGray-800">
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactSection() {
  return (
    <div className="w-full lg:w-4/12 px-4 ml-auto">
      <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
        Contact Us
      </span>
      <ul className="list-unstyled">
        {['Home', 'Puja', 'About'].map((link) => (
          <li key={link}>
            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">
              {link}
            </a>
          </li>
        ))}
        <li>
          <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
            Contact Us
            <select className="ml-2 bg-orange-400">
              <option value="">+91 9999999999</option>
              <option value="">panditjee@gmail.com</option>
            </select>
          </a>
        </li>
      </ul>
    </div>
  );
}

function ResourceSection() {
  return (
    <div className="w-full lg:w-4/12 px-4">
      <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
        Other Resources
      </span>
      <ul className="list-unstyled">
        {[ 'Terms & Conditions', 'Privacy Policy', 'Policy'].map((resource) => (
          <li key={resource}>
            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">
              {resource}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

