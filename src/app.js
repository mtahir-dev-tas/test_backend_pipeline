// src/app.js
const express = require("express");
const cors = require("cors");
const corsOptions = "./config/corsOptions.js";
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/v1/users", userRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;