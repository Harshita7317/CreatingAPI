const mongoose = require("mongoose");
const twitterSchema = new mongoose.Schema({
  post: String,
  tweet: String,
  tweetsize: Number,
  news: String,
});
const twittermodel = mongoose.model("Twitterdata", twitterSchema);
module.exports = twittermodel;
