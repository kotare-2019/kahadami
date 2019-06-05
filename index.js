const server = require('./server')

const port = 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port', port)
})



// ─student@mac-013 ~/workspace/pupparazzi  ‹pano-ben*› 
// ╰─$ lsof -i 3000
// 
//$ sudo kill -9 29768           