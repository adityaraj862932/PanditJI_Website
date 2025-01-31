import React from "react";

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

const Pooja = () => {
  return (
    <div className="h-[88vh] text-white text-center p-6">
      <h1 className="text-3xl font-bold text-orange-400">Book Pandit Ji for All Types of Puja</h1>
      <p className="mt-2 text-black text-2xl">We provide all types of puja services at your home or nearby locations</p>
      
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {pujas.map((puja, index) => (
          <div key={index} className="text-center">
            <img
              src={puja.image}
              alt={puja.name}
              className="w-24 h-24 mx-auto rounded-full border-2 border-white"
            />
            <p className="mt-2 text-lg text-orange-400 font-semibold">{puja.name}</p>
          </div>
        ))}
      </div>
      <button className="px-10 py-3 bg-orange-400 mt-14">Book Now</button>
    </div>
  );
};

export default Pooja;
