import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Gallery from "./Gallery";
import Pooja from "./Pooja"

const AdminDashboard = () => {
  return (
    <div className="flex bg-gray-700">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/gallery" element={<Gallery />} />
          <Route path ="/admin/pooja" element = {<Pooja />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
