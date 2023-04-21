const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema({
  bookname: String,
  authorname: String,
  yearofpublication: Number,
  noofpages: Number,
});
const booksmodel = mongoose.model("Books", booksSchema);
module.exports = booksmodel;
