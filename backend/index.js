require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

const app = express();
// app.use(cors())
// app.use(cors({
//     origin: "http://localhost:5173", // Set the allowed origin
//     credentials: true, // Allow credentials
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"]
// }));
// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(cors());
app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Routes
// const Getgallery = require("./routes")
const poojaRoutes = require("./routes/pooja.js");
const galleryRoutes=require("./routes/gallery.js");
// const bookingRoutes = require("./routes/booking");
const dashboard = require("./routes/admin/dashboard");
const userRoutes=require('./routes/users.js')
const bookingRoutes=require('./routes/booking.js')
const messageRoutes=require('./routes/admin/message.js');

app.use("/admin", dashboard);
app.use("/admin", galleryRoutes);
// app.use("/api/bookings", bookingRoutes);
app.use("/users", poojaRoutes);

//for admin or user login and register
app.use("/user", userRoutes);
app.use("/admin", userRoutes);

//for user or admin register
app.use("/user",userRoutes);

app.use("/users", bookingRoutes);
app.use("/admin", dashboard);
app.use('/',messageRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
