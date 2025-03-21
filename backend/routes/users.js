const express = require("express");
const { adminLogin, loginUser, userRegister } = require("../controllers/users");

const router = express.Router();

// Routes
router.post("/register", userRegister); // User Registration
router.post("/login", loginUser); // User Login
// router.get("/", getAllUsers); // Fetch all users

module.exports = router;
