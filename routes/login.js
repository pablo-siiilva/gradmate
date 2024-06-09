const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const log = require('log4js').getLogger();

const userRepository = require('./repo/userRepository.js')

const secretKey = process.env.SECRET_KEY;

router.get('/', (req, res) => {
    res.render("login");
});

router.post('/', async (req, res) => {
    let body = req.body;
    const isLoginValid = await validateLoginInformation(body);
    if (!isLoginValid) {
        log.info("Login inválido -> " + body.user + ":" + body.pass);
        res.render("login", {loginValid: false});
        return;
    }

    log.info("Login válido -> " + body.user + ":" + body.pass);
    saveToken(body, res);
    res.redirect('/');
});

async function validateLoginInformation(body) {
    const user = await userRepository.findByUserAndPass(body.user, body.pass);
    if (!user) {
        return false;
    }

    body.permissions = {
        isAdmin: body.isAdmin,
        canUploadFiles: body.canUploadFiles,
        canDownloadFiles: body.canDownloadFiles
    }
    
    return true;
}

function saveToken(body, res) {
    res.cookie.token = jwt.sign({ userId: body.user, userType: body.type }, secretKey, { expiresIn: '2h' });
}

module.exports = {
    router,
    verify: function (req, res, next) {
        var token = res.cookie.token
        jwt.verify(token, secretKey, (err, decoded) => {
            const isValid = !err && decoded;
            if (!isValid) {
                log.info("JWT -> " + token);
                return res.redirect('/login');
            }
            next();
        });
    }
}