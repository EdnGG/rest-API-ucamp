const Book = require("../models/bookSchema");
const { msg, restApi } = require("../helpers/helpers");

// GET ALL BOOKS
const getAllBooks = async (req, res) => {
  try {
    msg("Books listed");
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res.json({ message: error });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.json({ message: error });
  }
};

const createBook = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    page: req.body.page,
  });

  try {
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (error) {
    res.json({ message: error });
  }
};
