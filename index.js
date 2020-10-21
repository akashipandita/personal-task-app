const express = require('express');
const mongoose=require('mongoose');
const bodyparser=require("body-parser");
const cors = require('cors');
const keys=require("./config/keys");

mongoose.connect(keys.mongo_uri);

// mongoose.connect("mongodb+srv://akashi:akashipandita@cluster0.ggybv.mongodb.net/MERN?retryWrites=true&w=majority");

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.use("/posts",require("./routes/post"));

if((process.env.NODE_ENV=="production")){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    });
}

app.get("/",(req,res)=>{
    res.send({Project: "Mern CRUD &&"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);