const express = require("express");
const router = express.Router();
const {
  postGuitar,
  getAllGuitars,
  updateGuitar,
  deleteGuitar,
} = require("../controllers/guitar.controller.js");
const { tokenVerification } = require("../middlewares/authToken.js");

router.get("/guitars", getAllGuitars);

router.post("/guitar", tokenVerification, postGuitar);

router.put("/guitar/:id", tokenVerification, updateGuitar);

router.delete("/guitar/:id", tokenVerification, deleteGuitar);

module.exports = router;
