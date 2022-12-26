const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // relacion con sus peliculas y libros
  movies: { type: String, required: false },
  books: { type: String, required: false },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
