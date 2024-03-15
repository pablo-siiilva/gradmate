const ALUNO = 0
const ORIENTADOR = 1
const ADMINISTRADOR = 2
const SECRET_KEY = 'chave_secreta';

async function isStudent(userType) {
    return userType == ALUNO;
}

async function isOrienter(userType) {
    return userType == ORIENTADOR;
}

async function isAdmin(userType) {
    return userType == ADMINISTRADOR;
}

async function checkToken(token) {
    jwt.verify(token, SECRET_KEY, function (err, decoded) {
        const isValid = !err && decoded;
        return isValid ? decoded : false;
    })
}

module.exports = { isStudent, isOrienter, isAdmin, checkToken };

