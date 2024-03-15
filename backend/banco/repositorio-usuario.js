const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function buscarUsuarioPeloLogin(login) {
    return await prisma.usuario.findFirst({ where: { login } });
}

module.exports = buscarUsuarioPeloLogin