const express = require("express");

const {newBooking,booking,bookingbyid} = require("../controllers/booking");

const router = express.Router()

router.post("/booking",newBooking),
router.get('/booking',booking),
router.get('/bookingbyid/:id',bookingbyid),

module.exports = router;