const mongoose = require("mongoose");
const librarydataSchema = new mongoose.Schema({
  bookname: String,
  authorname: String,
  issuedate: String,
  returndate: Number,
  isfineapplicable: Boolean,
});
const librarydatamodel = mongoose.model("Librarydata", librarydataSchema);
module.exports = librarydatamodel;
