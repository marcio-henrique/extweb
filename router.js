const express = require('express');
const router = new express.Router();

const fs = require('fs');

const projetoController = require('./controllers/projeto');


// test url
router.get('/test', projetoController.test);

// Serve the homepage
const homePageAbsolutePath = __dirname + "/views/index.html";
router.get("/", (req, res) => res.sendFile(homePageAbsolutePath));

// Serve the second page
const secondPageAbsolutePath = __dirname + "/views/detalhes_acao.html";
router.get("/detalhes_acao", (req, res) => res.sendFile(secondPageAbsolutePath));

// Serve the second page
const detailPageAbsolutePath = __dirname + "/views/lista_projetos.html";
router.get("/lista_projetos", (req, res) => res.sendFile(detailPageAbsolutePath));

// Serve the projects list
const projectsJson = fs.readFileSync("acoes_ext.json");
router.get("/projetos", (req, res) => res.send(JSON.parse(projectsJson)));

const listJson = fs.readFileSync("lista_acoes_ext.json");
router.get("/jsonLista", (req, res) => res.send(JSON.parse(listJson)));




module.exports = router;