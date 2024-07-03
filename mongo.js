const express = require('express');
const { MongoClient } = require('mongodb');

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const mongodb = 'mongodb://localhost:27017';
const dbname = 'ashwanth';

MongoClient.connect(mongodb)
    .then((client) => {
        db = client.db(dbname);
        console.log(`db is ${dbname}`);
    })
    .catch((err) => {
        console.error("ERROR", err);
        process.exit(1);
    });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/mongo.html");
});

app.post('/insert', async (req, res) => { // Corrected order of parameters
    try {
        const { name,email } = req.body;
        await db.collection("darun").insertOne({ name ,email});
        res.redirect('/');
    } catch (err) {
        console.error("Error: " + err);
    }
});
app.get('/view',async(req,res)=>{
    const item=await db.collection("darun").find().toArray();
    console.log(item);
    const table=`<body>
    <table border="1">
    <thead>
    <tr>
    <th>Name</th>
    <th>Email</th>
    </tr>
    </thead>
    <tbody>
    ${item.map((data) => `<tr><td>${data.name}</td><td>${data.email}</td></tr>`)}
</tbody>
<a href="/">Back</a>
</body>`
res.send(table);
})
app.post('/update',async(req,res)=>{
    const {nname,nemail}=req.body;
    try{
        await db.collection("darun").updateOne({"name":nname},{$set:{email:nemail}});
        res.redirect('/');
    }
    catch(error){
        console.error("Errror",error);
    }
})
app.post("/del",async(req,res)=>{
    
    try{
        const namedel=req.body.namedel;
        const delres=await db.collection("darun").deleteOne({name:namedel});
        if(delres.deletedCount===0){
            console.log("No item matched");
            res.redirect("/");
        }
        else{
            console.log('deleted successfully');
            res.redirect("/");
        }
    }
    catch(error){
        console.error("Errror",error);
    }
})
app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000/`);
});
