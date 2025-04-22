import { Link } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { useDispatch } from "react-redux";


const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/admin/dashboard" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/pooja" className="block p-2 hover:bg-gray-700 rounded">Manage Pooja</Link>
        </li>
        <li>
          <Link to="/admin/gallery" className="block p-2 hover:bg-gray-700 rounded">Manage Gallery</Link>
        </li>
        <li>
          <Link to="/admin/message" className="block p-2 hover:bg-gray-700 rounded">Messages</Link>
        </li>
        <li>
          <Link to="/admin/Booking" className="block p-2 hover:bg-gray-700 rounded">Booking</Link>
        </li>
        <li>
          <button onClick={() => dispatch(logout())}
          className="w-full p-2 bg-red-500 hover:bg-red-600 rounded mt-4">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
