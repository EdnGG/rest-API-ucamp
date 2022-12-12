const express = require("express");
const router = express.Router();
// const

router.get("/", (req, res) => {
  res.send("Welcome to my Movies API");
});

module.exports = router;
