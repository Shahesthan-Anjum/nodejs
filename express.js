var express=require('express');
var app=express();
app.get("/",(req, res) =>{
    res.send ("hello");
});
app.get('/contact',(req,res)=>{
    res.send("This is homepage");
});
app.listen("3000", ()=>{
    console.log("server started");
});
