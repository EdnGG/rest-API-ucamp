const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  movieName: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  age: Number,
  showtimes: [String],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
