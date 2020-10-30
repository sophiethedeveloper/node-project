const express = require('express') // imports express
require('dotenv').config()

const server = express() /// allows our app to use express

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`\n** Server listening on port ${PORT}`) // listens for a port
})