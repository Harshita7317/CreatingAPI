const express = require("express");
const app = express();
const { connectDatabase } = require("./Connection/connections");
const RESULT_MODELS = require("./models/result");
const MOVIES_MODELS = require("./models/movies");
const FRIENDS_MODELS = require("./models/friends");
app.use(express.json());

app.post("/api/savedata", async (req, res) => {
  try {
    console.log(req.body);
    const newobject = {
      BajiraoMastani: req.body.baji,
      PK: req.body.pk,
      Bajrangibhaijaan: req.body.bajrangi,
      Airlift: req.body.airlift,
      Veerzara: req.body.zara,
    };
    console.log(newobject);
    const moviesdata = await MOVIES_MODELS(newobject);
    await moviesdata.save();
    return res.json({ success: true, message: "Data saved" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.get("/api/getmovies", async (req, res) => {
  try {
    const Moviesdata = await MOVIES_MODELS.find();
    return res.json({ success: true, data: Moviesdata });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

connectDatabase();

const PORT = 8000;
app.listen(PORT, async () => {
  console.log("server is running at Port", PORT);
});
