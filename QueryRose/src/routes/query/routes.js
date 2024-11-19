const { queryExecute, clickTable, clickView } = require('../../controllers/query.controller')

const queryRoutes = require('express').Router()

queryRoutes.post('/', queryExecute)

queryRoutes.post('/click-table', clickTable)

queryRoutes.post('/click-view', clickView)

module.exports = queryRoutes