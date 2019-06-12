require('dotenv').config;

const server = require('./api/server.js');

const port = 3000 || process.env.PORT;

server.listen(port, () => {
	console.log(`Server is listening on port: ${port}`);
});
