import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";;
import { BsWhatsapp } from "react-icons/bs";

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .send(
      "service_vd30p55",   // Service ID
      "template_l18mk23",  // Template ID
      formData,
      "dNitFNznAdxcfQnUV"
    )
    .then((response)=>{
      alert('Email sent');
    })
    .catch((error)=>{
      alert("failed to send email. ")
      console.error(error);
    })
  };

  return (
    <div className='w-full h-[102vh] flex items-center justify-end bg-orange-100 shadow-xl py-8 '>
       <div className="w-1/2  bg-orange-100 flex flex-col items-center justify-center text-center">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
      <p className='h-[2px] w-5/6 bg-black'></p>

      {/* Location with Map */}
      <div className="w-full mb-6 flex justify-center ">
              <div className="w-3/4 h-300 rounded-lg overflow-hidden  ">
             <iframe
                className="w-full h-full mt-8 "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.8203010851876!2d77.46602737796618!3d23.249625353732284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4203e513c28f%3A0x15442925d721f3ba!2sBean%20Gate%20IT%20Solutions%20PVT.%20LTD.%20Mobile%20App%20Deveopment%20company%20in%20Bhopal%20%7C%20Website%2C%20Software%20companies%20in%20Bhopal!5e0!3m2!1sen!2sus!4v1738526045233!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
        </div>
              
      </div>

      {/* Address */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Address</h3>
        <p>123 Street Name, City, State, ZIP</p>
      </div>

      {/* Contact Details */}
      <div className="mb-4">
        <h3 className="text-xl font-bold">Contact</h3>
        <p> <strong>Phone:</strong>+91 98765 43210</p>
        <p><strong>Email:</strong> contact@yourcompany.com</p>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 ">
        <a href="#" className="text-pink-500 text-3xl  hover:text-orange-900"><CiInstagram /></a>
        <a href="#" className="text-blue-600 text-3xl  hover:text-orange-900"> <CiFacebook /></a>
        <a href="#" className="text-black text-3xl  hover:text-orange-900"> <FaXTwitter /></a>
        <a href="#" className="text-green-700 text-3xl hover:text-orange-500 "> <BsWhatsapp /></a>
      </div>
    </div>


        <div className="w-1/2 h-full">
        <div className="w-full h-full flex items-center justify-center py-8">
              <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Pandit Ji</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                  <label htmlFor="Number" className="block text-sm font-medium text-gray-700">
                      Number
                    </label>
                    <input
                      type="numeric"
                      id="Number"
                      name="Number"
                      value={formData.Number}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                      required
                    />
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full h-22 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
