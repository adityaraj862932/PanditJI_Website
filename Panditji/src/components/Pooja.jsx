import React from "react";
import { useNavigate } from 'react-router-dom';

const pujas = [
  { name: "Satyanarayan Puja", image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/ic_satyanarayan-pujan-e1710942312823-300x300.jpg" },
  { name: "Ganesh Puja", image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/29_08_2022-ganesh-chaturthi1_23023192-e1710942242501-300x300.webp" },
  { name: "Vrat Katha", image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/images.jpeg" },
  { name: "Havan", image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/Hawan-Yagya-Banner-e1710942390431-300x300.png" },
  { name: "Durga Puja", image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/unnamed-e1710942278260-300x300.jpg" },
  { name: "Kali Puja", image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/navratrimaadurga-e1711184335630-300x300.jpg" },
  { name: "Garun Pujaan", image: "https://panditjigaurcity.com/wp-content/uploads/2024/03/Garuda-Purana-Path-e1711186293730-300x300.jpg" },
  { name: "Lakshmi Puja", image: "https://panditjigaurcity.com/wp-content/uploads/2024/04/lakshmi-puja-decoration-150x150.jpg" },
];

const Pooja = ({ onButtonClick }) => {

  const navigate = useNavigate();

  return (
    <div className="h-[100vh] text-white text-center p-6 bg-orange-100">
      <h1 className="text-3xl font-bold text-orange-400">Book Pandit Ji for All Types of Puja</h1>
      <p className="mt-2 text-black text-1xl md:text-2xl">We provide all types of puja services at your home or nearby locations</p>

      <div className="mt-6 md:mt-20 grid grid-cols-3 md:grid-cols-4 gap-6 justify-center">
        {pujas.map((puja, index) => (
          <div key={index} className="relative group text-center  ">
            {/* Image Element */}
            <img
              src={puja.image}
              alt={puja.name}
              className="w-16 md:w-32 h-16 md:h-32 mx-auto rounded-full border-2 border-white group-hover:opacity-30 transition-opacity duration-300"
            />
            <p className="mt-2 text-lg text-orange-400 font-semibold group-hover:opacity-0 transition-opacity duration-300">
              {puja.name}
            </p>

            {/* "Book Now" Button Appears on Hover */}
            <button
              className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 mb-4  bg-opacity-100 text-white font-bold py-2 px-6 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Book Now
            </button>
          </div>
        ))}

        {/* Hidden for small and medium */}
        <div className="hidden md:block md:col-span-full lg:hidden">
          {pujas.slice(4, 6).map((puja, index) => (
            <div key={index} className="relative group text-center mt-2">

              {/* Image Section with Hover Effect */}
              <img
                src={puja.image}
                alt={puja.name}
                className="w-24 h-24 mx-auto rounded-full border-2 border-white group-hover:opacity-0 transition-opacity duration-300"
              />

              {/* Puja Name */}
              <p className="mt-1 text-lg text-orange-400 font-semibold group-hover:opacity-0 transition-opacity duration-300">
                {puja.name}
              </p>

              {/* Book Now Button Appears on Hover */}
              <button
                className="absolute inset-0 flex items-center justify-center bg-orange-400 bg-opacity-90 text-white font-bold py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>


      </div>
      <div className="w-[80vw] h-0.5 bg-orange-400 mt-5 mx-auto">

        <button onClick={() => {
        navigate('/BookPage');
        onButtonClick();
      }}
         className="px-10 py-3 bg-orange-400 mt-14 rounded-full">Explore More</button>
      </div>

    </div>
  );
};

export default Pooja;
