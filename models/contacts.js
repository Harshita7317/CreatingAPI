const mongoose = require("mongoose");
const contactsSchema = new mongoose.Schema({
  username: String,
  phonenumber: Number,
  mailid: String,
  Number,
  age: Number,
});
const contactsmodel = mongoose.model("Contact", contactsSchema);
module.exports = contactsmodel;
