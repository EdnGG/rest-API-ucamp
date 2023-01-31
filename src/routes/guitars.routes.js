const express = require("express");
const router = express.Router();
const {
  postGuitar,
  getAllGuitars,
  updateGuitar,
  deleteGuitar,
} = require("../controllers/guitar.controller.js");
// const { auth } = require("../middlewares/authToken.js");

router.get("/guitars", getAllGuitars);

router.post("/guitar", postGuitar);

router.put("/guitar/:id", updateGuitar);

router.delete("/guitar/:id", deleteGuitar);

module.exports = router;
