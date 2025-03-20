const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // Import the database connection file

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
const userRoutes = require("./routes/users");
const bookingRoutes = require("./routes/booking");

app.use("/api/users", userRoutes)
app.use("/api/bookings", bookingRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
