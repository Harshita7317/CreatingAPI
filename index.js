const express = require("express");
const app = express();

/*app.get("/Posts", (req, res) => {
return res.json({message : "Posts data is fetched successfully"});
});

app.get("/News", (req, res) => {
    return res.json({message : "News data is fetched"});
} );

app.get("/ChatInfo", (req, res) => {
    return res.json({message: "Chat data is fetched"});
});

app.get("/Notifications" , (req, res) => {
    return res.json ({ message: "Notification data is fetched"});
});

app.get("/users" ,( req, res) =>{
    return res.json({message : " Users data fetched"});
});
app.get("/colleges", (req, res) => {
    let arr =[ 
        "MMMMUT",
        "IET",
        "IIT",
        "BBD",
        "JAYPEE"
    ];
    if( arr.length >=5){
        return res.json({data: arr, success: true});
    }
  else{
    return res.json({error: "Data is less than 5" , success: false});
  }
}
);

app.get("/information/:id",(req, res) => {
    let arr = [
         {  
            id: 1,
            name : "Harshita Mishra",
            branch: "ECE" ,
            college : "MMMMUT",
            hobbies : {
                interest : "Reading",
                artistic : "Painting",
                timepass : "Movies"
            }
        },
        {
            id: 2,
            name : "Avantika Tiwari",
            branch: "ECE" ,
            college : "MMMMUT",
            hobbies : {
                interest : "Reading",
                artistic : "Acting",
                timepass : "Sleeping"
            }
        },
          {
            id: 3,
        name : "Astha Srivastava",
        branch: "ECE" ,
        college : "MMMMUT",
        hobbies : {
            interest : "Studying",
            artistic : "Mandala Art",
            timepass : "Sleeping"
        }
    }
];
if ( arr.length >= 2)
{
    return res.json({ data: arr , code :14});
}
else {
    return res.status(400).json({errror : "Data is less than 2" , code: 18})
}
});

app.get("/api/user/:id", (req, res) => {
   try{
let userid= parseInt(req.params.id);
let friends= [
    {id: 1, name: "Astha", batch: 25},
    { id: 2, name: "Avantika", batch: 25},
    { id: 3, name: "Srijal", batch: 25},
    { id: 4, name: "Megha", batch: 25},
];
const user =friends.find((v)=>{
    return v.id === userid;
});
if(user){
return res.json({success: true, data: user});
    } else{
        return res.json({success: false, error: "user with id not found"});
    }
}
    catch(error){
        return res.status(400).json({success: false, error: error.message});
    }

   });
   //New api
   app.get("api/posts/:fid", (req, res)=>
   {
    try{
    let userfid =parseInt(req.params.fid);
  
        let postsdata=[
            {
                fid: 1,
                name: "Modiji",
                post: "NEP",
            },
            {
                fid: 2,
                name: "Amit Shah" ,
                post: "Namechangeofcities",
            },
            {
                fid: 3 ,
                name: "Yogiji",
                post: "Ram Mandir",
            },
        ];
        const data= postsdata.find((v)=>
        {
            return v.fid === userfid;
        });
        if(posts){
            return res.json({success: true, data: posts});
                } else{
                    return res.json({success: false, error: "user with id not found"});
                }
            }
                catch(error){
                    return res.status(400).json({success: false, error: error.message});
                }
   });
*/
app.use(express.json()); //by writing this, we are preparing our server to receive data from frontend, else it will receive undefined result.

app.post("/api/newuser", (req, res)=>{
    try {
        console.log(req.body);
        
        const userdata = {
            username: req.body.name,
            userrollno: req.body.roll,
            userbranch: req.body.branch,
            userbatch: req.body.batch, 
           };
           console.log(userdata);
       
        return res.json({success: true, message: "Testing submit api"});
    } catch (error) {
        return res.status(400).json({success: false, error: error.message});
    }
});

app.post("/api/collegeinfo", (req, res)=>
{
    try {
        console.log(req.body);
        const updateddata ={
            collegename: req.body.clgname,
            collegelocation: req.body.location,
            collegesize: req.body.size,
            collegestatus: req.body.status,
        };
        console.log(updateddata);
        return res.json({success: true, message: "Data updated"});
    } catch (error) {
        res.status(400).json({success: false, error: error.message });
        
    }
});
const PORT =8000;
app.listen(PORT, ()=>{
    console.log("Server is running at Port", PORT);
});
     




