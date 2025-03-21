const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Admin Login
const adminLogin = async (req, res) => {
  try {
    const { mobile_number, password, role} = req.body;

    // Find the admin by mobile number
    const existingUser = await User.findOne({$and: [{ mobile_number }, { role }]});
    
    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "Wrong Mobile Number or Password" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: existingUser._id,
        mobile_number: existingUser.mobile_number,
        role: "admin",
      },
      process.env.SECRET,
      { expiresIn: "1h" }
    );

    // Set Cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevents access via JavaScript
      secure: process.env.NODE_ENV === "production", // Use secure in production
      sameSite: "strict",
      maxAge: 3600000, // 1 hour
    });

    res.json({ message: "Admin Login Successful" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// User Login
const loginUser = async (req, res) => {
  try {
    const { mobile_number, password, role } = req.body;
    console.log({ mobile_number, password, role });
    
    if (role === "admin") {
      return await adminLogin(req, res);
    }

    // Find user by mobile number
    const existingUser = await User.findOne({$and: [{ mobile_number }, { role }]});
    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "User Doesn't Exist, Register first" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: existingUser._id,
        mobile_number: existingUser.mobile_number,
        role: "user",
      },
      process.env.SECRET,
      { expiresIn: "1h" }
    );

    // Set Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000, // 1 hour
    });

    res.json({ message: "User Login Successful" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};





const userRegister = async (req, res) => {
  
  try {
    const { mobile_number,email,name, role, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ mobile_number,role });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists. Please log in." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      mobile_number,
      password: hashedPassword,
      email,
      name, 
      role,
    });

    // Save user to database
    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign(
      { id: newUser._id, mobile_number: newUser.mobile_number, role: "user" },
      process.env.SECRET,
      { expiresIn: "1h" }
    );

    // Set Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000, // 1 hour
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
module.exports = { adminLogin, loginUser, userRegister };
