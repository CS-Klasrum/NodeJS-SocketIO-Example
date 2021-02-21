/*

Here is an example of a Simple Server using NodeJS that listens at port 3000 

*/

const http = require('http')

/*

Router is a function/class that handles the forwarding of each request to an specified action (also called as controller)

See: router.js

*/
const router = require('./router')

/**
 * Instantiate a new server using the router
 * 
 */
const server = http.Server(router);

/**
 * Create Socket from Server
 * 
 */
const io = require('socket.io')(server);

const sockets = require('./sockets')(io);

/**
 * Listen for http requests
 * 
 */
server.listen(3000);