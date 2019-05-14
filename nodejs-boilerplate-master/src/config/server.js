const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const routes = require('../routes/index')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs') //pug

app.use(express.static(path.join(__dirname, '../static/')))
app.use('/', routes)


module.exports = app