var express = require('express');
var path = require('path'); // Add this line
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'express.html'));
});

module.exports = router;
