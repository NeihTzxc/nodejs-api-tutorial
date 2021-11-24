const user_model = require('../model/user.model')
module.exports = {
    getAllUser: (req, res) => {
        user_model.getAllUsers().then(user => {
            return res.status(200).json({
                status: 200,
                message: 'success',
                data: user
            })
        }).catch(err => {
            return res.status(400).json({
                status: 400,
                message: 'error',
                data: err
            })
        })
    },
    insertUser: (req, res) => {
        const {
            full_name,
            phone,
            email,
            password
        } = req.body
        const user = {
            'full_name': full_name,
            'phone': phone,
            'email': email,
            'password_hash': password
        }
        user_model.insertUser(user).then(result => {
            return res.status(200).json({
                status: 200,
                message: 'success',
                data: result[0]
            })
        }).catch(err => {
            return res.status(400).json({
                status: 400,
                message: 'error',
                data: err
            })
        })
    },
    updateUser: (req, res) => {
        const {
            full_name,
            phone,
            email,
            password,
            id
        } = req.body
        const user = {
            'full_name': full_name,
            'phone': phone,
            'email': email,
            'password_hash': password
        }
        user_model.updateUser(user, id).then(result => {
            return res.status(200).json({
                status: 200,
                message: 'success',
                data: result[0]
            })
        }).catch(err => {
            return res.status(400).json({
                status: 400,
                message: 'error',
                data: err
            })
        })
    },
    deleteUser: (req, res) => {
        const {
            id
        } = req.body
        user_model.deleteUser(id).then(result => {
            return res.status(200).json({
                status: 200,
                message: 'success',
                data: result[0]
            })
        }).catch(err => {
            return res.status(400).json({
                status: 400,
                message: 'error',
                data: err
            })
        })
    }
}