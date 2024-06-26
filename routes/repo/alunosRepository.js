const basicRepository = require("./basicRepository");
const log = require('log4js').getLogger();

module.exports = {
    findAll: async function () {
        log.info("Buscando todos os usuários.");
        try {
            const con = await basicRepository.createConnection();
            const [rows] = await con.execute(
                "SELECT * FROM aluno ORDER BY id DESC"
            );
            log.info(rows)
            await con.end();
            return rows;
        } catch (err) {
            log.error(err);
            throw err;
        }
    }
}
