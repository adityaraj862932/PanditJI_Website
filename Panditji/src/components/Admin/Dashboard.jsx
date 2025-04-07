import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [total, setTotal] = useState({ totalUsers: 0, totalPoojas: 0, totalBookings: 0, totalMessage: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin/dashboard");
        console.log(res.data.totalPoojas);
        setTotal(res.data); 
      } catch (err) {
        alert(err.message);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-white">Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-lg">Total Users</h3>
          <p className="text-2xl font-bold">{total.totalUsers}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-lg">Total Poojas</h3>
          <p className="text-2xl font-bold">{total.totalPoojas}</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-lg">Total Bookings</h3>
          <p className="text-2xl font-bold">{total.totalBookings}</p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-lg">Total Message</h3>
          <p className="text-2xl font-bold">{total.totalMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
