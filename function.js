//normal function
function sayhi(){
    console.log("hi function");
}
sayhi();

//function expression
var saybye=function(){
    console.log("Bye function");
}
saybye();

//another way to call function expression
var saybye1=function(){
    console.log("call function");
}
function callfunction(fun){
    fun();
}
callfunction(saybye1);


