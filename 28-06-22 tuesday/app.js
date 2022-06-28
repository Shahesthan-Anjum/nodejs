var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./book-model');

var db='mongodb://127.0.0.1:27017/mongoose';
mongoose.connect(db);
app.get('/', function(req, res){
    res.send('happy to be here.');
});

app.get('/books', function(req, res){
    console.log('getting all books');
    Book.find({})
    .exec(function(err, books){
        if(err){
            res.send('error has occured');
        }else {
            res.json(books);
        }
    });
});
app.get('/books/:id', function(req, res){
    console.log('getting one book');
    Book.findOne({
        _id:req.params.id
    })
    exec(function(err,books){
        if(err){
            res.send('error occured');
        }else{
            console.log(books);
            res.json(books);
        }
    });
});

var port=8080;
app.listen(port,function(){
    console.log('port started '+port);
});