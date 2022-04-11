const express = require("express");
const router = express.Router();
const Book = require("../../models/Book");

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();

    if (!books) {
      res.status(400).json({ errors: [{ msg: "No books found" }] });
    }

    res.json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

router.post("/", async (req, res) => {
  const { title, isbn, author, imageUrl, price } = req.body;

  try {
    book = new Book({ title, isbn, author, imageUrl, price });

    const result = await book.save();
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
