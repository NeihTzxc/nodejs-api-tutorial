'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.SERVER_APP_PUBLIC_PORT || 8080
const HOST = '0.0.0.0'
const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors())

const UserController = require('./controllers/user.controller')

app.get('/user/get-all-user', UserController.getAllUser)
app.post('/user/insert-user', UserController.insertUser)
app.post('/user/update-user', UserController.updateUser)
app.post('/user/delete-user', UserController.deleteUser)
app.get('/', (req, res) => {
    res.send("OK");
})


app.get('/healthz-ok', (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    }
    return res.send(healthcheck)
})
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)