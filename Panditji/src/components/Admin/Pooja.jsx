import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Pooja() {
  const navigate = useNavigate();
  const [poojas, setPoojas] = useState([]); // Store the entire array

  useEffect(() => {
    const fetchPoojas = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users/poojalist");

        if (Array.isArray(response.data)) {
          console.log("Response data length:", response.data.length);
          setPoojas(response.data); // Store the full array
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (err) {
        alert(err.message);
      }
    };
    fetchPoojas();
  }, []);

  const handleAddPooja = () => {
    navigate("/admin/addPooja");
  };

  return (
    <div className="relative min-h-screen p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Pooja List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {poojas.map((pooja, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4">
            <img
              src={pooja.imageUrl}
              alt={pooja.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{pooja.title}</h2>
            <p className="">{pooja.Desc}</p>
            <p className="text-green-600 font-bold mt-1">₹{pooja.price}</p>
            <p className="text-sm mt-1">
              Availability:{" "}
              <span className={pooja.Availability ? "text-green-500" : "text-red-500"}>
                {pooja.Availability ? "Available" : "Not Available"}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <button
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-green-600 transition text-3xl flex items-center justify-center"
        onClick={handleAddPooja}
      >
        <strong>+</strong>
      </button>
    </div>
  );
}

export default Pooja;
