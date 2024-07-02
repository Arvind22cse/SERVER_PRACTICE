var express = require('express');
var app = express();
var routing = require('./router');
var login = require('./login.js');
var hello=require('./hello.js')
app.use('/', routing);
app.use('/', login);
app.use('/', hello);
app.get('/view',(req,res)=>
{
    res.send(`Your name is ${req.query["name"]} and email is ${req.query["email"]}`);
})
app.listen(8080, () => {
    console.log('Server is running on port http://localhost:8080/');
});
