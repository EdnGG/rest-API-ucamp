const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");

router.get("/user", getAllUsers);

router.post("/user", postUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

module.exports = router;
