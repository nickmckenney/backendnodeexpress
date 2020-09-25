const express = require('express');

const importData=require("./data.json");


const app = express();
let port = process.env.PORT || 4001;
app.get("/",(req,res)=>{
    res.send("hi");
});
app.get("/players",(req,res)=>{
    res.send(importData);
});
app.listen(port, ()=>{
    console.log("app is alive");
});

