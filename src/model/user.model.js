const knex = require('../db/knex_db')
module.exports = {
    getAllUsers: async () => {
        let users = await knex('users').select('*')
        return users
    },
    insertUser: async(user) => {
        result = await knex('users').insert(user).returning('id')
        return result
    },
    updateUser: async(user, id) => {
        result = await knex('users').update(user).where('id', id)
        return result
    },
    deleteUser: async(id) => {
        result = await knex('users').del().where('id', id)
        return result
    }
}