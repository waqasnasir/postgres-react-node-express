const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

// setting up express server
const app = express()

// log request to the console
app.use(logger('dev'))

// parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Require our routes into the application.
require('./server/routes')(app)

// default route
app.get('*', (req, res) => res.status(200).send({ message: 'hello there' }))

module.exports = app
