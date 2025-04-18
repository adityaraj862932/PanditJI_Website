const Booking = require("../models/booking");

const newBooking = async (req, res) => {
    try {const {
        name,
        phone,
        date,
        address,
        note,
        userId,
        poojaId,
      } = req.body;
console.log({
    name,
    phone,
    date,
    address,
    note,
    userId,
    poojaId,
  });

        // if (!pooja || !address || !date) {
        //     return res.status(400).json({ message: "All fields are required." });
        // }

        // const existingUser = Booking.findOne({})
        const newBooking = new Booking({
            address:address,
            name:name,
            date:date,
            number:phone,
            note:note,
            user: userId,
            pooja:poojaId,
            

        });

        await newBooking.save();
        res.status(201).json({ message: "Booking created successfully", booking: newBooking });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = newBooking;