const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boobkSchema = new Schema({
  title: { type: String, required: true },
  DateP: { type: Date, default: Date.now },
  page: { type: Number },
});

const Book = mongoose.model("Book", boobkSchema);

module.exports = Book;
