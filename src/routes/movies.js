const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const movies = require("../db/db.js");

router.get("/", (req, res) => {
  res.send("Welcome to my Movies API");
  // const response = {
  //   status: "success",
  //   msg: "data sent",
  //   data: users,
  //   total: users.length,
  // };
  // res.json(response);
});

router.get("/movies", (req, res) => {
  const response = {
    status: "success",
    msg: "Get all movies",
    data: movies,
    total: movies.length,
  };
  res.json(response);
});

router.post("/movies", (req, res) => {
  // res.send("Post a movie");
  movies.push(req.body);
  const response = {
    status: "success",
    msg: "New movie posted",
    data: movies,
    total: movies.length,
  };
  res.json(response);
});

router.put("/movies/:id", (req, res) => {
  // res.send("Update a movie");
  const { id } = req.params;
  const { movieName, age } = req.body;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  movie.movieName = movieName;
  movie.age = age;
  const response = {
    status: "success",
    msg: "Movie updated",
    data: movie,
  };
  res.json(response);
});

router.delete("/movies/:id", (req, res) => {
  // res.send("Delete Movie");
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === Number(id));

  // Deleting movie important to use splice
  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  const response = {
    status: "success",
    msg: "Movie deleted",
    data: movies,
  };
  res.json(response);
});

module.exports = router;
