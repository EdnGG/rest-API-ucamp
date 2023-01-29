const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "Email is required"],
    unique: true,
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
  guitars: { type: String, required: false },
});

/* { PATH } Sera reemplazado por el campo con el atributo 'unique' declarado
en este caso seria 'email'
*/
userSchema.plugin(uniqueValidator, {
  message: "Error, waiting for unique {PATH} ",
});

const User = mongoose.model("user", userSchema);

module.exports = User;
