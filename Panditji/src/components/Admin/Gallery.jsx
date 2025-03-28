import { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [addPhoto, setAddPhoto] = useState({ imageUrl: null });
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility

  // Handle file selection
  const handleFileChange = (e) => {
    setAddPhoto({ ...addPhoto, imageUrl: e.target.files[0] });
  };

  // Handle photo upload
  const handleAddPhoto = async () => {
    if (!addPhoto.imageUrl) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("imageUrl", addPhoto.imageUrl);

    try {
      await axios.post("http://localhost:8000/admin/addphoto", formData);
      alert("Image uploaded successfully");
      setIsModalOpen(false); // Close modal after upload
    } catch (err) {
      alert("Error adding image:", err);
    }
  };

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin/allphotos");
        setImages(res.data);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };
    fetchImages();
  }, []);

  // Handle delete image
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      try {
        await axios.delete(`http://localhost:8000/admin/deletephoto/${id}`);
        setImages(images.filter((image) => image._id !== id));
      } catch (err) {
        console.error("Error deleting image:", err);
      }
    }
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image._id}
            className="relative group border p-2 rounded-lg shadow "
          >
            <img
              src={image.imageUrl}
              alt="Photo"
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={() => handleDelete(image._id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
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
        onClick={() => setIsModalOpen(true)}
      >
        <strong>+</strong>
      </button>

      {/* Add Photo Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black w-96">
            <h3 className="text-xl font-bold mb-4">Add New Photo</h3>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border p-2 w-full"
            />
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddPhoto}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
