const express =require("express");
const app= express();

app.use(express.json());
app.post("/api/user", (req, res)=>{
    try {
        console.log(req.body);
        return res.json({success: true, message: "Testing submit api"});
    } catch (error) {
        return res.status(400).json({success: false, error: error.message});
    }
});
const PORT =8000;
app.listen(PORT, ()=>{
    console.log("Server is runnign at Port", PORT);
});