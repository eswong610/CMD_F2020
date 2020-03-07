const express = require('express')
const { port, entry } = require('./globals')
const server = express()

server.listen( port, () => console.log( `\nServer live at http://localhost:${port}` ) )