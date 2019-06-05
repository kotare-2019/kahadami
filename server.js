const express = require('express')
const hbs = require('express-handlebars')
const { puppiesRoutes } = require('./route')

const server = express()
server.use(express.urlencoded({extended: true}))
// Middleware



server.get('/', (req, res) => {
  res.redirect('/puppies')
})

server.use('/puppies', puppiesRoutes)


server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

module.exports = server
