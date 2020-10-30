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


server.get('/', (req, res) => {
    res.send('Endpoint Running!')
})

module.exports = server;