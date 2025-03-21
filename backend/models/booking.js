const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user', // Reference to User model
            required: true
        },
        pooja: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pooja', // Reference to Puja model
            required: true
        },
        address: {
            street: { type: String, required: true, trim: true },
            landmark: { type: String, required: false, trim: true },
            city: { type: String, required: true, trim: true },
            state: { type: String, required: true, trim: true }
        },
        date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "confirmed", "cancelled"],
            default: "pending"
        }
    },
    {
        timestamps: true // Adds createdAt and updatedAt fields
    }
);

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
