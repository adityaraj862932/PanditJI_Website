const Booking = require("../models/booking");
const Pooja=require("../models/pooja")

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

const booking = async (req, res) =>{
    try {
        const response = await Booking.find();
        res.status(200).send(response);
    } catch (error) {
        console.log(error.message);
    }
}

const bookingbyid=async(req,res)=>{
    const id=req.params.id;
    const response=await Pooja.findById(id)
    res.status(200).send(response)
}

module.exports = {newBooking,booking,bookingbyid};