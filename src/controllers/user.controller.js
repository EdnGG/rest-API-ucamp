const User = require("../models/userSchema");
const { msg, msgError, restApi } = require("../helpers/helpers.js");

const getAllUsers = async (req, res) => {
  try {
    msg("GETTING ALL USERS");
    const users = await User.find();
    return restApi(res, "GETTING ALL USERS SUCCESSFULLY", users);
  } catch (err) {
    msgError("ERROR GETTING ALL USERS");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const postUser = async (req, res) => {
  try {
    msg("POSTING A NEW USER");
    const newUser = await User.create(req.body);
    return restApi(res, "USER CREATED SUCCESSFULLY", newUser);
  } catch (err) {
    msgError("ERROR POSTING A USER");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    msg("UPDATING A USER");
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    restApi(res, "USER  UPDATED SUCCESSFULLY", updatedUser);
  } catch (err) {
    msgError("ERROR UPDATING USER");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    msg("DELETING A USER");
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    restApi(res, "USER DELETED SUCCESSFULLY", deletedUser);
  } catch (err) {
    msgError("ERROR DELETING USER");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

module.exports = {
  getAllUsers,
  postUser,
  updateUser,
  deleteUser,
};
