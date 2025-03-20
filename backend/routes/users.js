const express = require("express");
const { registerUser, getAllUsers, loginUser } = require("../controllers/users");

const router = express.Router();

// Routes
router.post("/register", registerUser); // User Registration
router.post("/login", loginUser); // User Login
// router.get("/", getAllUsers); // Fetch all users

module.exports = router;
