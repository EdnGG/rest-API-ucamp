const Movies = require("../models/movieSchema");

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    res.json({
      status: "success",
      msg: "Get all movies",
      data: movies,
      total: movies.length,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
};

const postMovie = async (req, res) => {
  try {
    console.log("body: ", req.body);
    const { body } = req;

    const newMovie = await Movies.create(body);
    res.json({
      status: "success",
      msg: "New movie posted",
      data: newMovie,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const updatedMovie = await Movies.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.json({
      status: "success",
      msg: "Movie updated",
      data: updatedMovie,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movies.findByIdAndDelete(id);
    res.json({
      status: "success",
      msg: "Movie deleted",
      data: deletedMovie,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
};

module.exports = {
  getAllMovies,
  postMovie,
  updateMovie,
  deleteMovie,
};
