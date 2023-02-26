const express = require("express");
const app = express();

app.get("/Posts", (req, res) => {
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

app.get("/information", (req, res) => {
    let arr = [
         {
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
else {;
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
        return res.json({success: false, error: "user with id npt found"});
    }
}
    catch(error){
        return res.status(400).json({success: false, error: error.message});
    }

   });
     
app.listen(8000, () => {
    console.log("Server is runnig at Port 8000");
}
);
