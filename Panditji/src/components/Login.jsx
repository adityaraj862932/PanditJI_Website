import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
    const [role, setRole] = useState("user");
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    console.log(formData);
    console.log(role);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const URL = isRegister ? "http://localhost:8000/users/register" : "http://localhost:8000/users/Userlogin";
        console.log(URL);
        
        console.log({ ...formData, role });
        
        try {
            const response = await axios.post(URL, { ...formData, role });
            alert(response.data.message);
            if (!isRegister) navigate("/dashboard");
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4 text-center">{isRegister ? "Register" : "Login"}</h2>

                <div className="flex gap-4 mb-4">
                    <button className={`flex-1 py-2 rounded-lg text-white ${role === "user" ? "bg-blue-500" : "bg-gray-300"}`} onClick={() => setRole("user")}>
                        User
                    </button>
                    <button className={`flex-1 py-2 rounded-lg text-white ${role === "admin" ? "bg-blue-500" : "bg-gray-300"}`} onClick={() => setRole("admin")}>
                        Admin
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {isRegister && (
                        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    )}
                    {isRegister && (
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    )}
                    <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required={!isRegister} />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                        {isRegister ? "Register" : "Login"}
                    </button>
                </form>

                {role === "user" && (
                    <p className="text-blue-500 text-center mt-4 cursor-pointer" onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? "Back to Login" : "Register"}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Auth;
