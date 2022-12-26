const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  postUser,
  updateUser,
  deleteUser,
  signup,
  login,
  logOut,
} = require("../controllers/user.controller.js");

router.get("/user", getAllUsers);

router.post("/user", postUser);

router.post("/user/signup", signup);

router.post("/user/login", login);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

module.exports = router;
