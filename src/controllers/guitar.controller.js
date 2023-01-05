const Guitars = require("../models/guitarSchema");
const { msg, msgError, restApi } = require("../helpers/helpers.js");

const getAllGuitars = async (req, res) => {
  try {
    msg("GETTING ALL GUITARS");
    const guitars = await Guitars.find();
    return restApi(res, "GETTING ALL GUITARS SUCCESSFULLY", guitars);
  } catch (err) {
    msgError("ERROR GETTING ALL GUITARS");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const postGuitar = async (req, res) => {
  try {
    msg("POSTING A NEW GUITAR");
    console.log("body: ", req.body);
    const newGuitar = await Guitars.create(req.body);
    return restApi(res, "GUITAR CREATED SUCCESSFULLY", newGuitar);
  } catch (err) {
    msgError("ERROR POSTING A GUITAR");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const updateGuitar = async (req, res) => {
  try {
    msg("UPDATING A GUITAR");
    const updateGuitar = await Guitars.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    restApi(res, "GUITAR UPDATED SUCCESSFULLY", updateGuitar);
  } catch (err) {
    msgError("ERROR UPDATING GUITAR");
    return res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const deleteGuitar = async (req, res) => {
  try {
    msg("DELETING A GUITAR");
    // const { id } = req.params;
    const deleteGuitar = await Movies.findByIdAndDelete(req.params.id);
    restApi(res, "GUITAR DELETED SUCCESSFULLY", deleteGuitar);
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
  getAllGuitars,
  postGuitar,
  updateGuitar,
  deleteGuitar,
};
