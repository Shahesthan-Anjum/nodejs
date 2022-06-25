express1.js
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.set('view engine','ejs');
app.use('/assests',express.static('stuff'));
var urlencodedParser=bodyParser.urlencoded({extended:false})
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
    res.render('contact',{qs:req.query});
});
app.post("/contact",urlencodedParser,(req, res) =>{
    console.log(req.body)
    res.render('contact-success',{data:req.body});
});
app.get('/profile1/:name',(req,res)=>{
    var data={age:24,job:'love to sleep',hobbies:['eating','cooking','want to be alone']};
    res.render('profile1',{person:req.params.name,data:data});
});

app.listen("3000", ()=>{
    console.log("server started");
});

contact.ejs
<!DOCTYPE html>
<html>
    <head>
        <style>
            body{background: skyblue; font-family: Verdana; color:#fff; padding: 30px;}
            h1{font-size: 48px; text-transform: uppercase; letter-spacing: 2px; text-align: center;}
            p{font-size:  16px; text-align: center;}
            form{width:400px;max-width:100%;padding:20px;margin:20px auto}
            input,label{display:block;margin: :10px 0;padding;5px;width:100px;}
        </style>
    </head>
    <body>
        <%- include('partials/nav.ejs') %>
        <h1>welcome to the contact page</h1>
        <p>
            contact here......!
        </p>
        <form id="contact-form" method="POST" action="/contact">
            <label for="who">who do you want to contact?</label>
            <input type="text" name="who" value="<%=qs.person%>">
            <label for="department">which department?</label>
            <input type="text" name="department" value="<%=qs.department%>">
            <label for="email">who do you want to email?</label>
            <input type="text" name="email" value="<%=qs.email%>">
            <input type="submit" value="submit">
            </form>
        </form>
    </body>
</html>

contact-success.ejs
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
        <p>Thanks for getting touch with us</p>
        <p>You contacted <%=data.who%> in the <%=data.department%> department ></p>
        <p>We will reply you with the email <%=data.email%></p>
    </body>
</html>