const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const fs = require('fs');

// logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

// Serve static assets
const assetsAbsolutePath = __dirname + "/public";
app.use(express.static(assetsAbsolutePath));

// Serve the homepage
const homePageAbsolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => res.sendFile(homePageAbsolutePath));

// Serve the projects list
const projectsJson = fs.readFileSync("acoes_ext.json");
app.get("/projetos", (req, res) => res.send(JSON.parse(projectsJson)));


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port${port}`);
});



  