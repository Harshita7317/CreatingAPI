const mongoose = require("mongoose");
const hostelinfoSchema = new mongoose.Schema({
  hostelname: String,
  numberofresidents: Number,
  numberofrooms: Number,
  area: String,
});
const hostelinfomodel = mongoose.model("Hostelinfo", hostelinfoSchema);
module.exports = hostelinfomodel;
