const knex = require('../db/knex_db');
module.exports = {
    getAllDevice: async() => {
        let devices = await knex('devices').select('*')
        return devices
    },
    insertDevice: async(device) => {
        result = await knex('devices').insert(device).returning('id')
        return result
    },
    updateDevice: async(device, id) => {
        result = await knex('devices').update(device).where('id', id)
        return result
    },
    deleteDevice: async(id) => {
        result = await knex('devices').del().where('id', id)
        return result
    }
}