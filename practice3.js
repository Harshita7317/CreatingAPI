const express = require("express");
const app = express();
const { connectDatabase } = require("./Connection/connections");
const BOOKS_MODELS = require("./models/books");
const COLLEGES_MODELS = require("./models/colleges");
app.use(express.json());

app.post("/api/saveddata", async (req, res) => {
  try {
    console.log(req.body);
    const newobject = {
      bookname: req.body.Bookname,
      authorname: req.body.Authorname,
      yearofpublication: req.body.year,
      noofpages: req.body.pages,
    };
    console.log(newobject);
    const booksdata = await BOOKS_MODELS(newobject);
    await booksdata.save();
    return res.json({ success: true, message: "Data saved" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.get("/api/getbooksdata", async (req, res) => {
  try {
    const Booksdata = await BOOKS_MODELS.find();
    return res.json({ success: true, data: Booksdata });
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
