require('dotenv').config()
const express = require('express') // imports express
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const server = express() /// allows our app to use express

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.send('Endpoint Running!')
})

server.listen(PORT, () => {
    console.log(`\n** Server listening on port ${PORT}`.america) // listens for a port
})