const { getDatabases, getTables, getViews, getStoredProcedure, getTriggers, getEvents } = require('../../controllers/database.controller')

const databaseRoutes = require('express').Router()

databaseRoutes.get('/', getDatabases)

databaseRoutes.get('/tables/:dbName', getTables)

databaseRoutes.get('/views/:dbName', getViews)

databaseRoutes.get('/stored-procedures/:dbName', getStoredProcedure)

databaseRoutes.get('/triggers/:dbName', getTriggers)

databaseRoutes.get('/events/:dbName', getEvents)

module.exports = databaseRoutes