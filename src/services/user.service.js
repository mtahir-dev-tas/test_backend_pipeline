// src/services/user.service.js
const User = require("../models/user.model");

// Create User
exports.createUser = async (data) => {
  const user = await User.create(data);
  return user;
};

// Get All Users
exports.getUsers = async (query = {}) => {
  return await User.find(query);
};

// Get User by ID
exports.getUserById = async (id) => {
  return await User.findById(id);
};

// Update User
exports.updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

// Delete User
exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
