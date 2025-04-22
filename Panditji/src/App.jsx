import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// User Components
import Navbar from "./components/Users/Navbar";
import Contact from "./components/Users/Contact";
import Pooja from "./components/Users/Pooja";
import About from "./components/Users/About";
import Footer from "./components/Users/Footer";
import Poojalist from "./components/Users/Poojalist";
import Gallery from "./components/Users/Gallery";
import Login from "./components/Users/Login";
import Home from "./components/Users/Home";
import Signup from "./components/Users/Signup";

// Admin Components
import Admindashboard from "./components/Admin/Admindashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Booking from "./components/Users/Booking";
import Photo_list from "./components/Users/Photo_list"
// import Booking from "./components/Users/Booking";

function App() {
  const role = useSelector((state) => state.auth.role);

  return (
    <Router>
      {role !== "admin" ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pooja" element={<Pooja />} />
            <Route path="/About" element={<About />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/allphotos" element={<Photo_list />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/Poojalist" element={<Poojalist />} />
            <Route path="/login" element={<Login />} />
            {role == "user" ?(<Route  path="/pooja/booking/:id" element = {<Booking />} />):<Route path="*" element={<Login />} />}
            <Route path="*" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Admindashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;
