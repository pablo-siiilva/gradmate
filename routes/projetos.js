const express = require('express');
const router = express.Router();
const log = require('log4js').getLogger();


router.get('/', (req, res) => {
    res.render("projetos", { cookies: res.cookie });
});

module.exports = {
    router
}