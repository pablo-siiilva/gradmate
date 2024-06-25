const express = require('express');
const router = express.Router();
const log = require('log4js').getLogger();
const login = require('./login');
const alunosRepository = require('./repo/alunosRepository');

router.get('/', login.verify, (req, res) => {
    const alunos = alunosRepository.findAll();
    log.info("Alunos encontrados: " + JSON.stringify(alunos));
    res.render("alunos", { cookies: res.cookie, alunos: alunos});
});

module.exports = {
    router
}