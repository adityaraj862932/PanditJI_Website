import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Pooja() {
  const navigate = useNavigate();
  const [poojas, setPoojas] = useState([]);

  useEffect(() => {
    const fetchPoojas = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users/poojalist");

        if (Array.isArray(response.data)) {
          setPoojas(response.data);
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

  const handleEdit = (id) => {
    navigate(`/admin/editPooja/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this pooja?")) {
      try {
        const res = await axios.delete(`http://localhost:8000/users/poojalist/${id}`);

        if (res.status === 200) {
          setPoojas(poojas.filter((pooja) => pooja._id !== id));
          alert("Pooja deleted successfully");
        } else {
          console.error("Failed to delete pooja");
        }
      } catch (err) {
        console.error("Error deleting pooja:", err);
      }
    }
  };

  return (
    <div className="relative min-h-screen p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Pooja List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {poojas.map((pooja, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4 relative group bg-gray-900">
            <img
              src={pooja.imageUrl}
              alt={pooja.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{pooja.title}</h2>
            <p>{pooja.Desc}</p>
            <p className="text-green-600 font-bold mt-1">₹{pooja.price}</p>
            <p className="text-sm mt-1">
              Availability:{" "}
              <span className={pooja.Availability ? "text-green-500" : "text-red-500"}>
                {pooja.Availability ? "Available" : "Not Available"}
              </span>
            </p>
            
            {/* Edit & Delete Buttons */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition px-2 w-full flex justify-between">
              <button
                className="bg-yellow-500 px-3 py-1 rounded-lg text-black hover:bg-yellow-600"
                onClick={() => handleEdit(pooja._id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-3 py-1 rounded-lg text-white hover:bg-red-600"
                onClick={() => handleDelete(pooja._id)}
              >
                Delete
              </button>
            </div>
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
