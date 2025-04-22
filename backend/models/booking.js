const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to User model
            required: true
        },
        pooja: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pooja', // Reference to Puja model
            required: true
        },
        name:{
            type:String,
            required:true
        },
        number:Number,
        address: {
            type:String, 
            required:true
            // street: { type: String, required: true, trim: true },
            // landmark: { type: String, required: false, trim: true },
            // city: { type: String, required: true, trim: true },
            // state: { type: String, required: true, trim: true }
        },
        date: {
            type: Date,
            required: true
        },
        note:{
            type:String,
        }
        // status: {
        //     type: String,
        //     enum: ["pending", "confirmed", "cancelled"],
        //     default: "pending"
        // }
    },
    {
        timestamps: true // Adds createdAt and updatedAt fields
    }
);

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
