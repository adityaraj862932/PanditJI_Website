const Booking = require("../models/bookingSchema");

const newBooking = async (req, res) => {
    try {
        const { pooja, address, date } = req.body;

        if (!pooja || !address || !date) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newBooking = new Booking({
            user: req.user._id,
            pooja,
            address,
            date
        });

        await newBooking.save();
        res.status(201).json({ message: "Booking created successfully", booking: newBooking });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = newBooking;