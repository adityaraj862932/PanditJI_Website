
import {React,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Users/Navbar';
import Contact from './components/Users/Contact';
import Pooja from './components/Users/Pooja';
import About from './components/Users/About';
import Footer from './components/Users/Footer';
import Poojalist from './components/Users/Poojalist';
import Gallery from './components/Users/Gallery';
import Login from './components/Users/Login';
import Home from './components/Users/Home';

import Admindashboard from './components/Admin/Admindashboard'
import ProtectedRoute from './components/ProtectedRoute';
import {useDispatch} from  'react-redux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      const refreshToken = async () => {
          try {
              const { data } = await axios.get("/api/auth/refresh");  // Call refresh token API
              dispatch(loginsuccess(data));  // Update Redux state with new token
          } catch (err) {
              console.log("User not authenticated");
          }
      };
      refreshToken();
  }, [dispatch]);

  return (
    <Router>
    <Navbar />
    <div className="pt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pooja" element={<Pooja/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Poojalist" element={<Poojalist />} />
        <Route path="/login" element={<Login />} />


        <Route path="/admin/dashboard" element={<Admindashboard />}/>



      </Routes>
    </div>
  </Router>
  )
}
 
export default App