const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/auth.controller.js");

router.post("/auth/signup", signup);

router.post("/auth/login", login);

// router.put("/user/:id", updateUser);

// router.delete("/user/:id", deleteUser);

module.exports = router;
