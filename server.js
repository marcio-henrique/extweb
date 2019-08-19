const express = require('express');
const app = express();

const bodyParser = require('body-parser');

require('dotenv').config();
require('dotenv-safe').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}, (err) => {
    if (err) {
        console.log(err);
    }

    console.log("Connected!");
});


// logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

// Serve static assets
const assetsAbsolutePath = __dirname + "/public";
app.use(express.static(assetsAbsolutePath));

app.use(require("./router"));


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



  