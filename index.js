//Node Project
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const items=[];
const witems=[];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    const day = new Date().toDateString();
    res.render("index.ejs", {
        cal:day,
        items:items,
        
    });
    
}); 


app.post("/", (req, res) => {
    const day = new Date().toUTCString();
    const numLetters = req.body["fName"];
    items.push(numLetters);
    res.render("index.ejs", {
    items: items,
    cal:day
    });
});

app.get("/work",(req,res)=>{
    const day = new Date().toUTCString();
    res.render("work.ejs", {
        cal:day,
        witems:witems,
    });
    
}); 


app.post("/work", (req, res) => {
    const numLetters = req.body["fName"];
    witems.push(numLetters);
    res.render("work.ejs", {
    witems: witems
    });
});

  

app.listen(port,()=>{
    console.log("Server Running on Port "+ port);
});