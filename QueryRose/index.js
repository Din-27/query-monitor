const express = require('express')
const cors = require('cors')
const router = require('./src/routes')

const PORT = 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`running on ${PORT}`))