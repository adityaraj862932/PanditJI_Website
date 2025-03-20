const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to User model
            required: true
        },
        puja: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Puja', // Reference to Puja model
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
            enum: ["pending", "confirmed", "completed", "cancelled"],
            default: "pending"
        }
    },
    {
        timestamps: true // Adds createdAt and updatedAt fields
    }
);

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
