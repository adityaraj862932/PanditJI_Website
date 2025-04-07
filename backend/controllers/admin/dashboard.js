const User = require("../../models/user");
const Pooja = require("../../models/pooja");
const Booking = require("../../models/booking");
const Message = require("../../models/message")

const dashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalPoojas = await Pooja.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalMessage = await Message.countDocuments()
    res.json({ totalUsers, totalPoojas, totalBookings, totalMessage });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};
module.exports = dashboard;