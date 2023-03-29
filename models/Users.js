const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({
  name: String,
  rollno: Number,
  branch: String,
  age: Number,
  isFresher: Boolean,
});
const Usersmodel = mongoose.model("Users", UsersSchema);
module.exports = Usersmodel;
