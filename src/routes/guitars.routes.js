const express = require("express");
const router = express.Router();
const {
  postMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controller.js");
const { tokenVerification } = require("../middlewares/authToken.js");

router.get("/movies", getAllMovies);

router.post("/movies", tokenVerification, postMovie);

router.put("/movies/:id", tokenVerification, updateMovie);

router.delete("/movies/:id", tokenVerification, deleteMovie);

module.exports = router;
