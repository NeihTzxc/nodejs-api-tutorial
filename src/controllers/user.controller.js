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
    }
}