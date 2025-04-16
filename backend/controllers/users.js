const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const generateToken=(user)=>{
  return jwt.sign({id:user._id,role:user.role},process.env.JWT_REFRESH_SECRET,{expiresIn:'15m'})}

const generateRefreshToken=(user)=>{
  return jwt.sign({id:user._id,role:user.role},process.env.JWT_REFRESH_SECRET,{expiresIn:'7d'})}


// Admin Login
const adminLogin = async (req, res) => {
  try {
    const { mobile_number, password, role} = req.body;
   
    
    // Find the admin by mobile number
    const existingUser = await User.findOne({$and: [{ mobile_number }, {role }]});
    // console.log(existingUser);
    
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

    const accessToken=generateToken(existingUser);
    const refreshToken=generateRefreshToken(existingUser);
 
    res.cookie("accessToken",accessToken,{httpOnly:true,secure:true,sameSite:"Strict"});
    res.cookie("refreshToken",refreshToken,{httpOnly:true,secure:true,sameSite:"Strict"});

  
    res.json({ message:"Login Successful", role:existingUser.role,accessToken:accessToken});
    // console.log({ token, role:existingUser.role});
    
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// User Login
const loginUser = async (req, res) => {
  try {
    const { mobile_number, password, role } = req.body;
    
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

const accessToken=generateToken(existingUser)
const refreshToken=generateRefreshToken(existingUser)

res.cookie("accessToken",accessToken,{httpOnly:true,secure:true,sameSite:"Strict"});
res.cookie("refershToken",refreshToken,{httpOnly:true,secure:true,sameSite:"Strict"})




    res.json({ message: "User Login Successful",role:existingUser.role });
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
      email:email,
      name:name, 
      role:role,
    });
    
    // Save user to database
    await newUser.save();
    
    const accessToken=generateToken(newUser)
    const refreshToken=generateRefreshToken(newUser)

    res.cookie("accessToken",accessToken,{httpOnly:true,secure:true,sameSite:"Strict"})
    res.cookie("refreshToken",refreshToken,{httpOnly:true,secure:true,sameSite:"Strict"})

    res.status(201).json({ message: "User registered successfully", });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
module.exports = { adminLogin, loginUser, userRegister };
