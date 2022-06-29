var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./book-model');

var db='mongodb://127.0.0.1:27017/mongoose';
mongoose.connect(db);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', function(req, res){
    res.send('happy to be here.');
});

app.get('/getallbooks', function(req, res){
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
app.get('/getonebook/:id', function(req, res){
    console.log('getting one book');
    Book.findOne({
        _id:req.params.id
    })
    .exec(function(err,book){
        if(err){
            res.send('error occured');
        }else{
            console.log(book);
            res.json(book);
        }
    });
});
app.post('/addbook',function(req, res){
    var newBook = new Book();

    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.category = req.body.category;

    newBook.save(function(err, book){
        if(err){
            res.send('error saving book');
        }else{
            console.log(book);
            res.send(book);
        }
    });
});
app.put('/putbook/:id', function(req, res){
    Book.findOneAndUpdate({
        _id:req.params.id },
        {$set:{title:req.body.title}},{upsert:true},
        function(err,newBook){
            if(err){
                console.log('error occured');
            }else{
                console.log(newBook);
                res.send(newBook);
            }
        
    });

});
app.delete('/deletebook/:id', function(req, res){
    Book.findOneAndRemove({
        _id:req.params.id
    },function(arr, book){
        if(err){
            res.send('error deleting');
        }else{
            console.log(look);
            res.status(204);
        }
    
    });
});


var port=8080;
app.listen(port,function(){
    console.log('port started '+port);
});