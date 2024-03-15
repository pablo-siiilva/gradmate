const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const repositorioUsuario = require('../banco/repositorio-usuario');

const SECRET_KEY = 'chave_secreta';

async function login(email, senha) {
    repositorioUsuario.buscarUsuarioPeloLogin(email);
    const loginValido = user && _validarSenha(user.senha, senha);
    if (!loginValido) {
        return false;
    }

    return _gerarToken(user);
};

async function logout() {
    res.cookie.auth = null;
    res.cookie.decodedInfo = null;
}

async function _validarSenha(senhaInserida, senhaBanco) {
    return !bcrypt.compareSync(senhaBanco, senhaInserida)
}

async function _gerarToken(user) {
    jwt.sign({ userId: user.id, userType: user.tipo }, SECRET_KEY, { expiresIn: '12h' })
}

async function encryptPassword(password) {
    return bcrypt.hash(password, 10);
}

module.exports = {login, logout, encryptPassword};

