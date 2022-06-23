var http=require('http');
var server=http.createServer(function(req,res){
    console.log('request was made:' + req.url);
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end("hey");
});

server.listen(3000,'127.0.0.1');
console.log("completed");


var http=require('http');
var fs = require('fs');

var server=http.createServer(function(req,res){
    console.log('request was made:' + req.url);
    res.writeHead(200,{'Content-type':'text/plain'});
    var myReadStream=fs.createReadStream(__dirname + '/readMe.txt','utf8');
    myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log("completed from readMe.txt file to browser");
