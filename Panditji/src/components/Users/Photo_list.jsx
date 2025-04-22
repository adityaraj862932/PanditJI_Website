import axios from "axios";
import React, { useState, useEffect } from "react";

function Photo_list() {
  const [photos, setphotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/admin/allphotos");
        setphotos(response.data);
      } catch (error) {
        console.error("Error fetching Gallery image:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 w-full h-full">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="w-full overflow-hidden rounded-md shadow-md">
            <img
              src={photo.imageUrl}
              alt={`Photo ${index + 1}`}
              className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photo_list;
