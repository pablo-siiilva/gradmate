const express = require('express');
const router = express.Router();
const log = require('log4js').getLogger();
const login = require('./routes/login');

router.get('/', login.verify, (req, res) => {
    log.info("Carregando index...");
    res.send("Hello World");
});

router.use('/login', login.router);

module.exports = router;