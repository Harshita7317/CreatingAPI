const mongoose = require("mongoose");
const biodataSchema = new mongoose.Schema({
  name: String,
  gender: String,
  age: Number,
  idproofnumber: Number,
  address: Number,
  String,
});
const biodatamodel = mongoose.model("Biodata", biodataSchema);

module.exports = biodatamodel;
