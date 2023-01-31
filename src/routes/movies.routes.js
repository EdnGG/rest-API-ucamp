const express = require("express");
const router = express.Router();
// const bodyParser = require("body-parser");
const {
  postMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controller.js");
// const { auth } = require("../middlewares/authToken.js");

router.get("/movies", getAllMovies);

router.post("/movies", postMovie);

router.put("/movies/:id", updateMovie);

router.delete("/movies/:id", deleteMovie);

module.exports = router;
