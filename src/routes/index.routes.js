const express = require("express");
const router = express.Router();
// const

router.get("/", (req, res) => {
  res.send("Welcome to my UCAMP API");
});

module.exports = router;
