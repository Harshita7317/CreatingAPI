const mongoose = require("mongoose");
const moviesSchema = new mongoose.Schema({
  BajiraoMastani: String,
  PK: String,
  Bajrangibhaijaan: String,
  Airlift: String,
  Veerzara: String,
});
const moviesmodel = mongoose.model("Movies", moviesSchema);

module.exports = moviesmodel;
