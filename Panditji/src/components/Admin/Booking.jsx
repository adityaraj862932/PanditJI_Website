import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Booking() {
  const [booking, setBooking] = useState([]);
  const [poojaDetails, setPoojaDetails] = useState({}); // { poojaId: poojaObject }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingRes = await axios.get('http://localhost:8000/admin/booking');
        setBooking(bookingRes.data);

        // Get unique pooja IDs
        const uniquePoojaIds = [...new Set(bookingRes.data.map(b => b.pooja))];

        const poojaMap = {};
        await Promise.all(
          uniquePoojaIds.map(async (id) => {
            const poojaRes = await axios.get(`http://localhost:8000/admin/bookingbyid/${id}`);
            poojaMap[id] = poojaRes.data; // store full object
          })
        );

        setPoojaDetails(poojaMap);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">All Bookings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {booking.map((item, index) => {
          const pooja = poojaDetails[item.pooja]; // full object

          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 transition hover:shadow-lg"
            >
              {pooja ? (
                <>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Pooja Name: {pooja.title}</h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Price:</span> ₹{pooja.price}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Description:</span> {pooja.description}
                  </p>
                </>
              ) : (
                <p>Loading pooja details...</p>
              )}

              <h3 className="text-xl font-semibold text-green-700 mt-4 mb-2">Customer Name: {item.name}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Phone:</span> {item.number}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Address:</span> {item.address}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Note:</span> {item.note}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Date:</span> {new Date(item.date).toLocaleDateString()}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                <span className="font-medium">Created:</span>{' '}
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Booking;
