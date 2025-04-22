import {React,useEffect,useState} from 'react'
// import Photos from './Photos'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Gallery() {
  const navigate = useNavigate();
  const [Photos,setPhotos]=useState([]);
  ``
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/admin/allphotos');
          setPhotos(response.data);
          // console.log("Fetched Pooja List:", response.data);
        } catch (error) {
          console.error("Error fetching Gallery image:", error);
        }
      };
  
      fetchData();
    }, []);

  return (

    <div className='h-screen w-full bg-orange-100'>
      <div className='h-[15%] w-full flex justify-center items-center'>
        <h1 className='font-bold text-5xl'>Gallery</h1>
      </div>
      <div className='h-[70%] w-full flex justify-center'>
        <div className="w-[95%] sm:w-[90%] md:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 h-full">
          {Photos.map((photo, index) => (
           (index<6) 
           && <div key={index} className="bg-pink-300 flex items-center justify-center rounded-xl overflow-hidden">
              <img src={photo.imageUrl} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>


      </div>
      <div className='h-[15%] w-full flex justify-center items-center'>
        {/* <div className="w-[80vw] h-0.5 bg-orange-400 mt-5 mx-auto"> */}

        <button onClick={() => window.open("/allphotos", "_blank")}
          className="px-10 py-3 bg-orange-500 mt-14 rounded-full hover:bg-orange-700 text-white"><strong>Explore More</strong></button>
        {/* </div> */}
      </div>

    </div>

  )
}

export default Gallery;