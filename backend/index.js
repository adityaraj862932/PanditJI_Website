const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cors());
app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Routes
const userRoutes = require("./routes/users");
const bookingRoutes = require("./routes/booking");
const dashboard = require("./routes/admin/dashboard");

app.use("/users", userRoutes);
app.use("/users", bookingRoutes);
app.use("/admin", dashboard);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
