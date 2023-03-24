const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const router = require('./router')
const logger = require('./middleware/logger')

const port = process.env.PORT || 5000

const app = express()

app.use(cors({ origin: '*' }))
app.use(helmet())
app.use(express.json())

app.use(router)

app.listen(port, () => {
    console.log(`Server Listen on ${port}`)
})
