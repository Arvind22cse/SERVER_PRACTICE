var express = require('express');
var bodyParser = require('body-parser'); // Add this line
var login = express.Router();

// Use body-parser middleware to parse form data
login.use(bodyParser.urlencoded({ extended: true }));

login.post('/login', (req, res) => {
    res.sendFile(__dirname+"/login.html")
});
module.exports = login;
