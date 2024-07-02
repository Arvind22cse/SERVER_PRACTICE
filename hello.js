var express=require('express');
var hello=express.Router();
hello.get('/hello',(req,res)=>{
    res.sendFile(__dirname+"/hello.html")
})
module.exports=hello;