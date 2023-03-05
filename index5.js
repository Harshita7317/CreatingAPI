const express= require("express");
const app= express();
app.use(express.json());
app.post("/api/emailaunthentication" , (req,res)=>{
    try {
        let originalpassword = "Webies123@#";
        let enteredpassword= req.body.password;
        console.log(req.body);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email))
        {
                if(originalpassword===enteredpassword){
                    return res.json({success : true, message: "Logged in successfully"});
                }
                else{
                    return res.json({success: false, message: "Incorrect password"});
                }
        }
            else
            {
        return res.status(400).json({success: false, message: "Invalid email id"});
            }
             
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
    
    
    
});

const PORT=8000;
app.listen(PORT,()=>{
    console.log("Server is running at port", PORT);
});