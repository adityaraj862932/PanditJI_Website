 import {React,useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Pooja = ({ onButtonClick }) => {

  const navigate = useNavigate();
    const [Pooja_list,setPooja_list]=useState([]);
  ``
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/users/poojalist');
          setPooja_list(response.data);
          console.log("Fetched Pooja List:", response.data);
        } catch (error) {
          console.error("Error fetching pooja list:", error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className="h-[100vh] text-white text-center p-6 bg-orange-100">
      <h1 className="text-3xl font-bold text-orange-400">Book Pandit Ji for All Types of Puja</h1>
      <p className="mt-2 text-black text-1xl md:text-2xl">We provide all types of puja services at your home or nearby locations</p>

      <div className="mt-6 md:mt-20 grid grid-cols-3 md:grid-cols-4 gap-6 justify-center">
        {Pooja_list.map((puja, index) => (
          index<8 && <div key={index} className="relative group text-center  ">
            {/* Image Element */}
            <img
              src={puja.imageUrl}
              alt={puja.title}
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
          {Pooja_list.slice(4, 6).map((puja, index) => (
            <div key={index} className="relative group text-center mt-2">

              {/* Image Section with Hover Effect */}
              <img
                src={puja.imageUrl}
                alt={puja.title }
                className="w-24 h-24 mx-auto rounded-full border-2 border-white group-hover:opacity-0 transition-opacity duration-300"
              />

              {/* Puja Name */}
              <p className="mt-1 text-lg text-orange-400 font-semibold group-hover:opacity-0 transition-opacity duration-300">
                {puja.name}
              </p>

              {/* Book Now Button Appears on Hover */}
              <button
                className="absolute inset-0 flex items-center justify-center bg-orange-500 bg-opacity-90 text-white font-bold py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
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
         className="px-10 py-3 bg-orange-500 mt-14 rounded-full hover:bg-orange-700 "><strong>Explore More</strong></button>
      </div>

    </div>
  );
};

export default Pooja;
