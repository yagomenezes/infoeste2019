/*
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Olá!')
})

server.listen(port, hostname, () => {
    console.log(`Server is running in ${hostname}:${port}!`)
})
*/
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/index')

app.use('/', routes)
app.listen(port)

console.log('\nFunciona!')

module.exports = app