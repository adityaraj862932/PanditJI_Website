import { useEffect, useState } from "react";
import axios from "axios";
import images from "../../components/Photos.json"

const Gallery = () => {
    // const [images, setImages] = useState([]);

    // Fetch Images from API
    // useEffect(() => {
    //     const fetchImages = async () => {
    //         try {
    //             const res = await axios.get("http://localhost:8000/admin/gallery");
    //             setImages(res.data);
    //         } catch (err) {
    //             console.error("Error fetching images:", err);
    //         }
    //     };
    //     fetchImages();
    // }, []);

    // Delete Image from DB
    // const handleDelete = async (id) => {
    //     if (window.confirm("Are you sure you want to delete this image?")) {
    //         try {
    //             await axios.delete(`http://localhost:8000/admin/gallery/${id}`);
    //             setImages(images.filter(image => image._id !== id));
    //         } catch (err) {
    //             console.error("Error deleting image:", err);
    //         }
    //     }
    // };

    return (
        <div className="p-6 text-white">
            <h2 className="text-3xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {images.map((image) => (
                    <div key={image._id} className="relative group border p-2 rounded-lg shadow ">
                        <img src={image.url} alt="Photo" className="w-full h-40 object-cover rounded-lg" />
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
                            <button
                                // onClick={() => alert("Edit functionality coming soon!")}
                                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                            <button
                                // onClick={() => handleDelete(image._id)}
                                className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
