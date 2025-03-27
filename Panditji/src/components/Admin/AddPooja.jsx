import { useState } from "react";
import { useNavigate } from "react-router-dom";

const addPooja = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        Desc: "",
        price: "",
        Availability: "1", // 1 for active, 0 for inactive
        imageUrl: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, imageUrl: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", formData.title);
        data.append("Desc", formData.description);
        data.append("price", formData.price);
        data.append("Availability", formData.Availability);
        data.append("imageUrl", formData.imageUrl);
        console.log(data);

        try {
            const response = await fetch("http://localhost:8000/users/newpooja", {
                method: "POST",
                body: data,
            });
            const result = await response.json();
            alert(result.message);
            if (response.status == 201) {
                navigate("/admin/pooja")
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to upload.");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Add Pooja</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                ></textarea>
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <select
                    name="Availability"
                    value={formData.Availability}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default addPooja;
