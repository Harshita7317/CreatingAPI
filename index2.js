const express= require("express");
const app = express();
app.use(express.json());
//Login page
app.post("/api/loginpage", (req,res)=>{
    try {
        console.log(req.body);
        let correctpassword= "HarshitaMishra@123";
        let enteredpassword=(req.body.password);

        if(correctpassword === enteredpassword)
        {
            return res.json({status: true, message: `Welcome to your account, your username is ${req.body.username}`});
        }
        else {
            return res.status(401).json({status: false, message: "Invalid username or password"}) ;
        }
        
    } catch (error) {
        return res.status(400).json({status: false, message: error.message});
    }
} );
const port=8000;
app.listen(port, ()=>{
    console.log("Server is running at Port", port);

});