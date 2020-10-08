import express from "express";
import mongoose from "mongoose";


import Data from "./data.js";
import Videos from "./dbmodel.js";


// app config
const app = express();
const port =process.env.PORT || 9000;

// middlewares

app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*"),
    res.setHeader("Access-Control-Allow-Headers","*"),
    next();
}); 


// db connect
const db_connection="mongodb+srv://Amudhank:2tiktokmern@cluster0.lnfl4.mongodb.net/Amudhank?retryWrites=true&w=majority";
mongoose.connect(db_connection,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true

},()=> console.log("db connected"));


// api endpoints

app.get("/",(req,res)=> res.status(200).send("hello world"));

app.get("/v1/posts",(req,res) => res.status(200).send(Data));

//post method

app.post("/v2/posts",(req,res)=> {
    const dbVideos=req.body;

    Videos.create(dbVideos,(err,data)=>{
        if (err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});

//get method

app.get("/v2/posts",(req,res)=>{
    Videos.find((err,data)=>{
        if (err) {
            res.status(500).send(err);

        }else{
            res.status(200).send(data);
        }
    });
});

// listen 
app .listen(port,()=> console.log(` listening on localhost: ${port} `));
