express1.js

var express=require('express');
var app=express();
app.set('view engine','ejs');
app.use('/assests',express.static('assests'));
// app.get("/",(req, res) =>{
//     res.send("hello");
// });
// app.get('/contact',(req,res)=>{
//     res.send("This is contactpage");
// });
// app.get("/",(req, res) =>{
//     res.sendFile(__dirname + '/index.html');
// });
// app.get("/contact",(req, res) =>{
//     res.sendFile(__dirname+ '/contact.html');
// });
app.get("/",(req, res) =>{
    res.render('index');
});
app.get("/contact",(req, res) =>{
    res.render('contact');
});
app.get('/profile1/:name',(req,res)=>{
    var data={age:24,job:'love to sleep',hobbies:['eating','cooking','want to be alone']};
    res.render('profile1',{person:req.params.name,data:data});
});

app.listen("3000", ()=>{
    console.log("server started");
});


index.js

<!DOCTYPE html>
<html>
    <head>
        <link href="/assests/styles.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <%- include('partials/nav.ejs') %>
        <h1>Welcome me</h1>
        <p>you wont find me</p>
    </body>
</html>

styles.css

body{background: skyblue; font-family: Verdana; color:#fff; padding: 30px;}
h1{font-size: 48px; text-transform: uppercase; letter-spacing: 2px; text-align: center;}
p{font-size:  16px; text-align: center;}

contact.ejs
<!DOCTYPE html>
<html>
    <head>
        <style>
            body{background: skyblue; font-family: Verdana; color:#fff; padding: 30px;}
            h1{font-size: 48px; text-transform: uppercase; letter-spacing: 2px; text-align: center;}
            p{font-size:  16px; text-align: center;}
        </style>
    </head>
    <body>
        <%- include('partials/nav.ejs') %>
        <h1>welcome to the contact page</h1>
        <p>
            contact here......!
        </p>
    </body>
</html>

nav.ejs
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/profile1/:name">Profile</a></li>
    </ul>
</nav>