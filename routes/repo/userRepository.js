const basicRepository = require("./basicRepository");
const log = require('log4js').getLogger();

module.exports = {
    findByUserAndPass: async function (user, pass) {
        log.info("Buscando usuário por login e senha.");
        try {
            const con = await basicRepository.createConnection();
            const [rows] = await con.execute(
                "SELECT * FROM login l WHERE l.login = ? AND l.senha = ?",
                [user, pass]
            );
            await con.end();
            return rows[0];
        } catch (err) {
            log.error(err);
            throw err;
        }
    }
}
