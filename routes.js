const express = require('express');
const router = express.Router();
const log = require('log4js').getLogger();
const login = require('./routes/login');
const projetos = require('./routes/projetos');
const alunos = require('./routes/alunos');
const professores = require('./routes/professores');
const usuarios = require('./routes/usuarios');
const cursos = require('./routes/cursos');

router.get('/', login.verify, (req, res) => {
    log.info("Carregando index...");
    res.render("index", { cookies: res.cookie });
});

router.use('/login', login.router);
router.use('/projetos', projetos.router);
router.use('/alunos', alunos.router);
router.use('/professores', professores.router);
router.use('/usuarios', usuarios.router);
router.use('/cursos', cursos.router);

module.exports = router;