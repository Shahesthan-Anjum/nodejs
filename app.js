console.log("hi anjum");
setTimeout(function(){
    console.log("3 seconds");
},3000);
var time=0;
var timer=setInterval(function(){
    time+=2;
    console.log(time+ " seconds")
    if(time>5){
        clearInterval(timer);
    }
},2000);
console.log(__dirname);
console.log(__filename);