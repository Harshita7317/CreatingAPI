const mongoose = require("mongoose");
const collegesSchema = new mongoose.Schema({
  college1: String,
  college2: String,
  college3: String,
  college4: String,
  college5: String,
});
const collegemodel = mongoose.model("College", collegesSchema);
module.exports = collegemodel;
