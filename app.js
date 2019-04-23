//import start

const http = require('http');

const routes = require('./routes');


//import end

const server = http.createServer(routes)

server.listen(3000)