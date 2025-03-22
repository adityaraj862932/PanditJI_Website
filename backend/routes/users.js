const express = require("express");
const { adminLogin, loginUser, userRegister } = require("../controllers/users");

const router = express.Router();

// Routes
router.post("/register", userRegister); // User Registration
router.post("/Userlogin", loginUser); // User Login
router.post("/adminLogin", adminLogin); // adminLogin Login
// router.get("/", getAllUsers); // Fetch all users

module.exports = router;
