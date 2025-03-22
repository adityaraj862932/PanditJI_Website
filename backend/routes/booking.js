const express = require("express");

const newBooking = require("../controllers/booking");

const router = express.Router()

router.post("/booking",newBooking);

module.exports = router;