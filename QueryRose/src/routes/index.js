const connectionRoutes = require('./connection/routes')
const databaseRoutes = require('./databases/routes')
const queryRoutes = require('./query/routes')

const router = require('express').Router()

router.get('/', (req, res) => res.send('sukses'))

router.use('/connection', connectionRoutes)

router.use('/database', databaseRoutes)

router.use('/query', queryRoutes)

module.exports = router