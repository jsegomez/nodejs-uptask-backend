const Server = require('./server/server');

// Environments
require('dotenv').config();

// Server
const server = new Server();

server.listen();
