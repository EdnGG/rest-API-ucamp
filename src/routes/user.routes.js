const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authToken.js");
const {
  getAllUsers,
  postUser,
  updateUser,
  deleteUser,
  signup,
  login,
  verificar,
} = require("../controllers/user.controller.js");

router.get("/user", getAllUsers);

router.post("/user", postUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

router.post("/user/signup", signup);

router.post("/user/login", login);

router.get("/user/verify", auth, verificar);

module.exports = router;
