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

app.post("/api/friendsdata", async (req, res) => {
  try {
    console.log(req.body);
    const friendsobject = {
      schoolfriend: req.body.schooldaysfriend,
      coachingfriend: req.body.coachingdaysfriend,
      hostelfriend: req.body.hosteldaysfriend,
      collegefriend: req.body.collegedaysfriend,
      societyfriend: req.body.societydaysfriend,
    };
    console.log(friendsobject);
    const friend = await FRIENDS_MODELS(friendsobject);
    await friend.save();
    return res.json({ success: true, message: "data saved successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
});
app.get("/api/getfriendsdata", async (req, res) => {
  try {
    const Friendsdata = await FRIENDS_MODELS.find();
    return res.json({ success: true, data: Friendsdata });
  } catch (error) {
    console.log(error);
    return res.json({ sucess: false, message: error.message });
  }
});
//3rd
app.post("/api/resultsdata", async (req, res) => {
  try {
    console.log(req.body);
    const resultobject = {
      name: req.body.username,
      class: req.body.userclass,
      rollno: req.body.userrollno,
      physicsmarks: req.body.userphymarks,
      chemistrymarks: req.body.userchemmarks,
      mathsmarks: req.body.usermathsmarks,
    };
    console.log(resultobject);
    const result = await RESULT_MODELS(resultobject);
    await result.save();
    return res.json({ success: true, message: "data saved" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: true, message: error.message });
  }
});
app.get("/api/getresultdata", async (req, res) => {
  try {
    const Resultsdata = await RESULT_MODELS.find();
    return res.json({ success: true, data: Resultsdata });
  } catch (error) {
    console.log(error);
    return res.json({ sucess: false, message: error.message });
  }
});
connectDatabase();

const PORT = 8000;
app.listen(PORT, async () => {
  console.log("server is running at Port", PORT);
});
