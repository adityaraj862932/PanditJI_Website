import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Gallery from "./Gallery";
import Pooja from "./Pooja";
import AddPooja from "./AddPooja";
import Message from "./Message";
import Booking from "./Booking";

const AdminDashboard = () => {
  return (
    <div className="flex bg-gray-700 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/gallery" element={<Gallery />} />
          <Route path="/admin/pooja" element={<Pooja />} />
          <Route path="/admin/addPooja" element={<AddPooja />} />
          <Route path="/admin/message" element={<Message />} />
          <Route path="/admin/booking" element={<Booking />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
