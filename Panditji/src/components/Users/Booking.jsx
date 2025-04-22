import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {jwtDecode} from 'jwt-decode';

const Booking = () => {
  const { id } = useParams();
  const [pooja, setPooja] = useState(null);
  const accessToken = useSelector((state) =>state.auth.accessToken);
  if(accessToken){
    var decoded = jwtDecode(accessToken);
  }
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date:'',
    address: '',
    note: '',
    userId:null,
    poojaId:null,
  });

  useEffect(() => {
    const fetchPooja = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/users/poojalist/${id}`);
        setPooja(res.data);
        
      } catch (err) {
        console.error("Error fetching pooja detail", err);
      }
    };
    fetchPooja();
  }, [id]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const sendData = {...formData,poojaId:id,userId:decoded.id,}
        console.log(sendData);
        
        const res = await axios.post("http://localhost:8000/user/booking", sendData);
        alert(res.data.message);
    } catch (error) {
        console.log(error.message);
        
    }
  };

  if (!pooja) return <div className="text-center p-10">Loading Pooja Details...</div>;

  return (
    <div className="min-h-screen bg-orange-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">Book: {pooja.title}</h2>
        
        <img src={pooja.imageUrl} alt={pooja.title} className="w-[40%] h-[70%] mx-auto mb-4 border-4 border-orange-300" />

        <form onSubmit={handleSubmit} className="space-y-4">
          
            <input
            type="text"
            name="title"
            placeholder="title"
            value={`Title: ${pooja.title}`}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none  text-gray-400"
          />
            <input
            type="text"
            name="Desc"
            placeholder="Desc"
            value={`Desc: ${pooja.Desc}`}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none  text-gray-400"
          />
            <input
            type="text"
            name="price"
            placeholder="Price"
            value={`Price: ₹${pooja.price}`}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none  text-gray-400"
          />
         
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
          />
          {/* <label htmlFor="date">Booking date</label> */}
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
          />

          <textarea
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
          />

          <textarea
            name="note"
            placeholder="Additional Note (optional)"
            value={formData.note}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
          />

          <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 font-semibold">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
