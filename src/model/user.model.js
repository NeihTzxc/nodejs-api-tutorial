const knex = require('../db/knex_db')
module.exports = {
    getAllUsers: async () => {
        let users = await knex('users').select('*')
        return users
    }
}