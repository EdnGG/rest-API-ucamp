const express = require("express");
const router = express.Router();
const {
  postGuitar,
  getAllGuitars,
  updateGuitar,
  deleteGuitar,
} = require("../controllers/guitar.controller.js");
const { tokenVerification } = require("../middlewares/authToken.js");

router.get("/movies", getAllGuitars);

router.post("/movies", tokenVerification, postGuitar);

router.put("/movies/:id", tokenVerification, updateGuitar);

router.delete("/movies/:id", tokenVerification, deleteGuitar);

module.exports = router;
