const mongoose = require("mongoose");
const friendsSchema = new mongoose.Schema({
  schoolfriend: String,
  coachingfriend: String,
  hostelfriend: String,
  collegefriend: String,
  societyfriend: String,
});
const friendsmodel = mongoose.model("Friends", friendsSchema);
module.exports = friendsmodel;
