const Movies = require("../models/movieSchema");
const { msg, msgError, restApi } = require("../helpers/helpers.js");

const getAllMovies = async (req, res) => {
  try {
    msg("GETTING ALL MOVIES");
    const movies = await Movies.find();
    return restApi(res, "GETTING ALL MOVIES SUCCESSFULLY", movies);
  } catch (err) {
    msgError("ERROR GETTING ALL MOVIES");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const postMovie = async (req, res) => {
  try {
    msg("POSTING A NEW MOVIE");
    console.log("body: ", req.body);
    const newMovie = await Movies.create(req.body);
    return restApi(res, "MOVIE CREATED SUCCESSFULLY", newMovie);
  } catch (err) {
    msgError("ERROR POSTING A MOVIE");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const updateMovie = async (req, res) => {
  try {
    msg("UPDATING A MOVIE");
    const updatedMovie = await Movies.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    restApi(res, "MOVIE UPDATED SUCCESSFULLY", updatedMovie);
  } catch (err) {
    msgError("ERROR UPDATING MOVIE");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    msg("DELETING A MOVIE");
    // const { id } = req.params;
    const deletedMovie = await Movies.findByIdAndDelete(req.params.id);
    restApi(res, "MOVIE DELETED SUCCESSFULLY", deletedMovie);
    // res.json({
    //   status: "success",
    //   msg: "Movie deleted",
    //   data: deletedMovie,
    // });
  } catch (err) {
    msgError("ERROR DELETING MOVIE");
    res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

module.exports = {
  getAllMovies,
  postMovie,
  updateMovie,
  deleteMovie,
};
