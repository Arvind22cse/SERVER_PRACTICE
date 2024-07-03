const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => { // Corrected order of parameters
    res.sendFile(path.join(__dirname, "EX.html"));
});

app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000/`);
});
