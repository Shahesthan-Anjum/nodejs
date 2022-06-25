var express=require('express');
var app=express();
app.set('view engine','ejs');
// app.get("/",(req, res) =>{
//     res.send("hello");
// });
// app.get('/contact',(req,res)=>{
//     res.send("This is contactpage");
// });
app.get("/",(req, res) =>{
    res.sendFile(__dirname + '/index.html');
});
app.get("/contact",(req, res) =>{
    res.sendFile(__dirname+ '/contact.html');
});
app.get('/profile/:name',(req,res)=>{
    var data={age:24,job:'baby'};
    res.render('profile',{person:req.params.name,data:data});
});

app.listen("3000", ()=>{
    console.log("server started");
});
