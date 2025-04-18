import axios from "axios";
import React, { useState ,useEffect} from "react";

function Photo_list() {
  const [photos, setphotos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/allphotos');
        setphotos(response.data);
        // console.log("Fetched Pooja List:", response.data);
      } catch (error) {
        console.error("Error fetching Gallery image:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex  h-screen w-full">
      {photos.map((photo, index) => (
       (index<6) 
       && <div key={index} className="h-1/3 w-1/3 flex justify-between">
          <img src={photo.imageUrl} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Photo_list;
