const express = require('express') // imports express

const server = express() /// allows our app to use express

server.listen(5000, () => {
    console.log('\n listening on port 5000 \n') // listens for a port
})