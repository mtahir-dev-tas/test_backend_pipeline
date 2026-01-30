// src/controllers/user.controller.js
const userService = require("../services/user.service");
const ApiResponse = require("../utils/ApiResponse");

// Create
exports.createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(new ApiResponse(true, "User created", user));
  } catch (err) {
    next(err);
  }
};

// Read All
exports.getUsers = async (req, res, next) => {

  const { search, age, status } = req.body;

  try {

    let query = {};

    // search
    if(search){
      query.$or = [
        { name: { $regex: search, $options: "i"}},
        { email: { $regex: search, $options: "i"}}
      ]
    }

    // age
    if(age){ 
      query.age = { $lte: Number(age)}; 
    }

    // status
    if(status){
      const statusArray = Array.isArray(status) ? status : status.split(',');
      query.status = { $in: statusArray}
    }


    const users = await userService.getUsers(query);
    res.json(new ApiResponse(true, "Users fetched", users));
  } catch (err) {
    next(err);
  }
};

// Read One
exports.getUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json(new ApiResponse(false, "User not found"));
    res.json(new ApiResponse(true, "User fetched", user));
  } catch (err) {
    next(err);
  }
};

// Update
exports.updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) return res.status(404).json(new ApiResponse(false, "User not found"));
    res.json(new ApiResponse(true, "User updated", user));
  } catch (err) {
    next(err);
  }
};

// Delete
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user) return res.status(404).json(new ApiResponse(false, "User not found"));
    res.json(new ApiResponse(true, "User deleted", null));
  } catch (err) {
    next(err);
  }
};
