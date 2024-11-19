const { createConnection } = require('../../controllers/connection.controller')

const connectionRoutes = require('express').Router()

connectionRoutes.get('/create', createConnection)

module.exports = connectionRoutes