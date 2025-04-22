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
    <div className='flex items-center h-screen w-full'>
      gallery
    </div>
  );
}

export default Photo_list;
