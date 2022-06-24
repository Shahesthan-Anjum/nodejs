var express=require('express');
var app=express();
app.get("/",(req, res) =>{
    res.send ("hello");
});
app.get('/contact',(req,res)=>{
    res.send("This is contactpage");
});
app.get('/profile/:id',(req,res)=>{
    res.send("This is to request profile with id"+req.params.id);
});

app.listen("3000", ()=>{
    console.log("server started");
});
