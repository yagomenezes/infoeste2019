const express = require('express')
const route = express.Router()

const homeRoute = require('./home.route')
route.use('/batata', homeRoute)

module.exports = route