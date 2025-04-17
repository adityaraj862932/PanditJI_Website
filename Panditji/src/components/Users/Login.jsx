import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginsuccess } from "../../redux/authSlice";

const Login = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    mobile_number: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/user/login",
        formData,
        { withCredentials: true }
      );
      dispatch(loginsuccess(data));
      if (data.role === "admin") navigate("/admin/dashboard");
      else navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

        <div className="flex gap-4 mb-4">
          <button
            className={`flex-1 py-2 rounded-lg text-white ${
              formData.role === "user" ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleRoleChange("user")}
          >
            User
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-white ${
              formData.role === "admin" ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleRoleChange("admin")}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="mobile_number"
            placeholder="Mobile Number"
            value={formData.mobile_number}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <p
          className="text-blue-500 text-center mt-4 cursor-pointer"
          onClick={toggleForm}
        >
          Don't have an account?{" "}
          <span>
            <button
              onClick={() => navigate("/Signup")} // Corrected the navigation here
              className="text-blue-500 underline"
            >
              Register
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
