const express = require('express')
const hbs = require('express-handlebars')
const { puppiesRoutes } = require('./route')


const server = express()
server.use(express.urlencoded({extended: true}))
// Middleware



server.get('/', (req, res) => {
  res.send("<a href='/puppies'> <img style='height: 100%; width:100%;' src='https://img.buzzfeed.com/buzzfeed-static/static/2016-10/6/16/campaign_images/buzzfeed-prod-fastlane01/the-36-funniest-dog-pics-known-to-man-2-23061-1475785734-1_dblbig.jpg'></a>")
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
