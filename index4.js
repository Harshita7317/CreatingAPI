const express= require("express");
const app= express();
app.use(express.json());
app.post("/api/newsdata", (req, res)=>
{
    try {
        console.log(req.body);
        const recentnews = {
            LatestNews: req.body.Newstitle,
            LatestNewscategory : req.body.NewsCategory,
            LatestNewsdesp: req.body.NewsDescription,
            LatestNewsDate: req.body.NewsDate,
            LatestSource: req.body.NewsSource,
            LatestViews: req.body.Newviews,
           };

        console.log(recentnews);
        
        
       
        return res.json({success: true, message: "News updated" });
    } catch (error) {
        res.status(400).json({success: false, error: error.message });
        
    }
});
const PORT =8000;
app.listen(PORT, ()=>{
    console.log("Server is running at Port", PORT);
});
     