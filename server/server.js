const express = require('express');
const server = express();
const middlewareConfig = require('./config/middleware.js');

// middleware
middlewareConfig(server);
server.use(express.json());

// routers

// test server
server.get('/', (req, res) => {
	res.status(200).json('Web Auth III Challenge!');
});

module.exports = server;
