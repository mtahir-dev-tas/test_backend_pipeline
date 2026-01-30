// src/middlewares/error.middleware.js
const ApiResponse = require("../utils/ApiResponse");

const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json(new ApiResponse(false, err.message || "Server Error"));
};

module.exports = errorHandler;
