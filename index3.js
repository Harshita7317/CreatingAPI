const express = require("express");
const app = express(); 

app.use(express.json());
app.post("/api/biodata", (req,res)=>{
   try {
    console.log(req.body);
    const updatedinfo= {
        newusername: req.body.Name,
        newbrithdate: req.body.BirthDate,
        newaddress: req.body.Address,
        newaphoneno: req.body.Phonenumber,
        newhobbies: req.body.Hobbies,
        newlinkedinid: req.body.Linkedinid,
        newgitid: req.body.githubid,
        newemail: req.body.email,
} 
console.log(updatedinfo);
    return res.json({success: true, message: "Biodata saved successfully"});
    
   } catch (error) {
    return res.status(400).json({success: false, error: error.message});
    
   }

});

const PORT= 8000;
app.listen(PORT, ()=>{
    console.log("Server is running at Port", PORT)
});
