const express = require("express");
const { connectDatabase } = require("./Connection/connections");
//const mongoose= require("mongoose");
const app = express();

connectDatabase();
const PORT = 8000;
app.listen(PORT, () => {
  console.log("server is running at Port", PORT);
});
